import { AbstractDialogProps, Dialog, useDialogTriggerContext } from "../../dialog";
import { Button, ButtonGroup } from "../../button";
import { ComponentProps, MouseEvent, forwardRef, useMemo } from "react";
import { Header } from "../../placeholders";
import { InfoIcon, WarningIcon } from "../../icons";
import { OmitInternalProps, isNil, isNilOrEmpty, mergeProps, useChainedEventCallback, useSlots } from "../../shared";

const DefaultElement = "section";

export interface InnerAlertProps extends Omit<AbstractDialogProps<typeof DefaultElement>, "dismissable"> {
    /**
     * The button to focus by default when the alert open.
     */
    autoFocusButton?: "primary" | "secondary" | "cancel";
    /**
     * The cancel button label.
     */
    cancelButtonLabel?: string;
    /**
     * Called when the cancel button is clicked.
     * @param {MouseEvent} event - React's original event.
     * @returns {void}
     */
    onCancelButtonClick?: (event: MouseEvent) => void;
    /**
     * Called when the primary button is clicked.
     * @param {MouseEvent} event - React's original event.
     * @returns {void}
     */
    onPrimaryButtonClick?: (event: MouseEvent) => void;
    /**
     * Called when the secondary button is clicked.
     * @param {MouseEvent} event - React's original event.
     * @returns {void}
     */
    onSecondaryButtonClick?: (event: MouseEvent) => void;
    /**
     * Whether or not the primary button is disabled.
     */
    primaryButtonDisabled?: boolean;
    /**
     * The primary button label.
     */
    primaryButtonLabel: string;
    /**
     * Whether or not the secondary button is disabled.
     */
    secondaryButtonDisabled?: boolean;
    /**
     * The secondary button label.
     */
    secondaryButtonLabel?: string;
    /**
     * The style to use.
     */
    variant?: "confirmation" | "destructive" | "warning" | "negative";
}

export function InnerAlert({
    as = DefaultElement,
    autoFocusButton,
    cancelButtonLabel,
    children,
    forwardedRef,
    onCancelButtonClick,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
    primaryButtonDisabled,
    primaryButtonLabel,
    secondaryButtonDisabled,
    secondaryButtonLabel,
    variant = "confirmation",
    zIndex = 1,
    ...rest
}: InnerAlertProps) {
    const { close } = useDialogTriggerContext();

    const { content, heading } = useSlots(children, useMemo(() => ({
        _: {
            required: ["heading", "content"]
        },
        content: null,
        heading: null
    }), []));

    const handlePrimaryButtonClick = useChainedEventCallback(onPrimaryButtonClick, event => {
        if (!isNil(close)) {
            close(event);
        }
    });

    const handleSecondaryButtonClick = useChainedEventCallback(onSecondaryButtonClick, event => {
        if (!isNil(close)) {
            close(event);
        }
    });

    const handleCancelButtonClick = useChainedEventCallback(onCancelButtonClick, event => {
        if (!isNil(close)) {
            close(event);
        }
    });

    const warningIconMarkup = variant === "warning" && (
        <Header>
            <WarningIcon className="o-ui-alert-icon o-ui-alert-warning-icon" size="lg" />
        </Header>
    );

    const negativeIconMarkup = variant === "negative" && (
        <Header>
            <InfoIcon className="o-ui-alert-icon o-ui-alert-negative-icon" size="lg" />
        </Header>
    );

    const primaryButtonMarkup = (
        <Button
            autoFocus={isNil(autoFocusButton) || autoFocusButton === "primary"}
            disabled={primaryButtonDisabled}
            onClick={handlePrimaryButtonClick}
            variant={variant === "destructive" ? "negative" : "primary"}
        >
            {primaryButtonLabel}
        </Button>
    );

    const secondaryButtonMarkup = !isNilOrEmpty(secondaryButtonLabel) && (
        <Button
            autoFocus={autoFocusButton === "secondary"}
            disabled={secondaryButtonDisabled}
            onClick={handleSecondaryButtonClick}
            variant="secondary"
        >
            {secondaryButtonLabel}
        </Button>
    );


    const cancelButtonMarkup = !isNilOrEmpty(cancelButtonLabel) && (
        <Button
            autoFocus={autoFocusButton === "cancel"}
            onClick={handleCancelButtonClick}
            variant="secondary"
        >
            {cancelButtonLabel}
        </Button>
    );

    const buttonsMarkup = isNil(secondaryButtonMarkup) && isNil(cancelButtonMarkup)
        ? primaryButtonMarkup
        : (
            <ButtonGroup>
                {cancelButtonMarkup}
                {secondaryButtonMarkup}
                {primaryButtonMarkup}
            </ButtonGroup>
        );

    return (
        <Dialog
            {...mergeProps(
                rest,
                {
                    as,
                    dismissable: false,
                    ref: forwardedRef,
                    role: "alertdialog" as const,
                    size: "sm" as const,
                    zIndex
                }
            )}
        >
            {heading}
            {warningIconMarkup}
            {negativeIconMarkup}
            {content}
            {buttonsMarkup}
        </Dialog>
    );
}

InnerAlert.defaultElement = DefaultElement;

export const Alert = forwardRef<any, OmitInternalProps<InnerAlertProps>>((props, ref) => (
    <InnerAlert {...props} forwardedRef={ref} />
));

export type AlertProps = ComponentProps<typeof Alert>;
