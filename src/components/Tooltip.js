import React from "react";

const Tooltip = ({ feature }) => {
  const { id } = feature.properties;

  return (
    <div id={`tooltip-${id}`}>
      <strong>Borough:</strong> {feature.properties.name}
      <br />
      <strong>Total stops:</strong> {feature.properties.total}
    </div>
  );
};

export default Tooltip;