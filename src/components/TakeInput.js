import React from "react";

const TakeInput = ({
  question,
  email,
  age,
  handleEmailChange,
  handleAgeChange,
}) => {
  let id = question.id;
  return (
    <div className="border-2 mt-5">
      {id === 90 ? (
        <input
          className="w-full p-2"
          type="email"
          required
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      ) : (
        <input
          className="w-full p-2"
          type="number"
          min="0"
          placeholder="Enter age"
          value={age}
          onChange={handleAgeChange}
        />
      )}
    </div>
  );
};

export default TakeInput;
