import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { select, axisBottom } from "d3";

export const XAxisGroup = ({ graphHeight }) => {
  const axes = useSelector(state => state.axes);
  const dataActivities = ["cycling", "running", "swimming", "walking"];

  const { x } = axes;
  const ref = useRef();
  useEffect(() => {
    if (x) {
      console.log("xg", x.ticks());
      const xAxisG = select(ref.current);
      const xAxis = axisBottom(x).ticks(4);
      xAxisG.call(xAxis);
    }
  }, [graphHeight, x]);
  return (
    <g className="x-axis" transform={`translate(0,${graphHeight})`} ref={ref} />
  );
};
