import React from "react";

const Submit = ({ checkSubmit }) => {
  return (
    <div className="flex justify-center mt-60">
      <button
        className="text-white p-2 bg-purple-500 rounded-lg font-bold text-4xl"
        type="submit"
        onClick={checkSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Submit;
