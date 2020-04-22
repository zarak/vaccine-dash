import React, { useState } from "react";
import db from "./firebase";

export const useSignUpForm = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = e => {
    if (e) {
      e.preventDefault();
      const distance = parseInt(inputs.distance);
      if (distance) {
        db.collection("activities").add({
          distance
          // activity
        });
      }
      console.log("d", distance);
      // const distance = parseInt()
    }
    callback();
  };

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};
