import React, { useRef, useEffect } from "react";
import { select, axisBottom } from "d3";

export const XAxisGroup = ({ x, graphHeight }) => {
  const ref = useRef();
  useEffect(() => {
    const xAxisG = select(ref.current);
    const xAxis = axisBottom(x).ticks(4);
    xAxisG.call(xAxis);
  }, [graphHeight, x]);
  return (
    <g className="x-axis" transform={`translate(0,${graphHeight})`} ref={ref} />
  );
};
