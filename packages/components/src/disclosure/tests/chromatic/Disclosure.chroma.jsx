import { Disclosure, useDisclosureContext } from "@components/disclosure";
import { Flex, Stack } from "@components/layout";

import { ArrowIcon } from "@components/icons";
import { Button } from "@components/button";
import { Div } from "@components/html";
import { TextLinkAsButton } from "@components/link";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Disclosure")
        .segment(segment)
        .build();
}

stories()
    .add("default", () =>
        <Disclosure>
            <Button variant="secondary">Mars</Button>
            <Div>
                Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System (in adherence with the IAU's controversial 2006 definition of planet),
                being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".[17][18] The latter refers
                to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.
                [19] Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
            </Div>
        </Disclosure>
    )
    .add("opened", () =>
        <Stack>
            <Disclosure open>
                <Button variant="secondary">Mars</Button>
                <Div>Mars is the fourth planet from the Sun and the second-smallest planet.</Div>
            </Disclosure>
            <Disclosure defaultOpen>
                <Button variant="secondary">Mars</Button>
                <Div>Mars is the fourth planet from the Sun and the second-smallest planet.</Div>
            </Disclosure>
        </Stack>
    )
    .add("custom trigger", () => {
        const Trigger = ({ children, ...rest }) => {
            const { isOpen } = useDisclosureContext();

            return (
                <Flex
                    {...rest}
                    alignItems="center"
                >
                    {children}
                    <ArrowIcon transform={isOpen ? "rotate(90deg)" : undefined} />
                </Flex>
            );
        };

        return (
            <Stack>
                <Disclosure>
                    <Trigger>Mars</Trigger>
                    <Div>Mars is the fourth planet from the Sun and the second-smallest planet.</Div>
                </Disclosure>
                <Disclosure defaultOpen>
                    <Trigger>Mars</Trigger>
                    <Div>Mars is the fourth planet from the Sun and the second-smallest planet.</Div>
                </Disclosure>
            </Stack>
        );
    })
    .add("text link", () =>
        <Disclosure>
            <TextLinkAsButton>Mars</TextLinkAsButton>
            <Div>Mars is the fourth planet from the Sun and the second-smallest planet.</Div>
        </Disclosure>
    )
    .add("functional content", () =>
        <Disclosure defaultOpen>
            {() => {
                return (
                    <>
                        <Button variant="secondary">Mars</Button>
                        <Div>Mars is the fourth planet from the Sun and the second-smallest planet.</Div>
                    </>
                );
            }}
        </Disclosure>
    );
