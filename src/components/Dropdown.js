import React from "react";

const Dropdown = ({
  question,
  salary,
  qualification,
  handleSalary,
  handleQualification,
}) => {
  let choices = question.choices;
  //   console.log(choices);
  return (
    <div className="mt-5 border-2">
      <select
        className="w-full p-2"
        onChange={question.id === 94 ? handleSalary : handleQualification}
      >
        {choices.map((choice) => (
          <option
            key={choice.id}
            value={choice.choice_text}
            selected={
              question.id === 94
                ? salary === choice.choice_text
                : qualification === choice.choice_text
            }
          >
            {choice.choice_text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
