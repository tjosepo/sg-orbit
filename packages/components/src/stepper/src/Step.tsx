import { Box } from "../../box";
import { Text } from "../../typography";
import { cssModule, InternalProps, mergeProps, OmitInternalProps, StyledComponentProps } from "../../shared";
import { forwardRef, ComponentProps } from "react";

const DefaultElement = "div";

interface InnerStepProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {}

export const InnerStep = (props: InnerStepProps) => {
    const {
        as = DefaultElement,
        children,
        forwardedRef,
        ...rest
    } = props;
    const clickable = props.onClick !== undefined;

    return (<Box
        {...mergeProps(
            rest,
            {
                as: clickable ? "button" : as,
                className: cssModule(
                    "o-ui-step",
                    clickable && "clickable"
                ),
                ref: forwardedRef
            }
        )}
    >
        <Box className="o-ui-step-dot" />
        <Text paddingX={4}>{children}</Text>
    </Box>);
};

InnerStep.defaultElement = DefaultElement;

export const Step = forwardRef<any, OmitInternalProps<InnerStepProps>>((props, ref) => (
    <InnerStep {...props} forwardedRef={ref} />
));

export type StepProps = ComponentProps<typeof Step>;
