import { Menu, MenuTrigger } from "@components/menu";
import { act, fireEvent, waitFor } from "@testing-library/react";

import { Button } from "@components/button";
import { Item } from "@components/collection";
import { Keys } from "@components/shared";
import { Transition } from "@components/transition";
import { createRef } from "react";
import { renderWithTheme } from "@jest-utils";
import userEvent from "@testing-library/user-event";

// Using "beforeEach" instead of "beforeAll" because the restore focus tests currently need the fade out animation to works properly.
beforeEach(() => {
    // @ts-ignore
    Transition.disableAnimation = true;
});

// ***** Behaviors *****

test("when a menu open and there is no selected item, the first item is focused", async () => {
    const { getByTestId } = renderWithTheme(
        <MenuTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Menu>
                <Item key="earth" data-testid="earth-item">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("earth-item")).toHaveFocus());
});

test("when a menu open and there is a selected item, the selected item is focused", async () => {
    const { getByTestId } = renderWithTheme(
        <MenuTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Menu defaultSelectedKeys={["mars"]} selectionMode="single">
                <Item key="earth">Earth</Item>
                <Item key="mars" data-testid="mars-item">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("mars-item")).toHaveFocus());
});

test("when a menu open with arrow down keypress and there is no selected item, the first item is focused", async () => {
    const { getByTestId } = renderWithTheme(
        <MenuTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Menu>
                <Item key="earth" data-testid="earth-item">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    act(() => {
        fireEvent.keyDown(getByTestId("trigger"), { key: Keys.arrowDown });
    });

    await waitFor(() => expect(getByTestId("earth-item")).toHaveFocus());
});

test("when a menu open with arrow down keypress and there is a selected item, the selected item is focused", async () => {
    const { getByTestId } = renderWithTheme(
        <MenuTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Menu defaultSelectedKeys={["mars"]} selectionMode="single">
                <Item key="earth">Earth</Item>
                <Item key="mars" data-testid="mars-item">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    act(() => {
        fireEvent.keyDown(getByTestId("trigger"), { key: Keys.arrowDown });
    });

    await waitFor(() => expect(getByTestId("mars-item")).toHaveFocus());
});

test("when a menu open with arrow up keypress and there is no selected item, the last item is focused", async () => {
    const { getByTestId } = renderWithTheme(
        <MenuTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn" data-testid="saturn-item">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    act(() => {
        fireEvent.keyDown(getByTestId("trigger"), { key: Keys.arrowUp });
    });

    await waitFor(() => expect(getByTestId("saturn-item")).toHaveFocus());
});

test("when a menu open with arrow up keypress and there is a selected item, the selected item is focused", async () => {
    const { getByTestId } = renderWithTheme(
        <MenuTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Menu defaultSelectedKeys={["mars"]} selectionMode="single">
                <Item key="earth">Earth</Item>
                <Item key="mars" data-testid="mars-item">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    act(() => {
        fireEvent.keyDown(getByTestId("trigger"), { key: Keys.arrowUp });
    });

    await waitFor(() => expect(getByTestId("mars-item")).toHaveFocus());
});

test("when selectionMode is \"none\", selecting an item close the menu", async () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
        <MenuTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Menu selectionMode="none" data-testid="menu">
                <Item key="earth" data-testid="earth-item">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("menu")).toBeInTheDocument());

    act(() => {
        userEvent.click(getByTestId("earth-item"));
    });

    await waitFor(() => expect(queryByTestId("menu")).not.toBeInTheDocument());
});

test("when selectionMode is \"single\", selecting an item close the menu", async () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
        <MenuTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Menu selectionMode="single" data-testid="menu">
                <Item key="earth" data-testid="earth-item">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("menu")).toBeInTheDocument());

    act(() => {
        userEvent.click(getByTestId("earth-item"));
    });

    await waitFor(() => expect(queryByTestId("menu")).not.toBeInTheDocument());
});

test("when selectionMode is \"multiple\", selecting an item close the menu", async () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
        <MenuTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Menu selectionMode="single" data-testid="menu">
                <Item key="earth" data-testid="earth-item">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("menu")).toBeInTheDocument());

    act(() => {
        userEvent.click(getByTestId("earth-item"));
    });

    await waitFor(() => expect(queryByTestId("menu")).not.toBeInTheDocument());
});

test("selecting an item focus the trigger", async () => {
    // @ts-ignore
    Transition.disableAnimation = false;

    const { getByTestId } = renderWithTheme(
        <MenuTrigger>
            <Button data-testid="trigger">Trigger</Button>
            <Menu selectionMode="single" data-testid="menu">
                <Item key="earth" data-testid="earth-item">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("menu")).toBeInTheDocument());

    act(() => {
        userEvent.click(getByTestId("earth-item"));
    });

    await waitFor(() => expect(getByTestId("trigger")).toHaveFocus());
});

