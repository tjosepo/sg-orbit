import { act, waitFor } from "@testing-library/react";

import { Radio } from "@components/radio";
import { createRef } from "react";
import { renderWithTheme } from "@jest-utils";
import userEvent from "@testing-library/user-event";

function getInput(element: Element) {
    return element.querySelector("input") as HTMLInputElement;
}

// ***** Behaviors *****

test("when autofocus is true, the radio is focused on render", async () => {
    const { getByTestId } = renderWithTheme(
        <Radio autoFocus value="1" data-testid="radio">1</Radio>
    );

    await waitFor(() => expect(getInput(getByTestId("radio"))).toHaveFocus());
});

test("when autofocus is true and the radio is disabled, the radio is not focused on render", async () => {
    const { getByTestId } = renderWithTheme(
        <Radio disabled autoFocus value="1" data-testid="radio">1</Radio>
    );

    await waitFor(() => expect(getInput(getByTestId("radio"))).not.toHaveFocus());
});

test("when autofocus is specified with a delay, the radio is focused after the delay", async () => {
    const { getByTestId } = renderWithTheme(
        <Radio autoFocus={10} value="1" data-testid="radio">1</Radio>
    );

    expect(getInput(getByTestId("radio"))).not.toHaveFocus();

    await waitFor(() => expect(getInput(getByTestId("radio"))).toHaveFocus());
});

// ***** Api *****

test("call onChange when the radio is checked", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <Radio value="1" onChange={handler} data-testid="radio">1</Radio>
    );

    act(() => {
        userEvent.click(getInput(getByTestId("radio")));
    });

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything()));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("call onValueChange when the radio is checked", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <Radio value="1" onValueChange={handler} data-testid="radio">1</Radio>
    );

    act(() => {
        userEvent.click(getInput(getByTestId("radio")));
    });

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), true));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("dont call onValueChange when the radio is disabled", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <Radio disabled value="1" onValueChange={handler} data-testid="radio">1</Radio>
    );

    act(() => {
        userEvent.click(getInput(getByTestId("radio")));
    });

    await waitFor(() => expect(handler).not.toHaveBeenCalled());
});

test("can focus the radio with the focus api", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <Radio
            value="1"
            ref={node => {
                refNode = node;
            }}
        >1</Radio>
    );

    act(() => {
        refNode.focus();
    });

    await waitFor(() => expect(getInput(refNode)).toHaveFocus());
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <Radio value="1" ref={ref}>1</Radio>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("LABEL");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <Radio
            value="1"
            ref={node => {
                refNode = node;
            }}
        >1</Radio>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("LABEL");
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <Radio value="1" ref={handler}>1</Radio>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
