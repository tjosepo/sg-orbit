import { TextAddon } from "@components/input-group";
import { createRef } from "react";
import { renderWithTheme } from "@jest-utils";
import { waitFor } from "@testing-library/react";

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <TextAddon ref={ref}>Text</TextAddon>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <TextAddon
            ref={node => {
                refNode = node;
            }}
        >
            Text
        </TextAddon>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("DIV");
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <TextAddon ref={handler}>Text</TextAddon>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
