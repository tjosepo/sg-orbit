import { FocusManager, FocusOptions } from "./useFocusManager";
import { FocusTarget } from "./focusTarget";
import { RefObject, useEffect } from "react";
import { disposables } from "./useDisposables";
import { isNil } from "lodash";
import { useChainedEventCallback } from "./useChainedEventCallback";
import { useEventCallback } from "./useEventCallback";

interface AbstractAutoFocusProps {
    isDisabled?: boolean;
    delay?: number;
    onFocus?(element?: HTMLElement): void
}

function useAbstractAutoFocus({ isDisabled, delay, onFocus }: AbstractAutoFocusProps): void {
    useEffect(() => {
        const d = disposables();

        if (!isDisabled) {
            if (delay) {
                d.setTimeout(() => { onFocus(); }, delay);
            } else {
                d.nextFrame(() => { onFocus(); });
            }
        }

        return () => {
            d.dispose();
        };
    }, [isDisabled, delay, onFocus]);
}

interface AutoFocusOptions {
    isDisabled?: boolean;
    delay?: number;
    onFocus?(element?: HTMLElement): void
}

export function useAutoFocus<T extends HTMLElement>(targetRef: RefObject<T>, { isDisabled, delay, onFocus }: AutoFocusOptions = {}): void {
    useAbstractAutoFocus({
        isDisabled,
        delay,
        onFocus: useChainedEventCallback(onFocus, () => {
            if (!isNil(targetRef.current) && !targetRef.current.hasAttribute("disabled")) {
                targetRef.current.focus();
            }
        })
    });
}

interface AutoFocusChildOptions extends FocusOptions {
    target?: FocusTarget,
    isDisabled?: boolean,
    delay?: number,
}

export function useAutoFocusChild(focusManager: FocusManager, { target = FocusTarget.first, isDisabled, delay, canFocus, onFocus, onNotFound }: AutoFocusChildOptions = {}): void {
    useAbstractAutoFocus({
        isDisabled: isDisabled,
        delay,
        onFocus: useEventCallback(() => {
            // Do not autofocus another child if there is already one focused.
            if (!focusManager.hasFocus()) {
                focusManager.focusTarget(target, { canFocus, onFocus, onNotFound });
            }
        })
    });
}

