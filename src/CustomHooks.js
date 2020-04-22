import React, { useState } from "react";

export const useSignUpForm = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = e => {
    console.log(e);
    if (e) {
      e.preventDefault();
      console.log("e", e);
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
