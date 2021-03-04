import "./Icon.css";

import { Box } from "../../box";
import { ComponentProps, ElementType, ForwardedRef, ReactElement } from "react";
import { OrbitComponent, cssModule, forwardRef, mergeProps, normalizeSize, slot, useStyleProps } from "../../shared";
import { isNil } from "lodash";

export interface InnerIconProps {
    /**
     * An icon as a React component.
     */
    type: ElementType;
    /**
     * An icon can vary in size.
     */
    size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "inherit";
    /**
     * Default slot override.
     */
    slot?: string;
    /**
    * @ignore
    */
    forwardedRef: ForwardedRef<any>;
}

export const InnerIcon = ((props: InnerIconProps): ReactElement => {
    const [styleProps] = useStyleProps("icon");

    const {
        type,
        size,
        disabled,
        "aria-label": ariaLabel,
        forwardedRef,
        ...rest
    } = mergeProps(
        props,
        styleProps
    );

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    className: cssModule(
                        "o-ui-icon",
                        disabled && "disabled",
                        normalizeSize(size)
                    ),
                    focusable: false,
                    as: type,
                    "aria-hidden": isNil(ariaLabel),
                    "aria-label": ariaLabel,
                    ref: forwardedRef
                }
            )}
        />
    );
});

export const Icon = slot("icon", forwardRef<InnerIconProps, "svg">((props, ref) => (
    <InnerIcon {...props} forwardedRef={ref} />)
));

Icon.displayName = "Icon";

export type IconProps = ComponentProps<typeof Icon>;

////////

export function createIcon(type: ElementType): OrbitComponent<"svg", Omit<InnerIconProps, "type" | "forwardedRef">> {
    return slot("icon", forwardRef<Omit<InnerIconProps, "type" | "forwardedRef">, "svg">((props, ref) =>
        <Icon
            {...props}
            type={type}
            ref={ref}
        />
    ));
}