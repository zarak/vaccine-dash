import React, { useMemo, useState, useEffect } from "react";
import db from "../firebase";
import * as d3 from "d3";
import { XAxisGroup } from "./XAxisGroup";
import { YAxisGroup } from "./YAxisGroup";
import { useData } from "../useData";

export const Canvas = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    console.log("d", data);
    const unsubscribe = db.collection("activities").onSnapshot(res => {
      res.docChanges().forEach(change => {
        const doc = { ...change.doc.data(), id: change.doc.id };

        switch (change.type) {
          case "added":
            console.log("item added");
            data.push(doc);
            setData(data);
            break;
          case "modified":
            const index = data.findIndex(item => item.id === doc.id);
            data[index] = doc;
            break;
          case "removed":
            data = data.filter(item => item.id !== doc.id);
            break;
          default:
            break;
        }
      });
      console.log("TEST", data.map(d => d.id));
      update(data);
    });
    console.log("djfk", data);
  }, []);

  const xValue = d => new Date(d.date);
  const yValue = d => d.distance;
  const margin = { top: 40, right: 20, bottom: 50, left: 100 };
  const graphWidth = 560 - margin.left - margin.right;
  const graphHeight = 400 - margin.top - margin.bottom;

  const x = useMemo(() => d3.scaleTime().range([0, graphWidth]), [
    data,
    xValue
  ]);

  const y = useMemo(() => d3.scaleLinear().range([graphHeight, 0]), [
    data,
    yValue
  ]);

  const update = data => {
    x.domain(d3.extent(data, xValue));
    y.domain([0, d3.max(data, yValue)]);
    console.log("x ticks", x.ticks());
    console.log("y ticks", y.ticks());
  };

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
