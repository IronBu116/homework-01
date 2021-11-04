import React from "react";
import CardWrapper from "../../common/Card";

const withPropStyles = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} name="new name" />
        </CardWrapper>
    );
};

export default withPropStyles;
