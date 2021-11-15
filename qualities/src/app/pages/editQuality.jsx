import React from "react";
import { useParams } from "react-router";
import QualityForm from "../components/ui/qualityForm";
import { useQualities } from "../hooks/useQualites";
import { useHistory } from "react-router-dom";

const EditQualityPage = () => {
  const history = useHistory();
  const id = useParams().id;
  const { getQuality, updateQuality } = useQualities();
  const quality = getQuality(id);

  const handleSubmit = (data) => {
    console.log(data);
    updateQuality(data).then((data) => {
      if (data) history.push("/");
    });
  };

  return (
    <>
      <h1>Edit Quality Page</h1>{" "}
      {quality !== null ? (
        <QualityForm data={quality} onSubmit={handleSubmit} />
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default EditQualityPage;
