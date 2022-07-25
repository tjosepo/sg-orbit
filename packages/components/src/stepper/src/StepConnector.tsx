import { Box } from "../../box";
import { mergeProps } from "../../shared";


export const StepConnector = () => {
    return (<Box
        {...mergeProps(
            {
                className: "o-ui-step-connector"
            }
        )}
    />);
};
