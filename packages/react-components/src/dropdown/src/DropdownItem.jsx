import { DropdownContext } from "./DropdownContext";
import { DropdownMenuContext } from "./DropdownMenuContext";
import { EmbeddedIcon } from "../../icons";
import { Dropdown as SemanticDropdown } from "semantic-ui-react";
import { SemanticRef, mergeClasses, throwWhenUnsupportedPropIsProvided, useEventCallback } from "../../shared";
import { element, string } from "prop-types";
import { forwardRef, useContext } from "react";
import { isNil } from "lodash";

const UNSUPPORTED_PROPS = ["flag", "image", "label"];

const propTypes = {
    /**
     * The item text.
     */
    text: string,
    /**
     * The item value.
     */
    value: string,
    /**
     * An item can navigate to a page.
     */
    href: string,
    /**
     * A description to display with less emphasize.
     */
    description: string,
    /**
     * [Shorthand](/?path=/docs/getting-started-shorthand-props--page) to display an [icon](/?path=/docs/components-icon--default-story) before the text.
     */
    icon: element
};

export function InnerDropdownItem(props) {
    const { text: legacyText, icon, description, onClick, focus, hover, children, forwardedRef, ...rest } = props;
    const { size } = useContext(DropdownContext);
    const { onItemClick } = useContext(DropdownMenuContext);

    throwWhenUnsupportedPropIsProvided(props, UNSUPPORTED_PROPS, "@orbit-ui/react-components/DropdownItem");

    const handleClick = useEventCallback(event => {
        onItemClick(event);

        if (!isNil(onClick)) {
            onClick(event);
        }
    });

    const text = legacyText || children;

    return (
        <SemanticRef innerRef={forwardedRef}>
            <SemanticDropdown.Item
                {...rest}
                className={mergeClasses(
                    focus && "focus",
                    hover && "hover"
                )}
                onClick={handleClick}
                tabIndex="-1"
            >
                {!isNil(icon) && <EmbeddedIcon icon={icon} size={size} />}
                {!isNil(text) && <span className="text">{text}</span>}
                {!isNil(description) && <span className="description">{children}</span>}
            </SemanticDropdown.Item>
        </SemanticRef>
    );
}

InnerDropdownItem.propTypes = propTypes;

export const DropdownItem = forwardRef((props, ref) => (
    <InnerDropdownItem {...props} forwardedRef={ref} />
));
