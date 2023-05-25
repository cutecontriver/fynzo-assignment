import React from "react";
import Radio from "./Radio";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";
import TakeInput from "./TakeInput";
import UploadFile from "./UploadFile";

const QuestionTemplate = ({
  question,
  questionNumber,
  gender,
  location,
  handleLocation,
  handleGender,
  email,
  age,
  handleAgeChange,
  handleEmailChange,
  salary,
  qualification,
  handleSalary,
  handleQualification,
  skills,
  activities,
  handleSkills,
  handleActivities,
  photo,
  resume,
  handlePhoto,
  handleResume,
  required,
}) => {
  let question_number = questionNumber + 1;
  let question_text = question.question_text;
  let question_type = question.question_type;

  return (
    <div className="px-80 pt-28">
      <div>
        <h2 className="flex justify-center text-3xl text-purple-700 font-medium">
          Question {question_number}
        </h2>
        <h1 className="mt-5 text-4xl text-purple-700 font-bold">
          {question_text}
        </h1>
      </div>
      <div>
        {question_type === 1 && (
          <Radio
            question={question}
            gender={gender}
            location={location}
            handleLocation={handleLocation}
            handleGender={handleGender}
            required={required}
          />
        )}
        {question_type === 2 && (
          <Dropdown
            question={question}
            salary={salary}
            qualification={qualification}
            handleSalary={handleSalary}
            handleQualification={handleQualification}
            required={required}
          />
        )}
        {question_type === 3 && (
          <Checkbox
            question={question}
            skills={skills}
            activities={activities}
            handleSkills={handleSkills}
            handleActivities={handleActivities}
            required={required}
          />
        )}
        {question_type === 4 && (
          <TakeInput
            question={question}
            email={email}
            age={age}
            handleAgeChange={handleAgeChange}
            handleEmailChange={handleEmailChange}
            required={required}
          />
        )}
        {question_type === 5 && (
          <UploadFile
            question={question}
            photo={photo}
            resume={resume}
            handlePhoto={handlePhoto}
            handleResume={handleResume}
            required={required}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionTemplate;
