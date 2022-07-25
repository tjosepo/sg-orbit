import { ComponentProps, forwardRef } from "react";
import { cssModule, InternalProps, mergeProps, OmitInternalProps, StyledComponentProps } from "../../shared";

import { Box } from "../../box";
import { Step } from "./Step";
import { StepConnector } from "./StepConnector";

const DefaultElement = "div";

export interface InnerStepperProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    children?: typeof Step[];
    connector?: React.ReactNode;
    /**
     * The current step
     */
    current: number;
}

export function InnerStepper(props: InnerStepperProps) {
    const {
        current = 0,
        connector = <StepConnector />,
        children = [<Step key="1" />, <Step key="2" />],
        ...rest
    } = props;

    const length = children.length;

    return <Box {...mergeProps({ className: "o-ui-stepper" }, rest )}>
        {children.map((step, i) => (
            <Box className={cssModule(
                "o-ui-step-root",
                i + 1 < current && "completed",
                i + 1 > current && "inactive"
            )}
            key={i}
            >
                {step}
                {(i + 1) < length && (
                    <Box className={cssModule(
                        "o-ui-step-connector-root",
                        i + 1 < current && "completed"
                    )}
                    >
                        {connector}
                    </Box>
                )}
            </Box>
        ))}
    </Box>;
}

InnerStepper.defaultElement = DefaultElement;

export const Stepper = forwardRef<any, OmitInternalProps<InnerStepperProps>>((props, ref) => (
    <InnerStepper {...props} forwardedRef={ref} />
));

export type StepperProps = ComponentProps<typeof Stepper>;
