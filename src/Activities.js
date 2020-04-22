import React from "react";

export const Activities = ({ state, dispatch }) => {
  const { selectedIndex } = state;
  const dataActivities = ["cycling", "running", "swimming", "walking"];

  const changeActivity = selectedIndex => {
    dispatch({
      type: "SET_ACTIVITY",
      payload: selectedIndex
    });
  };

  return (
    <div className="col s12 l5">
      {dataActivities.map((a, i) => {
        const active = i === selectedIndex ? "active" : null;
        return (
          <button
            key={i}
            className={`activity ${active}`}
            data-activity={a}
            onClick={() => changeActivity(i)}
          >
            {a}
          </button>
        );
      })}
    </div>
  );
};
