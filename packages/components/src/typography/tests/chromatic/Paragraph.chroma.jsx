import { Paragraph } from "@components/typography";
import { TextLink } from "@components/link";
import { storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Paragraph")
        .segment(segment)
        .build();
}

stories()
    .add("default", () =>
        <>
            <Paragraph size="2xl">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph size="xl">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph size="lg">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph>If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph size="sm">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph size="xs">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
        </>
    )
    .add("as div", () =>
        <>
            <Paragraph as="div" size="2xl">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph as="div" size="xl">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph as="div" size="lg">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph as="div">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph as="div" size="sm">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph as="div" size="xs">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
        </>
    )
    .add("link", () =>
        <>
            <Paragraph size="2xl">If two pieces of the same type of <TextLink href="#">metal touch</TextLink> in space they <TextLink href="https://www.sharegate.com" external>will permanently</TextLink> bond.</Paragraph>
            <Paragraph size="xl">If two pieces of the same type of <TextLink href="#">metal touch</TextLink> in space they <TextLink href="https://www.sharegate.com" external>will permanently</TextLink> bond.</Paragraph>
            <Paragraph size="lg">If two pieces of the same type of <TextLink href="#">metal touch</TextLink> in space they <TextLink href="https://www.sharegate.com" external>will permanently</TextLink> bond.</Paragraph>
            <Paragraph>If two pieces of the same type of <TextLink href="#">metal touch</TextLink> in space they <TextLink href="https://www.sharegate.com" external>will permanently</TextLink> bond.</Paragraph>
            <Paragraph size="sm">If two pieces of the same type of <TextLink href="#">metal touch</TextLink> in space they <TextLink href="https://www.sharegate.com" external>will permanently</TextLink> bond.</Paragraph>
            <Paragraph size="xs">If two pieces of the same type of <TextLink href="#">metal touch</TextLink> in space they <TextLink href="https://www.sharegate.com" external>will permanently</TextLink> bond.</Paragraph>
        </>
    )
    .add("styling", () =>
        <>
            <Paragraph border="warning-7">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph className="bg-red">If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
            <Paragraph style={{ backgroundColor: "red" }}>If two pieces of the same type of metal touch<br />in space they will permanently bond.</Paragraph>
        </>
    );
