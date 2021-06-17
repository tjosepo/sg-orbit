import "./MotionSample.css";

import { useState } from "react";

export function MotionSample({ duration, easing }) {
    const formattedDuration = `.${duration}s`;
    const formattedEasing = easing ? `cubic-bezier${easing}` : "cubic-bezier(0.22, 0.61, 0.36, 1)";

    const [isAnimated, setAnimated] = useState(false);

    const handleClick = () => {
        setAnimated(!isAnimated);
    };


    return (
        <div className="animation-player">
            <button type="button" onClick={handleClick} className="play-animation" style={{ "--duration": formattedDuration, "--easing": formattedEasing }}>Play this motion</button>
            <div className={`br-100 bn bg-marine-300 w10 h10 motion-sample ${isAnimated ? "slide" : null}`} style={{ "--duration": formattedDuration, "--easing": formattedEasing }}></div>
        </div>
    );
}