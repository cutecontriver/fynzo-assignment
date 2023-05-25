import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Footer = ({ currentQuestion, totalQuestion, next, previous }) => {
  let percentage = Math.floor((currentQuestion / totalQuestion) * 100);
  function increase() {
    next();
  }
  function decrease() {
    previous();
  }

  return (
    <div className="ml-10 flex gap-[48rem]">
      <div>
        <div className="pb-2">{percentage}% Completed</div>
        <ProgressBar
          completed={percentage}
          height="10px"
          width="250px"
          labelSize="10px"
        />
      </div>
      <div className="flex gap-4">
        <button
          className="text-white p-2 bg-purple-500 rounded-lg font-bold"
          onClick={decrease}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          className="text-white p-2 bg-purple-500 rounded-lg font-bold"
          onClick={increase}
          disabled={currentQuestion === totalQuestion}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Footer;
