import "./Card.css";

import { Box } from "../../box";
import { ComponentProps, ElementType, ForwardedRef, ReactNode, cloneElement, forwardRef, useMemo } from "react";
import { Text } from "../../typography";
import { cssModule, isNil, isString, mergeProps, normalizeSize, slot, useSlots } from "../../shared";

const defaultElement = "section";

export interface InnerCardProps extends ComponentProps<typeof defaultElement> {
    /**
     * The orientation of the card.
     */
    orientation?: "horizontal" | "vertical";
    /**
     * A card can vary in size.
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /**
     * Whether or not the card take up the width of its container.
     */
    fluid?: boolean;
    /**
     * @ignore
     */
    as?: ElementType;
    /**
     * Default slot override.
     */
    slot?: string;
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * @ignore
     */
    forwardedRef: ForwardedRef<any>;
}

export function InnerCard({
    orientation = "vertical",
    size,
    fluid,
    as = defaultElement,
    children,
    forwardedRef,
    ...rest
}: InnerCardProps) {
    const { image, illustration, heading, header, content, button, "button-group": buttonGroup } = useSlots(children, useMemo(() => ({
        _: {
            required: ["heading", "content"]
        },
        image: null,
        illustration: {
            orientation: orientation === "horizontal" ? "vertical" : "horizontal",
            className: "o-ui-card-illustration"
        },
        heading: {
            className: "o-ui-card-heading",
            size: "xs",
            as: "span"
        },
        header: {
            className: "o-ui-card-header"
        },
        content: {
            className: "o-ui-card-content",
            as: Text
        },
        button: {
            className: "o-ui-card-button"
        },
        "button-group": {
            className: "o-ui-card-button-group"
        }
    }), [orientation]));

    const headerMarkup = isString(header?.props?.children)
        ? cloneElement(header, { children: <Text>{header?.props?.children}</Text> })
        : header;

    const imageMarkup = image && (
        <Box className="o-ui-card-image">
            {image}
        </Box>
    );

    const headerSectionMarkup = (
        <Box className="o-ui-card-header-section">
            {heading}
            {headerMarkup}
        </Box>
    );

    const footerSectionMarkup = (!isNil(button) || !isNil(buttonGroup)) && (
        <Box className="o-ui-card-footer-section">
            {button}
            {buttonGroup}
        </Box>
    );

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    className: cssModule(
                        "o-ui-card",
                        orientation,
                        !fluid && normalizeSize(size),
                        fluid && "fluid"
                    ),
                    as,
                    ref: forwardedRef
                }
            )}
        >
            {imageMarkup}
            {illustration}
            <Box className="o-ui-card-aside">
                {headerSectionMarkup}
                {content}
                {footerSectionMarkup}
            </Box>
        </Box>
    );
}

export const Card = slot("card", forwardRef<any, Omit<InnerCardProps, "forwardedRef">>((props, ref) => (
    <InnerCard {...props} forwardedRef={ref} />
)));

export type CardProps = ComponentProps<typeof Card>;

Card.displayName = "Card";
