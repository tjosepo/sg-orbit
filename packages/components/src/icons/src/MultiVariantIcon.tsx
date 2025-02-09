import { ComponentProps, ElementType, SVGProps, forwardRef } from "react";
import { Icon, IconSize } from "./Icon";
import { InternalProps, OmitInternalProps, SlotProps, slot } from "../../shared";
import { ResponsiveProp, StyledSystemProps, useResponsiveValue } from "../../styling";

export interface InnerMultiVariantIconProps extends
    StyledSystemProps,
    SlotProps,
    Omit<InternalProps, "as">,
    Omit<SVGProps<SVGSVGElement>, keyof StyledSystemProps> {
    /**
     * Whether or not the icon should look disabled.
     */
    disabled?: boolean;
    /**
     * An icon can vary in size.
     */
    size?: ResponsiveProp<IconSize>;
    /**
     * An icon as a component for the 24px variant.
     */
    src24: ElementType;
    /**
     * An icon as a component for the 32px variant.
     */
    src32: ElementType;
}

export const InnerMultiVariantIcon = (({
    forwardedRef,
    size,
    src24: Component24,
    src32: Component32,
    ...rest
}: InnerMultiVariantIconProps) => {
    const sizeValue = useResponsiveValue(size);

    let src = Component24;

    if (sizeValue === "lg" || sizeValue === "xl") {
        src = Component32;
    }

    return (
        <Icon
            {...rest}
            ref={forwardedRef}
            size={sizeValue}
            src={src}
        />
    );
});

export const MultiVariantIcon = slot("icon", forwardRef<SVGSVGElement, OmitInternalProps<InnerMultiVariantIconProps>>((props, ref) => (
    <InnerMultiVariantIcon {...props} forwardedRef={ref} />
)));

export type MultiVariantIconProps = ComponentProps<typeof MultiVariantIcon>;

////////

export function createMultiVariantIcon(src24: ElementType, src32: ElementType) {
    return slot("icon", forwardRef<SVGSVGElement, OmitInternalProps<InnerMultiVariantIconProps, "src24" | "src32">>((props, ref) =>
        <InnerMultiVariantIcon
            {...props}
            forwardedRef={ref}
            src24={src24}
            src32={src32}
        />
    ));
}
