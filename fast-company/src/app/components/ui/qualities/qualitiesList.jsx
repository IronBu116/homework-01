import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";
import { useQualities } from "../../../hooks/useQualities";

const QualitiesList = ({ qualities }) => {
    const { isLoading } = useQualities();
    if (isLoading) return "Loading ...";
    console.log(qualities);
    return (
        <>
            {qualities
                ? qualities.map((qual) => <Quality key={qual} id={qual} />)
                : "Пока тут пусто"}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
