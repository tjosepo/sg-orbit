import { ComponentProps, forwardRef } from "react";
import { FieldMessage, FieldMessageDefaultElement, SharedFieldMessageProps, getValidationProps } from "./FieldMessage";
import { OmitInternalProps, mergeProps } from "../../shared";
import { useFieldMessageProps } from "./FieldContext";

export function InnerValidMessage(props: SharedFieldMessageProps) {
    const [{ validationState, ...messageProps }, isInField] = useFieldMessageProps();

    const { isValid } = getValidationProps(validationState);

    const {
        children,
        forwardedRef,
        ...rest
    } = mergeProps(props, messageProps);

    if (isInField && !isValid) {
        return null;
    }

    return (
        <FieldMessage
            {...rest}
            ref={forwardedRef}
            variant="success"
        >
            {children}
        </FieldMessage>
    );
}

InnerValidMessage.defaultElement = FieldMessageDefaultElement;

export const ValidMessage = forwardRef<any, OmitInternalProps<SharedFieldMessageProps>>((props, ref) => (
    <InnerValidMessage {...props} forwardedRef={ref} />
));

export type ValidMessageProps = ComponentProps<typeof ValidMessage>;
