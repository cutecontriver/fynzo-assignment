import React from "react";

const ThankYou = () => {
  function handleClick() {
    window.location.reload();
  }
  return (
    <>
      <div className="flex justify-center mt-60 text-3xl font-bold text-purple-500">
        Thank You for filling out the Survey
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="bg-purple-600 text-white text-2xl p-2 rounded-lg hover:bg-purple-300"
          onClick={handleClick}
        >
          Start New Survey
        </button>
      </div>
    </>
  );
};

export default ThankYou;
