import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(false);
    const toggleOtherState = () => {
        setOtherState(!otherState);
    };

    useEffect(() => {
        renderCount.current++;
    });

    console.log(renderCount);
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количесва рендеров</SmallTitle>
            <p>render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle other State
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
