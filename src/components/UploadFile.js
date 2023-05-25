import React from "react";

const UploadFile = ({ question, photo, resume, handlePhoto, handleResume }) => {
  return (
    <div className="mt-5">
      {question.id === 98 ? (
        <input
          type="file"
          id={question.id}
          name={question.question_text}
          accept="image/png, image/jpeg"
          // value={photo}
          // onChange={handlePhoto}
        />
      ) : (
        <input
          type="file"
          id={question.id}
          name={question.question_text}
          accept=".doc,.docx,.pdf"
          // value={question.id ? resume : ""}
          // onChange={handleResume}
        />
      )}
    </div>
  );
};
export default UploadFile;
