import React, { Fragment, useMemo, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axisBottom, select, min, max, scaleBand, scaleTime } from "d3";
import { binMonth, getDate, getStartDate } from "../utils";

export const Canvas = ({ data }) => {
  console.log(data);
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = { height: 200, width: 300 };
  const margin = { top: 40, right: 40, bottom: 40, left: 40 };
  let xScale, yScale;

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    const minDate = min(data, study =>
      getDate(study["Actual Study Start Date"])
    );
    const maxDate = max(data, study =>
      getDate(study["Estimated Study Completion Date"])
    );

    xScale = scaleTime()
      .domain([new Date("1 January 2020"), new Date(2022, 6, 1)])
      .range([0, dimensions.width]);

    yScale = scaleBand()
      .domain([...Array(data.length).keys()])
      .range([dimensions.height, 0])
      .padding(0.05);

    svg
      .selectAll(".study")
      .data(data)
      .join("rect")
      .attr("class", "study")
      .attr("fill", "navy")
      .attr("x", study => getStartDate(study, xScale))
      .attr("y", (study, i) => yScale(i))
      .attr("width", 0)
      .attr("height", 0)
      .on("mouseenter", (value, index) => {
        console.log(value["Developer"]);
        svg
          .selectAll(".tooltip")
          .data([value])
          .join("text")
          .attr("class", "tooltip")
          .text(value["Developer"])
          .attr("x", 0)
          .attr("y", 250)
          .transition()
          .attr("opacity", 1);
      })
      .on("mouseleave", (value, index) => svg.selectAll(".tooltip").remove())
      .transition()
      .delay(800)
      .attr("height", yScale.bandwidth())
      .attr("width", study =>
        xScale(getDate(study["Estimated Study Completion Date"]))
      );

    const xAxis = axisBottom(xScale)
      .ticks(10)
      .tickFormat(binMonth);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
      .call(xAxis);
  }, [data, dimensions]);

  return (
    <Fragment>
      <svg width={dimensions.width} height={dimensions.height} ref={svgRef}>
        <g className="x-axis" />
      </svg>
    </Fragment>
  );
};
