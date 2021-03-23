import { Inline, Stack } from "@react-components/layout";
import { PasswordInput } from "@react-components/text-input";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/PasswordInput")
        .segment(segment)
        .build();
}

stories()
    .add("default", () =>
        <Stack>
            <PasswordInput />
            <PasswordInput disabled></PasswordInput>
            <PasswordInput readOnly></PasswordInput>
            <div>
                <PasswordInput fluid></PasswordInput>
            </div>
            <div className="w-10">
                <PasswordInput fluid></PasswordInput>
            </div>
        </Stack>
    )
    .add("placeholder", () =>
        <Stack>
            <PasswordInput placeholder="What's your secret?" />
            <PasswordInput disabled placeholder="What's your secret?"></PasswordInput>
            <PasswordInput readOnly placeholder="What's your secret?"></PasswordInput>
            <div>
                <PasswordInput fluid placeholder="What's your secret?"></PasswordInput>
            </div>
            <div className="w-10">
                <PasswordInput fluid placeholder="What's your secret?"></PasswordInput>
            </div>
        </Stack>
    )
    .add("value", () =>
        <Stack>
            <PasswordInput defaultValue="test123!" />
            <PasswordInput disabled defaultValue="test123!" />
            <PasswordInput readOnly defaultValue="test123!" />
            <Inline>
                <PasswordInput placeholder="What's your secret?" defaultValue="test123!" />
                <PasswordInput value="test123!" />
            </Inline>
            <div>
                <PasswordInput fluid defaultValue="test123!"></PasswordInput>
            </div>
            <div className="w-10">
                <PasswordInput fluid defaultValue="test123!"></PasswordInput>
            </div>
        </Stack>
    )
    .add("states", () =>
        <Stack>
            <PasswordInput active placeholder="What's your secret?" />
            <Inline>
                <PasswordInput focus placeholder="What's your secret?" />
                <PasswordInput defaultValue="test123!" focus placeholder="What's your secret?" />
            </Inline>
            <Inline>
                <PasswordInput hover placeholder="What's your secret?" />
                <PasswordInput defaultValue="test123!" hover placeholder="What's your secret?" />
            </Inline>
            <Inline>
                <PasswordInput focus hover placeholder="What's your secret?" />
                <PasswordInput defaultValue="test123!" focus hover placeholder="What's your secret?" />
            </Inline>
            <PasswordInput disabled placeholder="What's your secret?" />
            <PasswordInput readOnly placeholder="What's your secret?" />
        </Stack>
    );
