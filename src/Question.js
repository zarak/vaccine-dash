import React from "react";

export const Question = ({ state }) => {
  const { selectedIndex } = state;
  const dataActivities = ["cycling", "running", "swimming", "walking"];
  const activity = dataActivities[selectedIndex];

  const handleSubmit = e => {
    e.preventDefault();
    console.log("e", e);
    // const distance = parseInt()
  };

  return (
    <div className="row">
      <form className="col m6 push-m3">
        <p className="flow-text grey-text center">
          How much <span>{activity}</span> have you done today?
        </p>
        <input
          className="grey-text"
          name=""
          type="text"
          value=""
          id={activity}
          placeholder="Distance in m"
          onSubmit={handleSubmit}
        />
        <p className="center pink-text error text-lighten-1">Error</p>
      </form>
    </div>
  );
};
