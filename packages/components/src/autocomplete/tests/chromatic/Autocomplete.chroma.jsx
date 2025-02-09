import { Autocomplete } from "@components/autocomplete";
import { Div } from "@components/html";
import { GroupIcon } from "@components/icons";
import { Inline, Stack } from "@components/layout";
import { Item } from "@components/collection";
import { paramsBuilder, storiesOfBuilder } from "@stories/utils";

function stories(segment) {
    return storiesOfBuilder(module, "Chromatic/Autocomplete")
        .segment(segment)
        .parameters(paramsBuilder()
            .chromaticDelay(100)
            .chromaticPauseAnimationAtEnd()
            .build())
        .build();
}

stories()
    .add("default", () =>
        <Stack>
            <Autocomplete aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
            <Autocomplete loading aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
            <Autocomplete disabled aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
            <Div>
                <Autocomplete fluid aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mercury">Mercury</Item>
                    <Item key="neptune">Neptune</Item>
                    <Item key="uranus">Uranus</Item>
                </Autocomplete>
            </Div>
            <Div width="10%">
                <Autocomplete fluid aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mercury">Mercury</Item>
                    <Item key="neptune">Neptune</Item>
                    <Item key="uranus">Uranus</Item>
                </Autocomplete>
            </Div>
            <Div>
                <Autocomplete loading fluid aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mercury">Mercury</Item>
                    <Item key="neptune">Neptune</Item>
                    <Item key="uranus">Uranus</Item>
                </Autocomplete>
            </Div>
        </Stack>
    )
    .add("placeholder", () =>
        <Stack>
            <Autocomplete placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
            <Autocomplete loading placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
            <Autocomplete disabled placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
            <Div>
                <Autocomplete fluid placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mercury">Mercury</Item>
                    <Item key="neptune">Neptune</Item>
                    <Item key="uranus">Uranus</Item>
                </Autocomplete>
            </Div>
            <Div width="10%">
                <Autocomplete fluid placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mercury">Mercury</Item>
                    <Item key="neptune">Neptune</Item>
                    <Item key="uranus">Uranus</Item>
                </Autocomplete>
            </Div>
            <Div>
                <Autocomplete loading fluid placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mercury">Mercury</Item>
                    <Item key="neptune">Neptune</Item>
                    <Item key="uranus">Uranus</Item>
                </Autocomplete>
            </Div>
        </Stack>
    )
    .add("default value", () =>
        <Stack>
            <Autocomplete defaultValue="Mars" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Autocomplete loading defaultValue="Mars" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Autocomplete disabled defaultValue="Mars" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Inline>
                <Autocomplete defaultValue="Mars" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete value="Mars" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Inline>
            <Div>
                <Autocomplete fluid defaultValue="Mars" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
            <Div width="10%">
                <Autocomplete fluid defaultValue="Mars" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
            <Div>
                <Autocomplete loading fluid defaultValue="Mars" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
        </Stack>
    )
    .add("default value not matching any item", () =>
        <Autocomplete defaultValue="Toto" placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
    .add("trigger icon", () =>
        <Stack>
            <Autocomplete icon={<GroupIcon />} placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Autocomplete defaultValue="Mars" icon={<GroupIcon />} placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Autocomplete disabled icon={<GroupIcon />} placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Div>
                <Autocomplete fluid icon={<GroupIcon />} placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
            <Div width="10%">
                <Autocomplete fluid icon={<GroupIcon />} placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
        </Stack>
    )
    .add("can clear value", () =>
        <Autocomplete defaultValue="Mars" placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
    .add("validation", () =>
        <Inline>
            <Autocomplete validationState="invalid" placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Autocomplete validationState="valid" placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
        </Inline>
    )
    .add("overflowing value", () =>
        <Autocomplete defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
    .add("trigger states", () =>
        <Stack>
            <Inline>
                <Autocomplete active placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete focus placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Inline>
            <Inline>
                <Autocomplete hover placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete readOnly placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Inline>
            <Inline>
                <Autocomplete disabled placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete disabled active placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete disabled focus placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Inline>
            <Inline>
                <Autocomplete disabled hover placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete disabled focus hover placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Inline>
        </Stack>
    )
    .add("no results", () =>
        <Stack gap={13}>
            <Inline>
                <Autocomplete defaultOpen placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete defaultOpen noResultsMessage="Custom no results message" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete defaultOpen noResultsMessage="Custom no results message, this is as custom as can be" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Inline>
            <Div>
                <Autocomplete fluid defaultOpen placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
            <Div width="10%">
                <Autocomplete fluid defaultOpen placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
        </Stack>
    )
    .add("custom trigger width", () =>
        <Autocomplete width={16} placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
    .add("custom menu width", () =>
        <Autocomplete overlayProps={{ width: "500px" }} defaultOpen placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
    .add("direction bottom", () =>
        <Autocomplete direction="bottom" defaultOpen placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
    .add("direction top", () =>
        <Autocomplete direction="top" defaultOpen placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
    .add("align start", () =>
        <Autocomplete align="start" overlayProps={{ style: { width: "500px" } }} defaultOpen placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>,
         {
             ...paramsBuilder()
                 .canvasLayout({ paddingLeft: "200px" })
                 .build()
         }
    )
    .add("align end", () =>
        <Autocomplete align="end" overlayProps={{ style: { width: "500px" } }} defaultOpen placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>,
         {
             ...paramsBuilder()
                 .canvasLayout({ paddingLeft: "400px" })
                 .build()
         }
    )
    .add("conditional rendering", () =>
        <Autocomplete placeholder="Select a planet" aria-label="Planets">
            {false && <Item key="earth">Earth</Item>}
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
    .add("zoom", () =>
        <Stack>
            <Div className="zoom-in">
                <Autocomplete placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mars">Mars</Item>
                </Autocomplete>
            </Div>
            <Div className="zoom-out">
                <Autocomplete placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mars">Mars</Item>
                </Autocomplete>
            </Div>
        </Stack>
    )
    .add("styling", () =>
        <Inline>
            <Autocomplete border="warning-7" placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Autocomplete>
            <Autocomplete className="border-red" placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Autocomplete>
            <Autocomplete style={{ border: "1px solid red" }} placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Autocomplete>
        </Inline>
    );
