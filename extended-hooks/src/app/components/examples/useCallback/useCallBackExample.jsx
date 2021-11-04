import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // without callback
    const validateWithOutCallBack = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withOutCallBack.current++;
    }, [validateWithOutCallBack]);

    // with callback

    const validateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallBack]);

    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>render without callback: {withOutCallBack.current}</p>
            <p>render with callback: {withCallBack.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
