import { FieldMessage, getValidationProps, useFieldMessage } from "./FieldMessage";
import { any, elementType, oneOf, oneOfType, string } from "prop-types";
import { forwardRef } from "react";
import { mergeProps } from "../../shared";

const propTypes = {
    /**
     * A message can vary in size.
     */
    size: oneOf(["small", "medium", "large"]),
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * @ignore
     */
    children: any.isRequired
};

const defaultProps = {
    as: "div"
};

export function InnerErrorMessage(props) {
    const { isInField, validationState, ...messageProps } = useFieldMessage();
    const { isError } = getValidationProps(validationState);

    const {
        forwardedRef,
        children,
        ...rest
    } = mergeProps(props, messageProps);

    if (isInField && !isError) {
        return null;
    }

    return (
        <FieldMessage
            {...rest}
            variant="error"
            ref={forwardedRef}
        >
            {children}
        </FieldMessage>
    );
}

InnerErrorMessage.propTypes = propTypes;
InnerErrorMessage.defaultProps = defaultProps;

export const ErrorMessage = forwardRef((props, ref) => (
    <InnerErrorMessage {...props} forwardedRef={ref} />
));
