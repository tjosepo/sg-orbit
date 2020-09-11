import "./Switch.css";

import { ClearSlots, SlotProvider, mergeProps } from "../../shared";
import { Text, textSlot } from "../../text";
import { VisuallyHidden } from "../../visually-hidden";
import { any, bool, elementType, func, number, oneOf, oneOfType, string } from "prop-types";
import { counterSlot } from "../../counter";
import { forwardRef } from "react";
import { iconSlot } from "../../icons";
import { isFunction } from "lodash";
import { useCheckbox } from "../../checkbox";
import { useFieldInput } from "../../field";

const propTypes = {
    /**
     * A controlled checked state value.
     */
    checked: bool,
    /**
     * The initial value of `checked` when uncontrolled.
     */
    defaultChecked: bool,
    /**
     * Whether the checkbox should autoFocus on render.
     */
    autoFocus: bool,
    /**
     * Delay before trying to autofocus.
     */
    autoFocusDelay: number,
    /**
     * Whether a user input is required before form submission.
     */
    required: bool,
    /**
     * Whether the checkbox should display as "valid" or "invalid".
     */
    validationState: oneOf(["valid", "invalid"]),
    /**
     * A checkbox can vary in size.
     */
    size: oneOf(["small", "medium", "large"]),
    /**
     * Invert the order the checkmark box and the label.
     */
    reverse: bool,
    /**
     * Called when the switch checked state change.
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @returns {void}
     */
    onChange: func,
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * Component children.
     */
    children: oneOfType([any, func])
};

const defaultProps = {
    as: "label"
};

export function InnerSwitch(props) {
    const { isInField, ...fieldProps } = useFieldInput();

    const {
        id,
        checked,
        defaultChecked,
        autoFocus,
        autoFocusDelay,
        required,
        validationState,
        onChange,
        size,
        reverse,
        name,
        tabIndex,
        active,
        focus,
        hover,
        disabled,
        as: ElementType,
        className,
        children,
        forwardedRef,
        ...rest
    } = mergeProps(props, fieldProps);

    const {
        isChecked,
        wrapperProps,
        inputProps
    } = useCheckbox({
        cssModule: "o-ui-switch",
        isInField,
        id,
        checked,
        defaultChecked,
        autoFocus,
        autoFocusDelay,
        required,
        validationState,
        onChange,
        size,
        reverse,
        name,
        tabIndex,
        active,
        focus,
        hover,
        disabled,
        className,
        forwardedRef
    });

    let content = isFunction(children)
        ? children({ isChecked }, props)
        : children;

    if (typeof content === "string") {
        content = <Text>{content}</Text>;
    }

    return (
        <ElementType
            data-testid="switch"
            {...rest}
            {...wrapperProps}
        >
            <VisuallyHidden {...inputProps} />
            <span className="o-ui-switch-switch" />
            <ClearSlots>
                <SlotProvider
                    slots={{
                        text: textSlot({
                            size,
                            className: "o-ui-switch-label"
                        }),
                        icon: iconSlot({
                            size,
                            className: "o-ui-switch-icon"
                        }),
                        counter: counterSlot({
                            size,
                            reverse,
                            className: "o-ui-switch-counter"
                        })
                    }}
                >
                    {content}
                </SlotProvider>
            </ClearSlots>
        </ElementType>
    );
}

InnerSwitch.propTypes = propTypes;
InnerSwitch.defaultProps = defaultProps;

export const Switch = forwardRef((props, ref) => (
    <InnerSwitch {...props} forwardedRef={ref} />
));

export const Toggle = Switch;
