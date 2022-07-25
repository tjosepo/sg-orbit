import { Box } from "../../box";
import { Text } from "../../typography";
import { cssModule, mergeProps, StyledComponentProps } from "../../shared";

const DefaultElement = "div";

type StepProps = StyledComponentProps<typeof DefaultElement>;

export const Step = (props: StepProps) => {
    const { as = DefaultElement, children } = props;
    const clickable = props.onClick !== undefined;

    return (<Box
        as={clickable ? "button" : as}
        {...mergeProps({
            className: cssModule(
                "o-ui-step",
                clickable && "clickable"
            )
        }, props )}
    >
        <Box className="o-ui-step-dot" />
        <Text paddingX={4}>{children}</Text>
    </Box>);
};
