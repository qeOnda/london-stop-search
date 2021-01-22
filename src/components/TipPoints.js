import React from "react";

const Tooltip = ({ feature }) => {
  const { id } = feature.properties;

  return (
    <div id={`tooltip-${id}`}>
      <strong>Type:</strong> {feature.properties.type}
      <br />
      <strong>Gender:</strong> {feature.properties.gender}
      <br />
      <strong>Age:</strong> {feature.properties.age}
      <br />
      <strong>Ethnicity:</strong> {feature.properties.ethnicity}
      <br />
      <strong>Purpose of Stop:</strong> {feature.properties.purpose}
      <br />
      <strong>Outcome:</strong> {feature.properties.outcome}
    </div>
  );
};

export default Tooltip;