test("when closeOnSelect is false, selecting an item doesn't close the menu", async () => {
    const { getByTestId } = renderWithTheme(
        <MenuTrigger closeOnSelect={false} defaultOpen>
            <Button>Trigger</Button>
            <Menu data-testid="menu">
                <Item key="earth" data-testid="earth-item">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    await waitFor(() => expect(getByTestId("menu")).toBeInTheDocument());

    act(() => {
        userEvent.click(getByTestId("earth-item"));
    });

    await waitFor(() => expect(getByTestId("menu")).toBeInTheDocument());
});

test("when opened, on tab keydown, close and select the next tabbable element", async () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
        <>
            <Button>Previous</Button>
            <MenuTrigger>
                <Button data-testid="trigger">Trigger</Button>
                <Menu data-testid="menu">
                    <Item key="earth" data-testid="earth-item">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Menu>
            </MenuTrigger>
            <Button data-testid="after">After</Button>
        </>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("menu")).toBeInTheDocument());

    act(() => {
        getByTestId("earth-item").focus();
    });

    act(() => {
        userEvent.tab();
    });

    await waitFor(() => expect(queryByTestId("menu")).not.toBeInTheDocument());

    await waitFor(() => expect(getByTestId("after")).toHaveFocus());
});

test("when opened, on shift+tab keydown close and select the previous tabbable element", async () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
        <>
            <Button data-testid="previous">Previous</Button>
            <MenuTrigger>
                <Button data-testid="trigger">Trigger</Button>
                <Menu data-testid="menu">
                    <Item key="earth" data-testid="earth-item">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Menu>
            </MenuTrigger>
            <Button>After</Button>
        </>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("menu")).toBeInTheDocument());

    act(() => {
        getByTestId("earth-item").focus();
    });

    act(() => {
        userEvent.tab({ shift: true });
    });

    await waitFor(() => expect(queryByTestId("menu")).not.toBeInTheDocument());

    await waitFor(() => expect(getByTestId("previous")).toHaveFocus());
});

// ***** Aria *****

test("a menu trigger have an aria-haspopup attribute", async () => {
    const { getByTestId } = renderWithTheme(
        <MenuTrigger defaultOpen>
            <Button data-testid="trigger">Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    await waitFor(() => expect(getByTestId("trigger")).toHaveAttribute("aria-haspopup", "menu"));
});

test("when a trigger have an aria-labelledby attribute, the menu aria-labelledby match the trigger aria-labelledby attribute", async () => {
    const { getByTestId } = renderWithTheme(
        <MenuTrigger defaultOpen>
            <Button aria-labelledby="trigger-label">Trigger</Button>
            <Menu data-testid="menu">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    await waitFor(() => expect(getByTestId("menu")).toHaveAttribute("aria-labelledby", "trigger-label"));
});

test("when a trigger doesn't have a aria-labelledby attribute, the menu aria-labelledby match the trigger id", async () => {
    const { getByTestId } = renderWithTheme(
        <MenuTrigger defaultOpen>
            <Button id="trigger-id">Trigger</Button>
            <Menu data-testid="menu">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    await waitFor(() => expect(getByTestId("menu")).toHaveAttribute("aria-labelledby", "trigger-id"));
});

test("when a trigger have a aria-describedby attribute, the menu aria-describedby match the trigger aria-describedby attribute", async () => {
    const { getByTestId } = renderWithTheme(
        <MenuTrigger defaultOpen>
            <Button aria-describedby="trigger-description">Trigger</Button>
            <Menu data-testid="menu">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    await waitFor(() => expect(getByTestId("menu")).toHaveAttribute("aria-describedby", "trigger-description"));
});

test("when a trigger have an id, use this id for the trigger", async () => {
    const { getByTestId } = renderWithTheme(
        <MenuTrigger>
            <Button id="trigger-id" data-testid="trigger">Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    await waitFor(() => expect(getByTestId("trigger")).toHaveAttribute("id", "trigger-id"));
});

test("when a trigger doesn't have an id, a trigger id is autogenerated", async () => {
    const { getByTestId } = renderWithTheme(
        <MenuTrigger>
            <Button id="trigger-id" data-testid="trigger">Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    await waitFor(() => expect(getByTestId("trigger")).toHaveAttribute("id"));
});

// ***** Api *****

test("call onOpenChange when the menu open", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <MenuTrigger onOpenChange={handler}>
            <Button data-testid="trigger">Trigger</Button>
            <Menu data-testid="menu">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    act(() => {
        userEvent.click(getByTestId("trigger"));
    });

    await waitFor(() => expect(getByTestId("menu")).toBeInTheDocument());

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), true));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

test("call onOpenChange when the menu close", async () => {
    const handler = jest.fn();

    const { getByTestId } = renderWithTheme(
        <MenuTrigger
            onOpenChange={handler}
            defaultOpen
        >
            <Button data-testid="trigger">Trigger</Button>
            <Menu data-testid="menu">
                <Item key="earth" data-testid="earth-item">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    await waitFor(() => expect(getByTestId("menu")).toBeInTheDocument());

    act(() => {
        getByTestId("earth-item").focus();
    });

    act(() => {
        fireEvent.keyDown(getByTestId("earth-item"), { key: Keys.esc });
    });

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), false));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <MenuTrigger defaultOpen ref={ref}>
            <Button>Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <MenuTrigger
            defaultOpen
            ref={node => {
                refNode = node;
            }}
        >
            <Button>Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("DIV");
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <MenuTrigger
            defaultOpen
            ref={handler}
        >
            <Button>Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});

