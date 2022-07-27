import { ComponentProps, forwardRef, Key, ReactNode } from "react";
import { cssModule, InternalProps, mergeProps, OmitInternalProps, StyledComponentProps } from "../../shared";

import { Box } from "../../box";
import { getItemKeyAndChildren } from "./itemUtil";

const DefaultElement = "div";

export interface InnerStepperProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    children: ReactNode;
    selectedKey?: Key;
}

export function InnerStepper(props: InnerStepperProps) {
    const {
        as = DefaultElement,
        children,
        selectedKey,
        forwardedRef,
        ...rest
    } = props;

    const steps = getItemKeyAndChildren(children);

    let current = -1;
    for (let i = 0; i < steps.length; i++) {
        if (steps[i].key === selectedKey.toString()) {
            current = i;
            break;
        }
    }

    return <Box
        {...mergeProps(
            rest,
            {
                as,
                className: "o-ui-stepper",
                ref: forwardedRef
            }
        )}
    >
        {steps.map((step, i) => (
            <Box
                className={cssModule(
                    "o-ui-step",
                    i < current && "completed",
                    i > current && "inactive"
                )}
                key={step.key}
            >
                <Box className="o-ui-step-dot" />
                {step.children}
                {(i + 1) < steps.length && (
                    <Box className={cssModule(
                        "o-ui-step-connector",
                        i < current && "completed"
                    )}
                    >
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
