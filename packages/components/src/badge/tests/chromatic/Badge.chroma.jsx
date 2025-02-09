import { CheckCircleIcon, EmailIcon } from "@components/icons";

import { Badge } from "@components/badge";
import { Div } from "@components/html";
import { Inline } from "@components/layout";
import { Text } from "@components/typography";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Badge")
        .segment(segment)
        .build();
}

function SquareBadge({ children, ...rest }) {
    return (
        <Badge {...rest}>
            {children}
            <Div backgroundColor="alias-accent-light" width={6} height={6} />
        </Badge>
    );
}

function CircleBadge({ children, ...rest }) {
    return (
        <Badge
            {...rest}
            overlap="circle"
        >
            {children}
            <Div backgroundColor="alias-accent-light" borderRadius="100px" width={6} height={6} />
        </Badge>
    );
}

function IconBadge({ children, ...rest }) {
    return (
        <Badge
            {...rest}
            overlap="icon"
        >
            {children}
            <EmailIcon size="lg" />
        </Badge>
    );
}

function TextBadge({ children, ...rest }) {
    return (
        <Badge {...rest}>
            {children}
            Notifications
        </Badge>
    );
}

stories("/count")
    .add("default", () =>
        <Inline gap={8}>
            <SquareBadge>
                <Text>5</Text>
            </SquareBadge>
            <SquareBadge>
                <Text>5+</Text>
            </SquareBadge>
            <SquareBadge>
                <Text>50</Text>
            </SquareBadge>
            <SquareBadge>
                <Text>500</Text>
            </SquareBadge>
            <SquareBadge>
                <Text>500+</Text>
            </SquareBadge>
        </Inline>
    )
    .add("overlap", () =>
        <Inline gap={8}>
            <SquareBadge>
                <Text>50</Text>
            </SquareBadge>
            <CircleBadge>
                <Text>50</Text>
            </CircleBadge>
            <IconBadge>
                <Text>50</Text>
            </IconBadge>
        </Inline>
    )
    .add("zoom", () =>
        <Inline gap={8}>
            <Div className="zoom-in">
                <SquareBadge>
                    <Text>5</Text>
                </SquareBadge>

            </Div>
            <Div className="zoom-out">
                <SquareBadge>
                    <Text>5</Text>
                </SquareBadge>
            </Div>

        </Inline>
    )
    .add("styling", () =>
        <Inline gap={8}>
            <SquareBadge border="warning-7">
                <Text>100</Text>
            </SquareBadge>
            <SquareBadge className="border-red">
                <Text>100</Text>
            </SquareBadge>
            <SquareBadge style={{ border: "1px solid red" }}>
                <Text>100</Text>
            </SquareBadge>
        </Inline>
    );

stories("/dot")
    .add("default", () =>
        <SquareBadge variant="dot" />
    )
    .add("overlap", () =>
        <Inline gap={8}>
            <SquareBadge variant="dot" />
            <CircleBadge variant="dot" />
            <IconBadge variant="dot" />
            <TextBadge variant="dot" />
        </Inline>
    )
    .add("styling", () =>
        <Inline>
            <SquareBadge variant="dot" border="warning-7" />
            <SquareBadge variant="dot" className="border-red" />
            <SquareBadge variant="dot" style={{ border: "1px solid red" }} />
        </Inline>
    );

stories("/icon")
    .add("default", () =>
        <SquareBadge variant="icon">
            <CheckCircleIcon />
        </SquareBadge>
    )
    .add("overlap", () =>
        <Inline gap={8}>
            <SquareBadge variant="icon">
                <CheckCircleIcon />
            </SquareBadge>
            <CircleBadge variant="icon">
                <CheckCircleIcon />
            </CircleBadge>
            <IconBadge variant="icon">
                <CheckCircleIcon />
            </IconBadge>
            <TextBadge variant="icon">
                <CheckCircleIcon />
            </TextBadge>
        </Inline>
    )
    .add("styling", () =>
        <Inline>
            <SquareBadge border="warning-7" variant="icon">
                <CheckCircleIcon />
            </SquareBadge>
            <SquareBadge className="border-red" variant="icon">
                <CheckCircleIcon />
            </SquareBadge>
            <SquareBadge style={{ border: "1px solid red" }} variant="icon">
                <CheckCircleIcon />
            </SquareBadge>
        </Inline>
    );
