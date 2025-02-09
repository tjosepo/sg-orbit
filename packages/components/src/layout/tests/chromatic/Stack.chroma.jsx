import { Div } from "@components/html";
import { Stack } from "@components/layout";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Stack")
        .segment(segment)
        .build();
}

stories()
    .add("default", () =>
        <Stack>
            <Div backgroundColor="accent-5">Alpha</Div>
            <Div backgroundColor="accent-5">Bravo</Div>
            <Div backgroundColor="accent-5">Charlie</Div>
        </Stack>
    )
    .add("reverse", () =>
        <Stack reverse>
            <Div backgroundColor="accent-5">Alpha</Div>
            <Div backgroundColor="accent-5">Bravo</Div>
            <Div backgroundColor="accent-5">Charlie</Div>
        </Stack>
    )
    .add("align X start", () =>
        <Stack alignX="start">
            <Div backgroundColor="accent-5">Alpha</Div>
            <Div backgroundColor="accent-5">Bravo</Div>
            <Div backgroundColor="accent-5">Charlie</Div>
        </Stack>
    )
    .add("align X center", () =>
        <Stack alignX="center">
            <Div backgroundColor="accent-5">Alpha</Div>
            <Div backgroundColor="accent-5">Bravo</Div>
            <Div backgroundColor="accent-5">Charlie</Div>
        </Stack>
    )
    .add("align X end", () =>
        <Stack alignX="end">
            <Div backgroundColor="accent-5">Alpha</Div>
            <Div backgroundColor="accent-5">Bravo</Div>
            <Div backgroundColor="accent-5">Charlie</Div>
        </Stack>
    )
    .add("align Y start", () =>
        <Stack alignY="start" height={12}>
            <Div backgroundColor="accent-5">Alpha</Div>
            <Div backgroundColor="accent-5">Bravo</Div>
            <Div backgroundColor="accent-5">Charlie</Div>
        </Stack>
    )
    .add("align Y center", () =>
        <Stack alignY="center" height={12}>
            <Div backgroundColor="accent-5">Alpha</Div>
            <Div backgroundColor="accent-5">Bravo</Div>
            <Div backgroundColor="accent-5">Charlie</Div>
        </Stack>
    )
    .add("align Y end", () =>
        <Stack alignY="end" height={12}>
            <Div backgroundColor="accent-5">Alpha</Div>
            <Div backgroundColor="accent-5">Bravo</Div>
            <Div backgroundColor="accent-5">Charlie</Div>
        </Stack>
    )
    .add("wrap", () =>
        <Stack wrap="wrap" height={4}>
            <Div backgroundColor="accent-5">Alpha</Div>
            <Div backgroundColor="accent-5">Bravo</Div>
            <Div backgroundColor="accent-5">Charlie</Div>
        </Stack>
    )
    .add("inline", () =>
        <>
            <Stack inline>
                <Div backgroundColor="accent-5">Alpha</Div>
                <Div backgroundColor="accent-5">Bravo</Div>
                <Div backgroundColor="accent-5">Charlie</Div>
            </Stack>
            <Stack inline>
                <Div backgroundColor="accent-5">Alpha</Div>
                <Div backgroundColor="accent-5">Bravo</Div>
                <Div backgroundColor="accent-5">Charlie</Div>
            </Stack>
        </>
    )
    .add("nested", () =>
        <Stack gap={8}>
            <Stack gap={1}>
                <Div backgroundColor="accent-5">Alpha</Div>
                <Div backgroundColor="accent-5">Bravo</Div>
                <Div backgroundColor="accent-5">Charlie</Div>
            </Stack>
            <Stack gap={12}>
                <Div backgroundColor="alert-5">Delta</Div>
                <Div backgroundColor="alert-5">Echo</Div>
                <Div backgroundColor="alert-5">Foxtrot</Div>
            </Stack>
        </Stack>
    );
