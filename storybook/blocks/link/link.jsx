import { AnchorMdx } from "@storybook/addon-docs/blocks";

export function Link({ children, ...rest }) {
    return <AnchorMdx {...rest}>{children}</AnchorMdx>;
}
