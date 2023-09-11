import React, { useState } from "react";
import { GridLoader } from "react-spinners";

const Loading = ({ darkMode }) => {
  let [loading, setloading] = useState(true);
  let [color, setColor] = useState(
    darkMode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"
  );

  const overide = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div className="py-5 bg-main-color">
      <GridLoader
        color={color}
        loading={loading}
        cssOverride={overide}
        size={10}
        aria-label="Loading Spinner"
        data="loader"
      />
    </div>
  );
};

export default Loading;
