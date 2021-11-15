import React from "react";
import PropTypes from "prop-types";
import { useQuality } from "../../../hooks/useQuality";

const Quality = ({ id }) => {
    const { isLoading, getQuality } = useQuality();
    if (!isLoading) {
        const { _id, name, color } = getQuality(id);
        return (
            <span className={"badge m-1 bg-" + color} key={_id}>
                {name}
            </span>
        );
    }
    return "Loading...";
};

Quality.propTypes = {
    id: PropTypes.string.isRequired
};

export default Quality;
