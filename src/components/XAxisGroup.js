import React, { useRef, useEffect } from "react";
import { select, axisBottom } from "d3";

export const XAxisGroup = ({ x, graphHeight }) => {
  const ref = useRef();
  useEffect(() => {
    const xAxisG = select(ref.current);
    const xAxis = axisBottom(x)
      .tickSize(-graphHeight)
      .tickPadding(18);
    xAxisG.call(xAxis);
  }, [graphHeight, x]);
  return <g transform={`translate(0,${graphHeight})`} ref={ref} />;
};
