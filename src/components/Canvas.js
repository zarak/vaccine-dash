import React, { useMemo } from "react";
import db from "../firebase";
import * as d3 from "d3";
import { XAxisGroup } from "./XAxisGroup";
import { YAxisGroup } from "./YAxisGroup";

const xValue = d => new Date(d.date);
const yValue = d => d.distance;

export const Canvas = ({ data }) => {
  console.log(data);
  const margin = { top: 40, right: 20, bottom: 50, left: 100 };
  const graphWidth = 560 - margin.left - margin.right;
  const graphHeight = 400 - margin.top - margin.bottom;

  const x = useMemo(
    () =>
      d3
        .scaleTime()
        .domain(d3.extent(data, xValue))
        .range([0, graphWidth]),
    [data, xValue]
  );

  const y = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([0, d3.max(data, yValue)])
        .range([graphHeight, 0]),
    [data, yValue]
  );

  const update = data => {
    console.log(x.ticks());
  };

  update(data);
  return (
    <svg
      width={graphWidth + margin.left + margin.right}
      height={graphHeight + margin.top + margin.bottom}
    >
      <g
        width={graphWidth}
        height={graphHeight}
        transform={`translate(${margin.left}, ${margin.top})`}
      >
        <XAxisGroup x={x} graphHeight={graphHeight} />
        <YAxisGroup y={y} graphWidth={graphWidth} />
      </g>
    </svg>
  );
};
