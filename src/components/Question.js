import React, { useState } from "react";
import { useSignUpForm } from "../CustomHooks";
import firebase from "../firebase";

export const Question = ({ state }) => {
  const [distance, setDistance] = useState("");
  const { selectedIndex } = state;
  const dataActivities = ["cycling", "running", "swimming", "walking"];
  const activity = dataActivities[selectedIndex];

  const onChange = event => {
    setDistance(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(event);
    setDistance("");
  };

  return (
    <div className="row">
      <form className="col m6 push-m3" onSubmit={onSubmit}>
        <p className="flow-text grey-text center">
          How much <span>{activity}</span> have you done today?
        </p>
        <input
          className="grey-text"
          name="distance"
          type="text"
          value={distance}
          id={activity}
          placeholder="Distance in m"
          onChange={onChange}
        />
        <p className="center pink-text error text-lighten-1">Error</p>
      </form>
    </div>
  );
};
