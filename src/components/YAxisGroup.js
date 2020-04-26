import React, { useRef, useEffect } from "react";
import { select, axisLeft } from "d3";

export const YAxisGroup = ({ y, graphWidth }) => {
  const ref = useRef();
  useEffect(() => {
    const yAxisG = select(ref.current);
    const yAxis = axisLeft(y)
      .tickSize(-graphWidth)
      .tickPadding(18);
    yAxisG.call(yAxis);
  }, [graphWidth, y]);
  return <g className="y-axis" ref={ref} />;
};
