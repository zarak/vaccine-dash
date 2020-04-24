import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const Activities = () => {
  const selectedIndex = useSelector(state => state.selectedIndex);
  const dataActivities = ["cycling", "running", "swimming", "walking"];
  const dispatch = useDispatch();

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
