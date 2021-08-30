import { ForwardedRef } from "react";
import { InteractionStatesProps, cssModule, isNumber, mergeClasses, useAutoFocus, useMergedRefs } from "../../shared";

export interface UseLinkProps extends InteractionStatesProps {
    autoFocus?: boolean | number;
    color?: string;
    cssModule?: string;
    disabled?: boolean;
    external?: boolean;
    forwardedRef?: ForwardedRef<HTMLElement>;
    rel?: string;
    shape?: string;
    target?: string;
    underline?: string;
    visited?: boolean;
}

export function useLink({
    cssModule: module,
    color,
    underline,
    shape,
    external,
    autoFocus,
    active,
    focus,
    hover,
    disabled,
    visited,
    target,
    rel,
    forwardedRef
}: UseLinkProps) {
    const linkRef = useMergedRefs(forwardedRef);

    useAutoFocus(linkRef, {
        delay: isNumber(autoFocus) ? autoFocus : undefined,
        isDisabled: !autoFocus
    });

    return {
        linkProps: {
            className: mergeClasses(
                module,
                cssModule(
                    "o-ui-link",
                    color === "inherit" ? "inherit-color" : color,
                    underline === "none" ? "no-underline" : underline,
                    shape,
                    active && "active",
                    focus && "focus",
                    hover && "hover",
                    visited && "visited",
                    disabled && "disabled"
                )
            ),
            ref: linkRef,
            rel: rel ?? (external ? "noopener noreferrer" : undefined),
            tabIndex: disabled ? -1 : undefined,
            target: target ?? (external ? "_blank" : undefined)
        },
        showNewTabIndicator: target === "_blank"
    };
}
