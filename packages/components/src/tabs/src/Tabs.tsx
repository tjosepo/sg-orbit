import { ComponentProps, ReactNode, SyntheticEvent, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, cssModule, isNil, mergeProps, useControllableState, useEventCallback, useId } from "../../shared";
import { ResponsiveProp, useResponsiveValue } from "../../styling";
import { TabsContext, TabsOrientation } from "./TabsContext";

import { Box } from "../../box";
import { TabList } from "./TabList";
import { TabPanels } from "./TabPanels";
import { useMemo } from "react";
import { useTabsItems } from "./useTabsItems";

const DefaultElement = "div";

export interface InnerTabsProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * See [WCAG](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html).
     */
    "aria-label": string;
    /**
     * Whether or not the first focusable tab should autoFocus on render.
     */
    autoFocus?: boolean | number;
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Whether or not the tabs could collapsed to fit into the available space.
     */
    collapsible?: boolean;
    /**
     * The initial value of `selectedKey` when uncontrolled.
     */
    defaultSelectedKey?: string;
    /**
     * Whether or not the tabs take up the width of the container.
     */
    fluid?: ResponsiveProp<boolean>;
    /**
     * Whether or not keyboard navigation changes focus between tabs but doens't activate it.
     */
    manual?: boolean;
    /**
     * Called when the selected tab change.
     * @param {SyntheticEvent} event - React's original event.
     * @param {string} key - The selected tab key.
     * @returns {void}
     */
    onSelectionChange?: (event: SyntheticEvent, key: string) => void;
    /**
     * The orientation of the tabs elements.
     */
    orientation?: ResponsiveProp<TabsOrientation>;
    /**
     * A controlled selected key.
     */
    selectedKey?: string | null;
}

export function InnerTabs({
    as = DefaultElement,
    "aria-label": ariaLabel,
    autoFocus,
    children,
    collapsible = true,
    defaultSelectedKey,
    fluid,
    forwardedRef,
    id,
    manual,
    onSelectionChange,
    orientation = "horizontal",
    selectedKey: selectedKeyProp,
    ...rest
}: InnerTabsProps) {
    const fluidValue = useResponsiveValue(fluid);
    const orientationValue = useResponsiveValue(orientation);

    const [selectedKey, setSelectedKey] = useControllableState(selectedKeyProp, defaultSelectedKey, "0");

    const [tabs, panels] = useTabsItems(children, useId(id, "o-ui-tabs"));

    const handleSelect = useEventCallback((event: SyntheticEvent, newKey: string) => {
        if (newKey !== selectedKey) {
            setSelectedKey(newKey);

            if (!isNil(onSelectionChange)) {
                onSelectionChange(event, newKey);
            }
        }
    });

    // Ensure the selected key match a valid tab which is not disabled.
    const adjustedKey = useMemo(() => {
        const selectedTab = tabs.find(x => x.key === selectedKey);

        if (isNil(selectedTab)) {
            return tabs[0].key;
        }

        if (selectedTab.props?.disabled) {
            return tabs.find(x => !x.props?.disabled)?.key ?? tabs[0].key;
        }

        return selectedKey;
    }, [selectedKey, tabs]);

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: cssModule(
                        "o-ui-tabs",
                        fluidValue && "fluid",
                        orientationValue
                    ),
                    id,
                    ref: forwardedRef
                }
            )}
        >
            <TabsContext.Provider
                value={{
                    isCollapsible: collapsible,
                    isManual: manual,
                    onSelect: handleSelect,
                    orientation: orientationValue,
                    selectedKey: adjustedKey
                }}
            >
                <TabList
                    aria-label={ariaLabel}
                    autoFocus={autoFocus}
                    tabs={tabs}
                />
                <TabPanels panels={panels} />
            </TabsContext.Provider>
        </Box>
    );
}

InnerTabs.defaultElement = DefaultElement;

export const Tabs = forwardRef<any, OmitInternalProps<InnerTabsProps>>((props, ref) => (
    <InnerTabs {...props} forwardedRef={ref} />
));

export type TabsProps = ComponentProps<typeof Tabs>;
