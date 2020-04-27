import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { select, axisBottom } from "d3";

export const XAxisGroup = ({ graphHeight }) => {
  const axes = useSelector(state => state.axes);
  const dispatch = useDispatch();

  const changeAxes = axes => {
    console.log("axes", axes);
    dispatch({
      type: "SET_AXES",
      payload: axes
    });
  };

  const { x, y } = axes;
  const ref = useRef();
  useEffect(() => {
    if (x) {
      console.log("xg", x.ticks());
      const xAxisG = select(ref.current);
      const xAxis = axisBottom(x).ticks(4);
      xAxisG.call(xAxis);
    }
    changeAxes({ x, y });
  }, [graphHeight, x]);
  if (x) console.log("after", x.ticks());
  return (
    <g className="x-axis" transform={`translate(0,${graphHeight})`} ref={ref} />
  );
};
