import React from "react";

function ProgressBar (props) {

  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 7,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 2,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
};

export default ProgressBar;