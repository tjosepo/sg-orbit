import "./Badge.css";

import { Box } from "../../box";
import { Children, forwardRef } from "react";
import { StyleProvider, cssModule, mergeProps } from "../../shared";
import { any, elementType, oneOf, oneOfType, string } from "prop-types";

const propTypes = {
    /**
     * The style to use.
     */
    variant: oneOf(["count", "dot", "icon"]),
    /**
     * The shape of the element being overlap by the badge.
     */
    overlap: oneOf(["circle", "icon"]),
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * React children.
     */
    children: any.isRequired
};

export function InnerBadge({
    variant = "count",
    overlap,
    as = "div",
    children,
    forwardedRef,
    ...rest
}) {
    // Not using slots because the overlapped content could also be an icon and thinks get complicated.
    let [badgeContent, overlappedElement] = Children.toArray(children);

    if (variant === "dot") {
        overlappedElement = badgeContent;
        badgeContent = undefined;
    }

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    className: cssModule(
                        "o-ui-badge",
                        variant,
                        overlap && `over-${overlap}`
                    ),
                    as,
                    ref: forwardedRef
                }
            )}
        >
            <StyleProvider
                value={{
                    text: {
                        size: "sm"
                    }
                }}
            >
                <div className="o-ui-badge-anchor">
                    {badgeContent}
                </div>
            </StyleProvider>
            {overlappedElement}
        </Box>
    );
}

InnerBadge.propTypes = propTypes;

export const Badge = forwardRef((props, ref) => (
    <InnerBadge {...props} forwardedRef={ref} />
));

Badge.displayName = "Badge";