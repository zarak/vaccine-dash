import React, { useState } from "react";
import { useSelector } from "react-redux";
import db from "../firebase";

export const Question = () => {
  const [distance, setDistance] = useState("");
  const [error, setError] = useState("");
  const selectedIndex = useSelector(state => state.selectedIndex);
  const dataActivities = ["cycling", "running", "swimming", "walking"];
  const activity = dataActivities[selectedIndex];

  const onChange = event => {
    setDistance(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    const distanceInt = parseInt(distance);
    console.log(distanceInt);
    if (distanceInt || !isNaN(distanceInt)) {
      db.collection("activities")
        .add({
          distance,
          activity,
          date: new Date().toString()
        })
        .then(() => {
          setError("");
        });
    } else {
      setError("Please enter a valid distance");
    }
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
        <p className="center pink-text error text-lighten-1">{error}</p>
      </form>
    </div>
  );
};
