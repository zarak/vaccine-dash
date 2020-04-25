import React from "react";
import db from "../firebase";
import d3 from "d3";

export const Canvas = () => {
  const margin = { top: 40, right: 20, bottom: 50, left: 100 };
  const graphWidth = 560 - margin.left - margin.right;
  const graphHeight = 400 - margin.top - margin.bottom;
  const update = data => console.log(data);

  const data = [];
  db.collection("activities").onSnapshot(res => {
    res.docChanges().forEach(change => {
      const doc = { ...change.doc.data(), id: change.doc.id };

      switch (change.type) {
        case "added":
          data.push(doc);
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
  });

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
        Test
      </g>
    </svg>
  );
};
