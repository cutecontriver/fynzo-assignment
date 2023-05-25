import React from "react";

const Radio = ({
  question,
  gender,
  location,
  handleGender,
  handleLocation,
}) => {
  const options = question.choices;
  const name = question.question_text;
  return (
    <div className="mt-5">
      {options.map((option, index) => (
        <div key={option.id}>
          <input
            className="accent-purple-500"
            type="radio"
            id={option.id}
            value={option.choice_text}
            name={name}
            checked={
              question.id === 92
                ? gender === option.choice_text
                : location === option.choice_text
            }
            onChange={question.id === 92 ? handleGender : handleLocation}
          />
          <label className="ml-2">{option.choice_text}</label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
