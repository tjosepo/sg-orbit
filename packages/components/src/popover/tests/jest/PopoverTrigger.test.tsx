import { Popover, PopoverProps, PopoverTrigger, usePopoverTriggerContext } from "@components/popover";
import { act, fireEvent, waitFor } from "@testing-library/react";
import { createRef, forwardRef } from "react";

import { Button } from "@components/button";
import { Content } from "@components/placeholders";
import { Heading } from "@components/typography";
import { Keys } from "@components/shared";
import { Transition } from "@components/transition";
import { renderWithTheme } from "@jest-utils";
import userEvent from "@testing-library/user-event";

beforeAll(() => {
    // @ts-ignore
    Transition.disableAnimation = true;
});

// ***** Behaviors *****

test("when a popover is dismissable, hide the popover on outside click", async () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
        <PopoverTrigger dismissable>
            <Button data-testid="trigger">Trigger</Button>
            <Popover data-testid="popover">
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("popover")).toHaveFocus());

    act(() => {
        userEvent.click(document.body);
    });

    await waitFor(() => expect(queryByTestId("popover")).not.toBeInTheDocument());
});

test("when a popover is dismissable, hide the popover on esc keydown", async () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
        <PopoverTrigger dismissable>
            <Button data-testid="trigger">Trigger</Button>
            <Popover data-testid="popover">
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(queryByTestId("popover")).toHaveFocus());

    act(() => {
        fireEvent.keyDown(getByTestId("popover"), { key: Keys.esc });
    });

    await waitFor(() => expect(queryByTestId("popover")).not.toBeInTheDocument());
});

test("when a popover is dismissable, hide the popover on trigger toggle", async () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
        <PopoverTrigger dismissable>
            <Button data-testid="trigger">Trigger</Button>
            <Popover data-testid="popover">
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(queryByTestId("popover")).toHaveFocus());

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(queryByTestId("popover")).not.toBeInTheDocument());
});

test("when a popover is not dismissable, do not hide the popover on outside click", async () => {
    const { getByTestId } = renderWithTheme(
        <PopoverTrigger dismissable={false}>
            <Button data-testid="trigger">Trigger</Button>
            <Popover data-testid="popover">
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("popover")).toHaveFocus());

    act(() => {
        userEvent.click(document.body);
    });

    await waitFor(() => expect(getByTestId("popover")).toBeInTheDocument());
});

test("when a popover is not dismissable, do not hide the popover on esc keydown", async () => {
    const { getByTestId } = renderWithTheme(
        <PopoverTrigger dismissable={false}>
            <Button data-testid="trigger">Trigger</Button>
            <Popover data-testid="popover">
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("popover")).toHaveFocus());

    act(() => {
        fireEvent.keyDown(getByTestId("popover"), { key: Keys.esc });
    });

    await waitFor(() => expect(getByTestId("popover")).toBeInTheDocument());
});

test("when a popover is not dismissable, do not hide the popover on trigger toggle", async () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
        <PopoverTrigger dismissable={false}>
            <Button data-testid="trigger">Trigger</Button>
            <Popover data-testid="popover">
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(queryByTestId("popover")).toHaveFocus());

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(queryByTestId("popover")).toBeInTheDocument());
});

test("when the context close function is called, close the dialog", async () => {
    const CustomDialog = forwardRef<HTMLElement, Omit<PopoverProps, "children">>((props, ref) => {
        const { close } = usePopoverTriggerContext();

        return (
            <Popover
                {...props}
                ref={ref}
                data-testid="popover"
            >
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
                <Button onClick={close} data-testid="close-btn">Close</Button>
            </Popover>
        );
    });

    const { getByTestId, queryByTestId } = renderWithTheme(
        <PopoverTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <CustomDialog />
        </PopoverTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(queryByTestId("close-btn")).toBeInTheDocument());

    act(() => {
        userEvent.click(getByTestId("close-btn"));
    });

    await waitFor(() => expect(queryByTestId("popover")).not.toBeInTheDocument());
});

// ***** Aria *****

test("a popover trigger have an aria-haspopup attribute", async () => {
    const { getByTestId } = renderWithTheme(
        <PopoverTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Popover data-testid="popover">
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("popover")).toBeInTheDocument());

    await waitFor(() => expect(getByTestId("trigger")).toHaveAttribute("aria-haspopup", "dialog"));
});

// ***** Api *****

test("call onOpenChange when the popover appears", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <PopoverTrigger onOpenChange={handler}>
            <Button data-testid="trigger">Trigger</Button>
            <Popover data-testid="popover">
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("popover")).toBeInTheDocument());

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), true));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("call onOpenChange on esc keypress", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <PopoverTrigger onOpenChange={handler} defaultOpen>
            <Button data-testid="trigger">Trigger</Button>
            <Popover data-testid="popover">
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    );

    await waitFor(() => expect(getByTestId("popover")).toHaveFocus());

    act(() => {
        fireEvent.keyDown(getByTestId("popover"), { key: Keys.esc });
    });

    await waitFor(() => expect(handler).toHaveBeenCalledWith(expect.anything(), false));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("call onOpenChange on outside click", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <PopoverTrigger onOpenChange={handler} defaultOpen>
            <Button>Trigger</Button>
            <Popover data-testid="popover">
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    );

    await waitFor(() => expect(getByTestId("popover")).toHaveFocus());

    act(() => {
        userEvent.click(document.body);
    });

    await waitFor(() => expect(handler).toHaveBeenCalledWith(expect.anything(), false));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    const { getByTestId } = renderWithTheme(
        <PopoverTrigger ref={ref}>
            <Button data-testid="trigger">Trigger</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    const { getByTestId } = renderWithTheme(
        <PopoverTrigger
            ref={node => {
                refNode = node;
            }}
        >
            <Button data-testid="trigger">Trigger</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("DIV");
});

test("set ref once", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <PopoverTrigger ref={handler}>
            <Button data-testid="trigger">Trigger</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
