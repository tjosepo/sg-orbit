import { ComponentProps, ElementType, ForwardedRef, ReactNode, forwardRef } from "react";
import { FieldMessage, getValidationProps } from "./FieldMessage";
import { mergeProps } from "../../shared";
import { useFieldMessageProps } from "./FieldContext";

export interface InnerValidMessageProps {
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

export function InnerValidMessage(props: InnerValidMessageProps) {
    const [{ validationState, ...messageProps }, isInField] = useFieldMessageProps();

    const { isValid } = getValidationProps(validationState);

    const {
        forwardedRef,
        children,
        ...rest
    } = mergeProps(props, messageProps);

    if (isInField && !isValid) {
        return null;
    }

    return (
        <FieldMessage
            {...rest}
            tone="success"
            ref={forwardedRef}
        >
            {children}
        </FieldMessage>
    );
}

export const ValidMessage = forwardRef<any, Omit<InnerValidMessageProps, "forwardedRef">>((props, ref) => (
    <InnerValidMessage {...props} forwardedRef={ref} />
));

export type ValidMessageProps = ComponentProps<typeof ValidMessage>;

ValidMessage.displayName = "ValidMessage";
