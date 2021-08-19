import "./Tooltip.css";

import { ComponentProps,ElementType, ForwardedRef, ReactNode, forwardRef } from "react";
import { Text } from "../../typography";
import { mergeProps } from "../../shared";

const defaultElement = "div";

export interface InnerTooltipProps extends Omit<ComponentProps<typeof defaultElement>, "color"> {
    /**
     * @ignore
     */
    as?: ElementType;
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * @ignore
     */
    forwardedRef: ForwardedRef<any>;
}

export function InnerTooltip({
    as = defaultElement,
    children,
    forwardedRef,
    ...rest
}: InnerTooltipProps) {
    return (
        <Text
            {...mergeProps(
                rest,
                {
                    className: "o-ui-tooltip",
                    role: "tooltip",
                    as,
                    ref: forwardedRef
                }
            )}
        >
            {children}
        </Text>
    );
}

export const Tooltip = forwardRef<any, Omit<InnerTooltipProps, "forwardedRef">>((props, ref) => (
    <InnerTooltip {...props} forwardedRef={ref} />
));

export type TooltipProps = ComponentProps<typeof Tooltip>;

Tooltip.displayName = "Tooltip";
