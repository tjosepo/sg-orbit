import { RefObject, useCallback, useEffect, useReducer } from "react";
import { isNil, useCommittedRef, useDisposables, useIsInitialRender } from "../../shared";
import { match } from "./match";

enum ActionType {
    slideDown = "SlideDown",
    slideUp = "SlideUp",
    completeTransition = "CompleteTransition"
}

enum TransitionState {
    transitioning = "Transitioning",
    completed = "Completed"
}

enum SlidingDirection {
    down = "Down",
    up = "Up"
}

export interface SlidingTransitionState {
    direction: SlidingDirection;
    transitionState: TransitionState;
}

function reducer(state: SlidingTransitionState, action: ActionType) {
    return match<ActionType, SlidingTransitionState>(action, {
        [ActionType.slideDown]: () => ({
            direction: SlidingDirection.down,
            transitionState: TransitionState.transitioning
        }),
        [ActionType.slideUp]: () => ({
            direction: SlidingDirection.up,
            transitionState: TransitionState.transitioning
        }),
        [ActionType.completeTransition]: () => ({
            direction: state.direction,
            transitionState: TransitionState.completed
        })
    });
}

export interface SlidingTransition {
    transitionClasses: string;
    transitionProps: {
        onTransitionEnd?: () => void;
    };
}

// For a better understanding of the techniques behind this animation, read https://css-tricks.com/using-css-transitions-auto-dimensions/#technique-3-javascript
// and have a look at https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Collapse.tsx
export function useSlidingTransition(isOpen: boolean, ref: RefObject<any>): SlidingTransition {
    const [{ direction, transitionState }, dispatch] = useReducer(reducer, {
        direction: isOpen ? SlidingDirection.down : SlidingDirection.up,
        transitionState: TransitionState.completed
    });

    const disposables = useDisposables();

    const slideDown = useCallback(() => { dispatch(ActionType.slideDown); }, [dispatch]);
    const slideUp = useCallback(() => { dispatch(ActionType.slideUp); }, [dispatch]);
    const completeTransition = useCallback(() => { dispatch(ActionType.completeTransition); }, [dispatch]);

    const isInitialRender = useCommittedRef(useIsInitialRender().current);

    useEffect(() => {
        if (!isInitialRender.current) {
            if (isOpen) {
                slideDown();
            } else {
                slideUp();
            }
        }
    }, [isOpen, isInitialRender, slideDown, slideUp]);

    useEffect(() => {
        match(transitionState, {
            [TransitionState.transitioning]: () => {
                match(direction, {
                    [SlidingDirection.down]: () => {
                        disposables.nextFrame(() => {
                            if (!isNil(ref.current)) {
                                ref.current.style.height = "0px";
                                ref.current.style.opacity = "0";

                                disposables.nextFrame(() => {
                                    if (!isNil(ref.current)) {
                                        ref.current.style.height = `${ref.current.scrollHeight}px`;
                                        ref.current.style.opacity = "1";
                                    }
                                });
                            }
                        });
                    },
                    [SlidingDirection.up]: () => {
                        disposables.nextFrame(() => {
                            if (!isNil(ref.current)) {
                                ref.current.style.height = `${ref.current.scrollHeight}px`;

                                disposables.nextFrame(() => {
                                    if (!isNil(ref.current)) {
                                        ref.current.style.height = "0px";
                                        ref.current.style.opacity = "0";
                                    }
                                });
                            }
                        });
                    }
                });
            },
            [TransitionState.completed]: () => {
                disposables.nextFrame(() => {
                    if (!isNil(ref.current)) {
                        ref.current.style.height = null;
                    }
                });
            }
        });
    }, [transitionState, direction, disposables, ref]);

    return match(transitionState, {
        [TransitionState.transitioning]: () => ({
            transitionClasses: direction === SlidingDirection.down ? "expanding o-ui-disclosure-slide-down" : "collapsing o-ui-disclosure-slide-up",
            transitionProps: { onTransitionEnd: completeTransition }
        }),
        [TransitionState.completed]: () => ({
            transitionClasses: direction === SlidingDirection.down ? "expanded" : "collapsed",
            transitionProps: {}
        })
    });
}
