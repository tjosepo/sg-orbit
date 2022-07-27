import { ComponentProps, forwardRef, ReactNode } from "react";
import { cssModule, InternalProps, mergeProps, OmitInternalProps, StyledComponentProps } from "../../shared";

import { Box } from "../../box";
import { isItem, useCollection } from "@components/collection";

const DefaultElement = "div";

export interface InnerStepperProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    children: ReactNode;
    selectedKey?: string;
}

export function InnerStepper(props: InnerStepperProps) {
    const {
        as = DefaultElement,
        children,
        selectedKey,
        forwardedRef,
        ...rest
    } = props;

    const steps = useCollection(children).filter(isItem);

    const selectedIndex = steps.findIndex(step => step.key.toString() === selectedKey.toString());

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
                    i < selectedIndex && "completed",
                    i > selectedIndex && "inactive"
                )}
                key={step.key}
            >
                <Box className="o-ui-step-dot" />
                {step.content}
                {(i + 1) < steps.length && (
                    <Box className={cssModule(
                        "o-ui-step-connector",
                        i < selectedIndex && "completed"
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
