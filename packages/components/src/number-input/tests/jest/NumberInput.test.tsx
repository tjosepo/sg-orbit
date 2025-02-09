import { Field, Label } from "@components/field";
import { act, waitFor } from "@testing-library/react";

import { NumberInput } from "@components/number-input";
import { createRef } from "react";
import { renderWithTheme } from "@jest-utils";
import userEvent from "@testing-library/user-event";

// ***** Behaviors *****

test("accept numbers", async () => {
    const { getByTestId } = renderWithTheme(
        <NumberInput aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.type(getByTestId("input"), "1");
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(1));
});

test("accept negative numbers", async () => {
    const { getByTestId } = renderWithTheme(
        <NumberInput aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.type(getByTestId("input"), "-1");
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(-1));
});

// test("accept floating numbers", async () => {
//     const { getByTestId } = renderWithTheme(
//         <NumberInput data-testid="input" />
//     );

//     act(() => {
//         getByTestId("input").focus();
//     });

//     act(() => {
//         userEvent.type(getByTestId("input"), "0.1");
//     });

//     await waitFor(() => expect(getByTestId("input")).toHaveValue(0.1));
// });

test("do not accept non numeric characters", async () => {
    const { getByTestId } = renderWithTheme(
        <NumberInput aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.type(getByTestId("input"), "a");
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(null));

    act(() => {
        userEvent.type(getByTestId("input"), "$");
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(null));
});

test("increment value on increment button click", async () => {
    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput defaultValue={1} aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.click(getByLabelText("Increment value"));
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(2));
});

test("when a value has been entered, increment the entered value on increment button click", async () => {
    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.type(getByTestId("input"), "10");
    });

    act(() => {
        userEvent.click(getByLabelText("Increment value"));
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(11));
});

test("decrement value on decrement button click", async () => {
    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput defaultValue={1} aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.click(getByLabelText("Decrement value"));
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(0));
});

test("when a value has been entered, decrement the entered value on decrement button click", async () => {
    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.type(getByTestId("input"), "10");
    });

    act(() => {
        userEvent.click(getByLabelText("Decrement value"));
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(9));
});

test("when no value has been entered yet and the increment button is clicked, set value to 1", async () => {
    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.click(getByLabelText("Increment value"));
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(1));
});

test("when no value has been entered yet and the decrement button is clicked, set value to -1", async () => {
    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.click(getByLabelText("Decrement value"));
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(-1));
});

test("when a max value is specified, do not increment over the max value", async () => {
    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput defaultValue={1} max={2} aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.click(getByLabelText("Increment value"));
    });

    act(() => {
        userEvent.click(getByLabelText("Increment value"));
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(2));
});

test("when a max value is specified and no value has been set yet, do not increment over the max value", async () => {
    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput max={0} aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.click(getByLabelText("Increment value"));
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(0));
});

test("when a min value is specified, do not decrement under the min value", async () => {
    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput defaultValue={5} min={4} aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.click(getByLabelText("Decrement value"));
    });

    act(() => {
        userEvent.click(getByLabelText("Decrement value"));
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(4));
});

test("when a min value is specified and no value has been set yet, do not decrement under the max value", async () => {
    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput min={4} aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.click(getByLabelText("Decrement value"));
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(4));
});

test("when the entered value is lower than the min value, reset value to min value on blur", async () => {
    const { getByTestId } = renderWithTheme(
        <NumberInput min={3} aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.type(getByTestId("input"), "2");
    });

    act(() => {
        userEvent.click(document.body);
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(3));
});

test("when the entered value is greater than the max value, reset the value to the max value on blur", async () => {
    const { getByTestId } = renderWithTheme(
        <NumberInput max={1} aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.type(getByTestId("input"), "2");
    });

    act(() => {
        userEvent.click(document.body);
    });

    await waitFor(() => expect(getByTestId("input")).toHaveValue(1));
});

test("when the entered value is equal to the min value, the decrement stepper is disabled", async () => {
    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput min={2} aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    await waitFor(() => expect(getByLabelText("Decrement value")).not.toHaveAttribute("disabled"));

    act(() => {
        userEvent.type(getByTestId("input"), "2");
    });

    await waitFor(() => expect(getByLabelText("Decrement value")).toHaveAttribute("disabled"));
});

test("when the entered value is equal to the max value, the increment stepper is disabled", async () => {
    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput max={2} aria-label="Label" data-testid="input" />
    );

    act(() => {
        getByTestId("input").focus();
    });

    await waitFor(() => expect(getByLabelText("Increment value")).not.toHaveAttribute("disabled"));

    act(() => {
        userEvent.type(getByTestId("input"), "2");
    });

    await waitFor(() => expect(getByLabelText("Increment value")).toHaveAttribute("disabled"));
});

test("when autofocus is true, the input is focused on render", async () => {
    const { getByTestId } = renderWithTheme(
        <NumberInput autoFocus aria-label="Label" data-testid="input" />
    );

    await waitFor(() => expect(getByTestId("input")).toHaveFocus());
});

