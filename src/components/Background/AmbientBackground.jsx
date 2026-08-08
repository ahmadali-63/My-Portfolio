import React from "react";
import "./AmbientBackground.css";

const AmbientBackground = () => {
  return (
    <div className="ambient-background">
      <div className="ambient-grid-overlay" />
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />
      <div className="ambient-orb orb-3" />
      <div className="ambient-orb orb-4" />
    </div>
  );
};

export default React.memo(AmbientBackground);
