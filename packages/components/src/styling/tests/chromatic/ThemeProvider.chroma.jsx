import { ShareGateTheme, ThemeProvider, useColorSchemeContext } from "@components/styling";
import { paramsBuilder, storiesOfBuilder } from "@stories/utils";

import { Box } from "@components/box";
import { Inline } from "@components/layout";
import { useEffect } from "react";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/ThemeProvider")
        .segment(segment)
        .parameters(paramsBuilder()
            .chromaticDelay(100)
            .build())
        .build();
}

function PrimaryColors() {
    return (
        <Inline gap={0}>
            <Box padding={4} backgroundColor="accent-1" />
            <Box padding={4} backgroundColor="accent-2" />
            <Box padding={4} backgroundColor="accent-3" />
            <Box padding={4} backgroundColor="accent-4" />
            <Box padding={4} backgroundColor="accent-5" />
            <Box padding={4} backgroundColor="accent-6" />
            <Box padding={4} backgroundColor="accent-7" />
            <Box padding={4} backgroundColor="accent-8" />
            <Box padding={4} backgroundColor="accent-9" />
            <Box padding={4} backgroundColor="accent-10" />
        </Inline>
    );
}

stories()
    .add("sharegate", () =>
        <ThemeProvider theme={ShareGateTheme}>
            <PrimaryColors />
        </ThemeProvider>
    )
    .add("light", () =>
        <ThemeProvider theme={ShareGateTheme} colorScheme="light">
            <Box padding={4} backgroundColor="alias-mid-break" />
        </ThemeProvider>
    )
    .add("dark", () =>
        <ThemeProvider theme={ShareGateTheme} colorScheme="dark">
            <Box padding={4} backgroundColor="alias-mid-break" />
        </ThemeProvider>
    )
    .add("set color scheme with api", () => {
        const SwitchColorScheme = () => {
            const { setColorScheme } = useColorSchemeContext();

            useEffect(() => {
                setColorScheme("dark");
            // eslint-disable-next-line react-hooks/exhaustive-deps
            }, []);

            return null;
        };

        return (
            <ThemeProvider theme={ShareGateTheme} colorScheme="light">
                <SwitchColorScheme />
                <Box padding={4} backgroundColor="alias-mid-break" />
            </ThemeProvider>
        );
    });