test("when autofocus is true and the input is disabled, the input is not focused on render", async () => {
    const { getByTestId } = renderWithTheme(
        <NumberInput disabled autoFocus aria-label="Label" data-testid="input" />
    );

    await waitFor(() => expect(getByTestId("input")).not.toHaveFocus());
});

test("when autofocus is true and the input is readonly, the input is not focused on render", async () => {
    const { getByTestId } = renderWithTheme(
        <NumberInput readOnly autoFocus aria-label="Label" data-testid="input" />
    );

    await waitFor(() => expect(getByTestId("input")).not.toHaveFocus());
});

test("when autofocus is specified with a delay, the input is focused after the delay", async () => {
    const { getByTestId } = renderWithTheme(
        <NumberInput autoFocus={10} aria-label="Label" data-testid="input" />
    );

    expect(getByTestId("input")).not.toHaveFocus();

    await waitFor(() => expect(getByTestId("input")).toHaveFocus());
});

test("when in a field, clicking on the field label focus the input", async () => {
    const { getByTestId } = renderWithTheme(
        <Field>
            <Label data-testid="label">Label</Label>
            <NumberInput aria-label="Label" data-testid="input" />
        </Field>
    );

    act(() => {
        userEvent.click(getByTestId("label"));
    });

    await waitFor(() => expect(getByTestId("input")).toHaveFocus());
});

// ***** Api *****

test("call onChange when the value change", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <NumberInput onChange={handler} aria-label="Label" data-testid="input" />
    );

    act(() => {
        userEvent.type(getByTestId("input"), "2");
    });

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything()));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("call onValueChange when the value change and the input lose focus", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <NumberInput onValueChange={handler} aria-label="Label" data-testid="input" />
    );

    act(() => {
        userEvent.type(getByTestId("input"), "2");
    });

    act(() => {
        userEvent.click(document.body);
    });

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), 2));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("call onValueChange when the value is incremented", async () => {
    const handler = jest.fn();

    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput
            onValueChange={handler}
            defaultValue={1}
            aria-label="Label"
            data-testid="input"
        />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.click(getByLabelText("Increment value"));
    });

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), 2));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("call onValueChange when the value is decremented", async () => {
    const handler = jest.fn();

    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput
            onValueChange={handler}
            defaultValue={1}
            aria-label="Label"
            data-testid="input"
        />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.click(getByLabelText("Decrement value"));
    });

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), 0));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("call onFocus when the input receive focus", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <NumberInput
            onFocus={handler}
            defaultValue={1}
            aria-label="Label"
            data-testid="input"
        />
    );

    act(() => {
        getByTestId("input").focus();
    });

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything()));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("do not call onFocus again when a spinner arrow is clicked", async () => {
    const handler = jest.fn();

    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput
            onFocus={handler}
            defaultValue={1}
            aria-label="Label"
            data-testid="input"
        />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.click(getByLabelText("Decrement value"));
    });

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("call onBlur when the input lose focus", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <NumberInput
            onBlur={handler}
            defaultValue={1}
            aria-label="Label"
            data-testid="input"
        />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.click(document.body);
    });

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything()));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("do not call onBlur when a spinner arrow is clicked", async () => {
    const handler = jest.fn();

    const { getByTestId, getByLabelText } = renderWithTheme(
        <NumberInput
            onBlur={handler}
            defaultValue={1}
            aria-label="Label"
            data-testid="input"
        />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.click(getByLabelText("Decrement value"));
    });

    await waitFor(() => expect(handler).not.toHaveBeenCalled());
});

test("can focus the input with the focus api", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <NumberInput
            ref={node => {
                refNode = node;
            }}
            aria-label="Label"
        />
    );

    act(() => {
        refNode.focus();
    });

    await waitFor(() => expect(refNode).toHaveFocus());
});

test("when the entered value exceed the specified min or max value, onValueChange is called with the clamped value before onBlur is called", async () => {
    const handleValueChange = jest.fn();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const onBlur = () => {

    };

    const { getByTestId } = renderWithTheme(
        <NumberInput
            onValueChange={handleValueChange}
            onBlur={onBlur}
            min={5}
            aria-label="Label"
            data-testid="input"
        />
    );

    act(() => {
        getByTestId("input").focus();
    });

    act(() => {
        userEvent.type(getByTestId("input"), "4");
    });

    act(() => {
        userEvent.click(document.body);
    });

    await waitFor(() => expect(handleValueChange).toHaveBeenLastCalledWith(expect.anything(), 5));
    await waitFor(() => expect(handleValueChange).toHaveBeenCalledTimes(1));
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <NumberInput ref={ref} aria-label="Label" />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    await waitFor(() => expect(ref.current instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(ref.current.tagName).toBe("INPUT"));
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <NumberInput
            ref={node => {
                refNode = node;
            }}
            aria-label="Label"
        />
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    await waitFor(() => expect(refNode instanceof HTMLElement).toBeTruthy());
    await waitFor(() => expect(refNode.tagName).toBe("INPUT"));
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <NumberInput ref={handler} aria-label="Label" />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
