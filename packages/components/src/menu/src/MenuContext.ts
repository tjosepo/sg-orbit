import { SyntheticEvent, createContext, useContext } from "react";
import type { SelectionMode } from "./Menu";

export interface MenuContextType {
    onSelect?: (event: SyntheticEvent, key: string) => void;
    selectedKeys?: string[];
    selectionMode?: SelectionMode;
}

export const MenuContext = createContext<MenuContextType>({});

export function useMenuContext() {
    return useContext(MenuContext);
}
