import { AriaAttributes } from "react";
import { HtmlButton } from "../../html";
import { InteractionProps, InternalProps, MergedRef, Size, cssModule, isNumber, mergeClasses, normalizeSize, useAutoFocus, useMergedRefs } from "../../shared";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "negative";

export interface UseButtonProps extends Partial<InternalProps>, InteractionProps {
    autoFocus?: boolean | number;
    cssModule?: string;
    fluid?: boolean;
    inherit?: boolean;
    loading?: boolean;
    size?: Size;
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
}

export interface UseButtonReturn {
    "aria-busy": boolean;
    "aria-live": AriaAttributes["aria-live"];
    className: string;
    ref: MergedRef<any>;
    type: UseButtonProps["type"];
}

export function useButton({
    active,
    as,
    autoFocus,
    cssModule: module,
    fluid,
    focus,
    forwardedRef,
    hover,
    inherit,
    loading,
    size,
    type = "button",
    variant = "primary"
}: UseButtonProps): UseButtonReturn {
    const buttonRef = useMergedRefs(forwardedRef);

    useAutoFocus(buttonRef, {
        delay: isNumber(autoFocus) ? autoFocus : undefined,
        isDisabled: !autoFocus
    });

    return {
        "aria-busy": loading,
        "aria-live": "polite",
        className: mergeClasses(
            module,
            cssModule(
                "o-ui-button",
                variant,
                inherit && "inherit-style",
                fluid && "fluid",
                loading && "loading",
                active && "active",
                focus && "focus",
                hover && "hover",
                normalizeSize(size)
            )
        ),
        ref: buttonRef,
        type: type ?? (as === HtmlButton ? "button" : undefined)
    };
}
