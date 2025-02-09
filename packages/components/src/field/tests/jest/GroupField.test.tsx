import { Checkbox, CheckboxGroup } from "@components/checkbox";
import { GroupField, HelpMessage, Label } from "@components/field";
import { createRef } from "react";
import { renderWithTheme } from "@jest-utils";
import { waitFor } from "@testing-library/react";

// ***** Aria *****

test("when an id is provided, the group field id attribute match the provided id", async () => {
    const { getByTestId } = renderWithTheme(
        <GroupField id="foo" data-testid="field">
            <Label data-testid="field-label">Your favorite galaxy?</Label>
            <CheckboxGroup>
                <Checkbox value="milky-way" >Milky Way</Checkbox>
                <Checkbox value="andromeda">Andromeda</Checkbox>
                <Checkbox value="medusa">Medusa</Checkbox>
            </CheckboxGroup>
        </GroupField>
    );

    await waitFor(() => expect(getByTestId("field")).toHaveAttribute("id", "foo"));
});

test("when the id is auto generated, the group field aria-labelledby attribute match the label id", async () => {
    const { getByTestId } = renderWithTheme(
        <GroupField data-testid="field">
            <Label data-testid="field-label">Your favorite galaxy?</Label>
            <CheckboxGroup>
                <Checkbox value="milky-way" >Milky Way</Checkbox>
                <Checkbox value="andromeda">Andromeda</Checkbox>
                <Checkbox value="medusa">Medusa</Checkbox>
            </CheckboxGroup>
        </GroupField>
    );

    const field = await waitFor(() => getByTestId("field"));
    const label = await waitFor(() => getByTestId("field-label"));

    expect(field.getAttribute("aria-labelledby")).toBe(label.getAttribute("id"));
});

test("when an id is provided, the group field aria-labelledby attribute match the label id", async () => {
    const { getByTestId } = renderWithTheme(
        <GroupField id="foo" data-testid="field">
            <Label data-testid="field-label">Your favorite galaxy?</Label>
            <CheckboxGroup>
                <Checkbox value="milky-way" >Milky Way</Checkbox>
                <Checkbox value="andromeda">Andromeda</Checkbox>
                <Checkbox value="medusa">Medusa</Checkbox>
            </CheckboxGroup>
        </GroupField>
    );

    const field = await waitFor(() => getByTestId("field"));
    const label = await waitFor(() => getByTestId("field-label"));

    expect(field.getAttribute("aria-labelledby")).toBe(label.getAttribute("id"));
});

test("when the id is auto generated, the group field aria-describedby attribute match the message id", async () => {
    const { getByTestId } = renderWithTheme(
        <GroupField data-testid="field">
            <Label data-testid="field-label">Your favorite galaxy?</Label>
            <CheckboxGroup>
                <Checkbox value="milky-way" >Milky Way</Checkbox>
                <Checkbox value="andromeda">Andromeda</Checkbox>
                <Checkbox value="medusa">Medusa</Checkbox>
            </CheckboxGroup>
            <HelpMessage data-testid="field-message">Please tell me!</HelpMessage>
        </GroupField>
    );

    const field = await waitFor(() => getByTestId("field"));
    const message = await waitFor(() => getByTestId("field-message"));

    expect(field.getAttribute("aria-describedby")).toBe(message.getAttribute("id"));
});

test("when an id is provided, the group field aria-describedby attribute match the message id", async () => {
    const { getByTestId } = renderWithTheme(
        <GroupField id="foo" data-testid="field">
            <Label data-testid="field-label">Your favorite galaxy?</Label>
            <CheckboxGroup>
                <Checkbox value="milky-way" >Milky Way</Checkbox>
                <Checkbox value="andromeda">Andromeda</Checkbox>
                <Checkbox value="medusa">Medusa</Checkbox>
            </CheckboxGroup>
            <HelpMessage data-testid="field-message">Please tell me!</HelpMessage>
        </GroupField>
    );

    const field = await waitFor(() => getByTestId("field"));
    const message = await waitFor(() => getByTestId("field-message"));

    expect(field.getAttribute("aria-describedby")).toBe(message.getAttribute("id"));
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <GroupField ref={ref}>
            <CheckboxGroup>
                <Checkbox value="milky-way" >Milky Way</Checkbox>
                <Checkbox value="andromeda">Andromeda</Checkbox>
                <Checkbox value="medusa">Medusa</Checkbox>
            </CheckboxGroup>
        </GroupField>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <GroupField
            ref={node => {
                refNode = node;
            }}
        >
            <CheckboxGroup>
                <Checkbox value="milky-way" >Milky Way</Checkbox>
                <Checkbox value="andromeda">Andromeda</Checkbox>
                <Checkbox value="medusa">Medusa</Checkbox>
            </CheckboxGroup>
        </GroupField>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("DIV");
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <GroupField ref={handler}>
            <CheckboxGroup>
                <Checkbox value="milky-way" >Milky Way</Checkbox>
                <Checkbox value="andromeda">Andromeda</Checkbox>
                <Checkbox value="medusa">Medusa</Checkbox>
            </CheckboxGroup>
        </GroupField>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
