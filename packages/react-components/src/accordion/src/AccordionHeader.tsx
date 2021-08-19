import "./Accordion.css";

import { ComponentProps, ElementType, ForwardedRef, ReactNode, forwardRef, useMemo } from "react";
import { DisclosureArrow } from "../../disclosure";
import { Heading, Text } from "../../typography";
import { InteractionStatesProps, cssModule, isNil, mergeProps, omitProps, useSlots } from "../../shared";

export interface InnerAccordionHeaderProps extends InteractionStatesProps {
    /**
    * The header item props
    */
    header?: {
        key: string;
    };
    /**
     * Whether or not the tab is disabled.
     */
    disabled?: boolean;
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

export function InnerAccordionHeader(props: InnerAccordionHeaderProps) {
    const {
        disabled,
        active,
        focus,
        hover,
        as,
        children,
        forwardedRef,
        ...rest
    } = omitProps(props, ["header"]);

    if (isNil(as)) {
        throw new Error("An accordion header must receive an \"as\" prop matching a valid heading type.");
    }

    const { icon, text, counter } = useSlots(children, useMemo(() => ({
        _: {
            defaultWrapper: Text
        },
        icon: {
            className: "o-ui-accordion-icon"
        },
        text: {
            size: "inherit",
            className: "o-ui-accordion-title"
        },
        counter: {
            size: "inherit",
            variant: "divider",
            color: "inherit",
            pushed: true
        }
    }), []));

    return (
        <Heading
            size="2xs"
            className="o-ui-accordion-header"
            as={as}
            ref={forwardedRef}
        >
            <button
                {...mergeProps(
                    rest,
                    {
                        className: cssModule(
                            "o-ui-accordion-trigger",
                            active && "active",
                            focus && "focus",
                            hover && "hover",
                            icon && "has-icon"
                        ),
                        disabled
                    }
                )}
                type="button"
            >
                <div className="o-ui-accordion-trigger-content">
                    {icon}
                    {text}
                    {counter}
                </div>
                <DisclosureArrow className="o-ui-accordion-arrow" />
            </button>
        </Heading>
    );
}

export const AccordionHeader = forwardRef<any, Omit<InnerAccordionHeaderProps, "forwardedRef">>((props, ref) => (
    <InnerAccordionHeader {...props} forwardedRef={ref} />
));

export type AccordionHeaderProps = ComponentProps<typeof AccordionHeader>;

AccordionHeader.displayName = "AccordionHeader";
