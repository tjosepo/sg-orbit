import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { EmailIcon, IconList, InfoIcon, WarningIcon } from "@components/icons";
import { Flex, Inline, Stack } from "@components/layout";
import { Text } from "@components/typography";
import { cloneElement } from "react";

function Checkbox({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createCheckboxTestSuite(element, stories) {
    return stories
        .add("labeled", () =>
            <Stack>
                <Inline alignY="end">
                    <Checkbox size="sm" element={element}>Milky Way</Checkbox>
                    <Checkbox element={element}>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox size="sm" element={element}>
                        <Text>Milky Way</Text>
                        <EmailIcon />
                    </Checkbox>
                    <Checkbox element={element}>
                        <Text>Milky Way</Text>
                        <EmailIcon />
                    </Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox size="sm" element={element}>
                        <Text>Milky Way</Text>
                        <IconList>
                            <EmailIcon /><EmailIcon /><EmailIcon />
                        </IconList>
                    </Checkbox>
                    <Checkbox element={element}>
                        <Text>Milky Way</Text>
                        <IconList>
                            <EmailIcon /><EmailIcon /><EmailIcon />
                        </IconList>
                    </Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox size="sm" element={element}>
                        <Text>Milky Way</Text>
                        <Counter>60</Counter>
                    </Checkbox>
                    <Checkbox element={element}>
                        <Text>Milky Way</Text>
                        <Counter>60</Counter>
                    </Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox size="sm" element={element}>
                        <Text>Milky Way</Text>
                        <EmailIcon />
                        <Counter>60</Counter>
                    </Checkbox>
                    <Checkbox element={element}>
                        <Text>Milky Way</Text>
                        <EmailIcon />
                        <Counter>60</Counter>
                    </Checkbox>
                </Inline>
            </Stack>
        )
        .add("no label", () =>
            <Stack>
                <Inline alignY="end">
                    <Checkbox size="sm" aria-label="Milky Way" element={element} />
                    <Checkbox aria-label="Milky Way"element={element} />
                </Inline>
                <Inline alignY="end">
                    <Checkbox size="sm" aria-label="Email" element={element}>
                        <EmailIcon />
                    </Checkbox>
                    <Checkbox element={element} aria-label="Email">
                        <EmailIcon />
                    </Checkbox>
                    <Checkbox disabled aria-label="Email" element={element}>
                        <EmailIcon />
                    </Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox size="sm" aria-label="Email" element={element}>
                        <IconList>
                            <EmailIcon /><EmailIcon /><EmailIcon />
                        </IconList>
                    </Checkbox>
                    <Checkbox aria-label="Email" element={element}>
                        <IconList>
                            <EmailIcon /><EmailIcon /><EmailIcon />
                        </IconList>
                    </Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox size="sm" aria-label="Milky Way" element={element}>
                        <Counter>60</Counter>
                    </Checkbox>
                    <Checkbox aria-label="Milky Way" element={element}>
                        <Counter>60</Counter>
                    </Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox size="sm" aria-label="Email" element={element}>
                        <EmailIcon />
                        <Counter>60</Counter>
                    </Checkbox>
                    <Checkbox aria-label="Email" element={element}>
                        <EmailIcon />
                        <Counter>60</Counter>
                    </Checkbox>
                </Inline>
            </Stack>
        )
        .add("reverse", () =>
            <Stack>
                <Div>
                    <Checkbox reverse element={element}>Milky Way</Checkbox>
                </Div>
                <Inline>
                    <Checkbox reverse element={element}>
                        <Text>Milky Way</Text>
                        <IconList>
                            <EmailIcon /><InfoIcon /><WarningIcon />
                        </IconList>
                    </Checkbox>
                    <Checkbox reverse element={element}>
                        <IconList>
                            <EmailIcon /><InfoIcon /><WarningIcon />
                        </IconList>
                    </Checkbox>
                </Inline>
                <Inline>
                    <Checkbox reverse element={element}>
                        <Text>Milky Way</Text>
                        <Counter>60</Counter>
                    </Checkbox>
                    <Checkbox reverse element={element}>
                        <Counter>60</Counter>
                    </Checkbox>
                </Inline>
                <Inline>
                    <Checkbox reverse element={element}>
                        <Text>Milky Way</Text>
                        <IconList>
                            <EmailIcon /><InfoIcon /><WarningIcon />
                        </IconList>
                        <Counter>60</Counter>
                    </Checkbox>
                    <Checkbox reverse element={element}>
                        <IconList><EmailIcon /><InfoIcon /><WarningIcon /></IconList>
                        <Counter>60</Counter>
                    </Checkbox>
                </Inline>
            </Stack>
        )
        .add("validation", () =>
            <Stack>
                <Inline>
                    <Checkbox validationState="invalid" element={element}>Milky Way</Checkbox>
                    <Checkbox validationState="valid" element={element}>Milky Way</Checkbox>
                </Inline>
                <Inline>
                    <Checkbox validationState="invalid" element={element}>
                        <Text>Milky Way</Text>
                        <EmailIcon />
                    </Checkbox>
                    <Checkbox validationState="invalid" element={element}>
                        <Text>Milky Way</Text>
                        <Counter>60</Counter>
                    </Checkbox>
                </Inline>
            </Stack>
        )
        .add("states", () =>
            <Inline>
                <Stack>
                    <Inline alignY="end">
                        <Checkbox active size="sm" element={element}>Milky Way</Checkbox>
                        <Checkbox active element={element}>Milky Way</Checkbox>
                    </Inline>
                    <Inline alignY="end">
                        <Checkbox focus size="sm" element={element}>Milky Way</Checkbox>
                        <Checkbox focus element={element}>Milky Way</Checkbox>
                    </Inline>
                    <Inline alignY="end">
                        <Checkbox hover size="sm" element={element}>Milky Way</Checkbox>
                        <Checkbox hover element={element}>Milky Way</Checkbox>
                    </Inline>
                    <Inline alignY="end">
                        <Checkbox focus hover size="sm" element={element}>Milky Way</Checkbox>
                        <Checkbox focus hover element={element}>Milky Way</Checkbox>
                    </Inline>
                </Stack>
                <Stack>
                    <Inline alignY="end">
                        <Checkbox disabled size="sm" element={element}>Milky Way</Checkbox>
                        <Checkbox disabled element={element}>Milky Way</Checkbox>
                    </Inline>
                    <Inline alignY="end">
                        <Checkbox disabled active size="sm" element={element}>Milky Way</Checkbox>
                        <Checkbox disabled active element={element}>Milky Way</Checkbox>
                    </Inline>
                    <Inline alignY="end">
                        <Checkbox disabled focus size="sm" element={element}>Milky Way</Checkbox>
                        <Checkbox disabled focus element={element}>Milky Way</Checkbox>
                    </Inline>
                    <Inline alignY="end">
                        <Checkbox disabled hover size="sm" element={element}>Milky Way</Checkbox>
                        <Checkbox disabled hover element={element}>Milky Way</Checkbox>
                    </Inline>
                    <Inline alignY="end">
                        <Checkbox disabled focus hover size="sm" element={element}>Milky Way</Checkbox>
                        <Checkbox disabled focus hover element={element}>Milky Way</Checkbox>
                    </Inline>
                </Stack>
            </Inline>
        )
        .add("overflow", () =>
            <Stack>
                <Flex alignItems="end" maxWidth={5}>
                    <Checkbox element={element}>PA-99-N2 event and possible exoplanet in galaxy</Checkbox>
                </Flex>
                <Flex alignItems="end" maxWidth={5}>
                    <Checkbox element={element}>
                        <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                        <IconList>
                            <EmailIcon /><EmailIcon />
                        </IconList>
                    </Checkbox>
                </Flex>
                <Flex alignItems="end" maxWidth={5}>
                    <Checkbox element={element}>
                        <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                        <Counter>60</Counter>
                    </Checkbox>
                </Flex>
            </Stack>
        )
        .add("zoom", () =>
            <Inline>
                <Div className="zoom-in">
                    <Checkbox element={element}>Milky Way</Checkbox>
                </Div>
                <Div className="zoom-out'">
                    <Checkbox element={element}>Milky Way</Checkbox>
                </Div>
            </Inline>
        );
}
