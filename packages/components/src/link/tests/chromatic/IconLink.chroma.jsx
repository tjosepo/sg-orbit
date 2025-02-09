import { AddIcon } from "@components/icons";
import { IconLink, IconLinkAsButton } from "@components/link";
import { Inline } from "@components/layout";
import { createIconLinkTestSuite } from "./createIconLinkTestSuite";
import { paramsBuilder, storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/IconLink")
        .segment(segment)
        .parameters(paramsBuilder()
            .chromaticDelay(100)
            .build())
        .build();
}

createIconLinkTestSuite(<IconLink />, stories());

createIconLinkTestSuite(<IconLinkAsButton type="button" />, stories("/button"));

stories()
    .add("styling", () =>
        <Inline>
            <IconLink border="warning-7" href="#" aria-label="Add"><AddIcon /></IconLink>
            <IconLink className="bg-red" href="#" aria-label="Add"><AddIcon /></IconLink>
            <IconLink style={{ backgroundColor: "red" }} href="#" aria-label="Add"><AddIcon /></IconLink>
        </Inline>
    );
