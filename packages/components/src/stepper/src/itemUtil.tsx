import { isNil } from "@components/shared";
import { ReactNode, Children, ReactElement } from "react";

export function getItemKeyAndChildren(items: ReactNode) {
    return Children
        .toArray(items)
        .filter(Boolean)
        .map((element: ReactElement, position) => {
            const key = !isNil(element.key) ? element.key.toString().replace(".$", "") : position.toString();
            const children = element.props.children as ReactNode;

            return { children, key };
        });
}
