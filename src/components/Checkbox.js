import React from "react";

const Checkbox = ({
  question,
  skills,
  activities,
  handleSkills,
  handleActivities,
}) => {
  let choices = question.choices;
  return (
    <div className="mt-5">
      {choices.map((choice) => (
        <div key={choice.id}>
          <input
            className="accent-purple-500 w-4 h-4"
            type="checkbox"
            id={choice.id}
            name={choice.choice_text}
            value={choice.choice_text}
            checked={
              question.id === 96
                ? skills.includes(choice.choice_text)
                : activities.includes(choice.choice_text)
            }
            onChange={question.id === 96 ? handleSkills : handleActivities}
          />
          <label className="ml-2 "> {choice.choice_text}</label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
