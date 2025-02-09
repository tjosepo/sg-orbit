import { Field, HelpMessage, Label } from "@components/field";
import { Inline, Stack } from "@components/layout";
import { Radio, RadioGroup } from "@components/radio";
import { paramsBuilder, storiesOfBuilder } from "@stories/utils";

import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { Tag } from "@components/tag";
import { Text } from "@components/typography";
import { ToggleButton } from "@components/button";
import { useCallback } from "react";
import { useCheckableProps } from "@components/shared";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/RadioGroup")
        .segment(segment)
        .parameters(paramsBuilder()
            .chromaticDelay(100)
            .build())
        .build();
}

function CustomComponent({
    value,
    children,
    ...rest
}) {
    const [{ checked: isChecked, onCheck, ...checkableProps }] = useCheckableProps({ value });

    const handleCheck = useCallback(event => {
        onCheck(event, value);
    }, [value, onCheck]);

    return (
        <Tag
            {...rest}
            {...checkableProps}
            as="button"
            value={value}
            onClick={handleCheck}
            color={isChecked ? "white" : undefined}
            backgroundColor={isChecked ? "accent-6" : "neutral-6"}
        >
            {children}
        </Tag>
    );
}

stories()
    .add("default", () =>
        <RadioGroup>
            <Radio value="1">1</Radio>
            <Radio value="2">2</Radio>
            <Radio value="3">3</Radio>
        </RadioGroup>
    )
    .add("selection", () =>
        <Inline>
            <RadioGroup value="2">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup defaultValue="2">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Inline>
    )
    .add("number", () =>
        <RadioGroup defaultValue={2}>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
        </RadioGroup>
    )
    .add("disabled", () =>
        <RadioGroup disabled>
            <Radio value="1">1</Radio>
            <Radio value="2">2</Radio>
            <Radio value="3">3</Radio>
        </RadioGroup>
    )
    .add("disabled radio", () =>
        <RadioGroup>
            <Radio disabled value="1">1</Radio>
            <Radio value="2">2</Radio>
            <Radio value="3">3</Radio>
        </RadioGroup>
    )
    .add("gap", () =>
        <RadioGroup gap={13}>
            <Radio value="1">1</Radio>
            <Radio value="2">2</Radio>
            <Radio value="3">3</Radio>
        </RadioGroup>
    )
    .add("wrap", () =>
        <Div width={11}>
            <RadioGroup wrap orientation="horizontal">
                {["1", "2", "3", "4", "5", "6", "7", "8"].map(x =>
                    <Radio width={6} value={x} key={x}>{x}</Radio>
                )}
            </RadioGroup>
        </Div>
    )
    .add("no wrap", () =>
        <Div width={11}>
            <RadioGroup wrap={false} orientation="horizontal">
                {["1", "2", "3", "4", "5", "6", "7", "8"].map(x =>
                    <Radio width={6} value={x} key={x}>{x}</Radio>
                )}
            </RadioGroup>
        </Div>
    )
    .add("overflow wrapped", () =>
        <Div width={11}>
            <RadioGroup wrap orientation="horizontal">
                {["1", "2", "3", "Neptune", "5", "6", "7", "8"].map(x =>
                    <Radio value={x} key={x}>{x}</Radio>
                )}
            </RadioGroup>
        </Div>
    )
    .add("toggle buttons", () =>
        <RadioGroup gap={2} orientation="horizontal" defaultValue="2">
            <ToggleButton variant="secondary" value="1">1</ToggleButton>
            <ToggleButton variant="secondary" value="2">2</ToggleButton>
            <ToggleButton variant="secondary" value="3">3</ToggleButton>
        </RadioGroup>
    )
    .add("custom components", () =>
        <RadioGroup gap={2} orientation="horizontal" defaultValue="2">
            <CustomComponent value="1">1</CustomComponent>
            <CustomComponent value="2">2</CustomComponent>
            <CustomComponent value="3">3</CustomComponent>
        </RadioGroup>
    )
    .add("validation", () =>
        <Inline gap={13}>
            <RadioGroup validationState="invalid">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup validationState="valid">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Inline>
    )
    .add("styling", () =>
        <Inline>
            <RadioGroup border="warning-7">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup className="bg-red">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup style={{ backgroundColor: "red" }}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Inline>
    )
    .add("reverse", () =>
        <Stack inline>
            <Field>
                <Label>Select a package</Label>
                <RadioGroup reverse>
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">3</Radio>
                </RadioGroup>
            </Field>
            <Field>
                <Label>Select a package</Label>
                <RadioGroup reverse>
                    <Radio value="1">1</Radio>
                    <Radio value="2">A very long option to read while you wait for the countdown to mars.</Radio>
                    <Radio value="3">3</Radio>
                </RadioGroup>
                <HelpMessage>You can find a detailed description of our flight packages on our website.</HelpMessage>
            </Field>
            <Inline>
                <RadioGroup orientation="horizontal" reverse label="Select a package">
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">
                        <Text>3</Text>
                        <Counter>60</Counter>
                    </Radio>
                </RadioGroup>
                <Div border="1px solid #000" width="100%" height={7}></Div>
            </Inline>
        </Stack>
    );

stories("/horizontal")
    .add("default", () =>
        <RadioGroup orientation="horizontal">
            <Radio value="1">1</Radio>
            <Radio value="2">
                <Text>2</Text>
                <Counter>60</Counter>
            </Radio>
            <Radio value="3">3</Radio>
        </RadioGroup>
    )
    .add("reverse", () =>
        <RadioGroup reverse orientation="horizontal">
            <Radio value="1">1</Radio>
            <Radio value="2">A very long option to read while you wait for the countdown to mars.</Radio>
            <Radio value="3">3</Radio>
        </RadioGroup>
    );

