import { Box } from "../../box";
import { ComponentProps, ElementType, ForwardedRef, forwardRef, useCallback, useMemo } from "react";
import { HeightProp, OmitInternalProps, SlotProps, WidthProp, isNil, mergeProps, slot, useMergedRefs } from "../../shared";

export interface InnerSvgImageProps extends SlotProps {
    /**
     * An SVG as a React component.
     */
    src: ElementType;
    /**
     * Width and height in a single value.
     */
    size?: string;
    /**
    * @ignore
    */
    width?: number;
    /**
    * @ignore
    */
    height?: number;
    /**
     * The SVG stroke attribute.
     */
    stroke?: string;
    /**
     * The SVG fill attribute.
     */
    fill?: string;
    /**
     * Defines a string value that labels the current element.
     */
    "aria-label": string;
    /**
     * Identifies the element (or elements) that labels the current element.
     * @ignore
     */
    "aria-labelledby"?: string;
    /**
     * Identifies the element (or elements) that describes the object.
     * @ignore
     */
    "aria-describedby"?: string;
    /**
     * Identifies the element (or elements) that provide a detailed, extended description for the object.
     * @ignore
     */
    "aria-details"?: string;
    /**
    * @ignore
    */
    forwardedRef: ForwardedRef<any>;
}

function useColor(color: string) {
    return useMemo(() => {
        if (!isNil(color)) {
            if (color.startsWith("rgb") || color.startsWith("hsl") || color.startsWith("#")) {
                return color;
            } else if (color.startsWith("--")) {
                return `var(${color})`;
            } else if (color.startsWith("alias") || color.startsWith("global")) {
                return `var(--o-ui-${color})`;
            }

            return `var(--o-ui-${color.startsWith("primary") ? "alias" : "global"}-${color})`;
        }
    }, [color]);
}

export function InnerSvgImage({
    src,
    size,
    width,
    height,
    stroke,
    fill,
    "aria-label": ariaLabel,
    forwardedRef,
    ...rest
}: InnerSvgImageProps) {
    const hideUseElement = useCallback((element: HTMLElement) => {
        if (!isNil(element)) {
            // Remove auto-generated title if available.
            const titleElement = element.querySelector("title");

            if (!isNil(titleElement)) {
                titleElement.remove();
            }

            // Hide content from screen readers.
            element.querySelector("use")?.setAttribute("aria-hidden", "true");

            element.querySelectorAll("path").forEach((x: SVGPathElement) => {
                x.setAttribute("aria-hidden", "true");
            });
        }
    }, []);

    const ref = useMergedRefs(forwardedRef, hideUseElement);

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    width: (width ?? size) as WidthProp,
                    height: (height ?? size) as HeightProp,
                    style: {
                        stroke: useColor(stroke),
                        fill: useColor(fill)
                    },
                    // View https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html#svgs-that-convey-information
                    role: "img",
                    focusable: false,
                    as: src,
                    "aria-label": ariaLabel,
                    ref
                }
            )}
        />
    );
}

export const SvgImage = slot("image", forwardRef<any, OmitInternalProps<InnerSvgImageProps>>((props, ref) => (
    <InnerSvgImage {...props} forwardedRef={ref} />
)));

export type SvgImageProps = ComponentProps<typeof SvgImage>;
