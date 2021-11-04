import React from "react";
import Component from "./someComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withPropStyles from "./withPropStyles";

const HOCExample = () => {
    const ComponentWtihAuth = withLogin(Component);
    const WithPropStyles = withPropStyles(Component);
    const NewComponent = withPropStyles(ComponentWtihAuth);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWtihAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <WithPropStyles />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <NewComponent />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
