import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { select, axisLeft } from "d3";

export const YAxisGroup = ({ graphWidth }) => {
  const axes = useSelector(state => state.axes);
  const dataActivities = ["cycling", "running", "swimming", "walking"];
  const { y } = axes;
  const ref = useRef();
  useEffect(() => {
    if (y) {
      console.log("in group", y.ticks());
      const yAxisG = select(ref.current);
      const yAxis = axisLeft(y).ticks(4);
      // .tickSize(-graphWidth)
      // .tickPadding(18);
      yAxisG.call(yAxis);
    }
  }, [graphWidth, y]);
  return <g className="y-axis" ref={ref} />;
};
