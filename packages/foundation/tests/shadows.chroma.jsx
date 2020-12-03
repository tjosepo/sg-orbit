import { Inline } from "@react-components/layout";
import { storiesOfBuilder } from "@stories/utils";

function stories() {
    return storiesOfBuilder(module, "Chromatic/Shadows")
        .build();
}

stories()
    .add("default",
         () =>
             <Inline gap={12}>
                 <div className="w13 h13 shadow-100 bg-white mb8" />
                 <div className="w13 h13 shadow-200 bg-white" />
             </Inline>
    );
