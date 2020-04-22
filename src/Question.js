import React from "react";
import { useSignUpForm } from "./CustomHooks";

export const Question = ({ state }) => {
  const display = () => console.log(inputs);
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(display);
  const { selectedIndex } = state;
  const dataActivities = ["cycling", "running", "swimming", "walking"];
  const activity = dataActivities[selectedIndex];

  return (
    <div className="row">
      <form className="col m6 push-m3" onSubmit={handleSubmit}>
        <p className="flow-text grey-text center">
          How much <span>{activity}</span> have you done today?
        </p>
        <input
          className="grey-text"
          name="distance"
          type="text"
          value={inputs.activity}
          id={activity}
          placeholder="Distance in m"
          onChange={handleInputChange}
        />
        <p className="center pink-text error text-lighten-1">Error</p>
      </form>
    </div>
  );
};
