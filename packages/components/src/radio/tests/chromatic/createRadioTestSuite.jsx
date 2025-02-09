import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { EmailIcon, IconList, InfoIcon, WarningIcon } from "@components/icons";
import { Flex } from "@components/layout";
import { Inline, Stack } from "@components/layout";
import { Text } from "@components/typography";
import { cloneElement } from "react";

function Radio({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createRadioTestSuite(element, stories) {
    return stories
        .add("labeled", () =>
            <Stack>
                <Radio value="any" element={element}>Milky Way</Radio>
                <Inline alignY="end">
                    <Radio value="any" element={element}>
                        <Text>Milky Way</Text>
                        <EmailIcon />
                    </Radio>
                    <Radio disabled value="any" element={element}>
                        <Text>Milky Way</Text>
                        <EmailIcon />
                    </Radio>
                </Inline>
                <Radio value="any" element={element}>
                    <Text>Milky Way</Text>
                    <IconList>
                        <EmailIcon /><EmailIcon /><EmailIcon />
                    </IconList>
                </Radio>
                <Inline alignY="end">
                    <Radio value="any" element={element}>
                        <Text>Milky Way</Text>
                        <Counter>60</Counter>
                    </Radio>
                    <Radio disabled value="any" element={element}>
                        <Text>Milky Way</Text>
                        <Counter>60</Counter>
                    </Radio>
                </Inline>
                <Radio value="any" element={element}>
                    <Text>Milky Way</Text>
                    <EmailIcon />
                    <Counter>60</Counter>
                </Radio>
            </Stack>
        )
        .add("reverse", () =>
            <Stack>
                <Radio reverse value="any" element={element}>Milky Way</Radio>
                <Radio reverse value="any" element={element}>
                    <Text>Milky Way</Text>
                    <IconList>
                        <EmailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                </Radio>
                <Radio reverse value="any" element={element}>
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Radio>
                <Radio reverse value="any" element={element}>
                    <Text>Milky Way</Text>
                    <IconList>
                        <EmailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                    <Counter>60</Counter>
                </Radio>
            </Stack>
        )
        .add("validation", () =>
            <Stack>
                <Inline>
                    <Radio validationState="invalid" value="any" element={element}>Milky Way</Radio>
                    <Radio validationState="valid" value="any" element={element}>Milky Way</Radio>
                </Inline>
                <Inline>
                    <Radio validationState="invalid" value="any" element={element}>
                        <Text>Milky Way</Text>
                        <EmailIcon />
                    </Radio>
                    <Radio validationState="invalid" value="any" element={element}>
                        <Text>Milky Way</Text>
                        <Counter>60</Counter>
                    </Radio>
                </Inline>
            </Stack>
        )
        .add("states", () =>
            <Inline>
                <Stack>
                    <Radio active value="any" element={element}>Milky Way</Radio>
                    <Radio focus value="any" element={element}>Milky Way</Radio>
                    <Radio hover value="any" element={element}>Milky Way</Radio>
                    <Radio focus hover value="any" element={element}>Milky Way</Radio>
                </Stack>
                <Stack>
                    <Radio disabled value="any" element={element}>Milky Way</Radio>
                    <Radio disabled active value="any" element={element}>Milky Way</Radio>
                    <Radio disabled focus value="any" element={element}>Milky Way</Radio>
                    <Radio disabled hover value="any" element={element}>Milky Way</Radio>
                    <Radio disabled focus hover value="any" element={element}>Milky Way</Radio>
                </Stack>
            </Inline>
        )
        .add("overflow", () =>
            <Stack>
                <Flex alignItems="end" maxWidth="16rem">
                    <Radio value="any" element={element}>PA-99-N2 event and possible exoplanet in galaxy</Radio>
                </Flex>
                <Flex alignItems="end" maxWidth="16rem">
                    <Radio value="any" element={element}>
                        <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                        <IconList>
                            <EmailIcon /><EmailIcon />
                        </IconList>
                    </Radio>
                </Flex>
                <Flex alignItems="end" maxWidth="16rem">
                    <Radio value="any" element={element}>
                        <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                        <Counter>60</Counter>
                    </Radio>
                </Flex>
            </Stack>
        )
        .add("zoom", () =>
            <Inline>
                <Div className="zoom-in">
                    <Radio value="any" element={element}>Milky Way</Radio>
                </Div>
                <Div className="zoom-out">
                    <Radio value="any" element={element}>Milky Way</Radio>
                </Div>
            </Inline>
        );
}
