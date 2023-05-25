import { useState } from "react";
import "./App.css";
import data from "./Data";
import QuestionTemplate from "./components/QuestionTemplate";
import Footer from "./components/Footer";
import Submit from "./components/Submit";
import ThankYou from "./components/ThankYou";

function App() {
  let questions = data.questions;

  let [questionNumber, setQuestionNumber] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const next = () => {
    setQuestionNumber((prevQuestion) => prevQuestion + 1);
  };
  const previous = () => {
    setQuestionNumber((prevQuestion) => prevQuestion - 1);
  };
  const checkSubmit = () => {
    setIsSubmit(true);
  };
  function setQuestion() {
    setQuestionNumber((prevQuestion) => prevQuestion + 1);
  }

  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleAgeChange(e) {
    setAge(e.target.value);
  }

  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  function handleGender(e) {
    setGender(e.target.value);
    setTimeout(setQuestion, 500);
  }
  function handleLocation(e) {
    setLocation(e.target.value);
    setTimeout(setQuestion, 500);
  }

  const [salary, setSalary] = useState("");
  const [qualification, setQualification] = useState("");
  function handleSalary(e) {
    setSalary(e.target.value);
    setTimeout(setQuestion, 500);
  }
  function handleQualification(e) {
    setQualification(e.target.value);
    setTimeout(setQuestion, 500);
  }

  const [skills, setSkills] = useState([]);
  const [activities, setActivities] = useState([]);
  let temp1 = [];
  function handleActivities(e) {
    temp1.push(e.target.value);
    setActivities(temp1);
    setTimeout(setQuestion, 500);
  }
  let temp2 = [];
  function handleSkills(e) {
    temp2.push(e.target.value);
    setSkills(temp2);
    setTimeout(setQuestion, 500);
  }

  const [photo, setPhoto] = useState("");
  const [resume, setResume] = useState("");
  function handlePhoto(e) {
    setPhoto(e.target.value);
  }
  function handleResume(e) {
    setResume(e.target.value);
  }

  const question = questions[questionNumber];
  return (
    <div className="bg-slate-300 h-screen">
      {!isSubmit ? (
        <div>
          {questionNumber < questions.length ? (
            <QuestionTemplate
              question={question}
              questionNumber={questionNumber}
              email={email}
              age={age}
              gender={gender}
              location={location}
              handleEmailChange={handleEmailChange}
              handleAgeChange={handleAgeChange}
              handleGender={handleGender}
              handleLocation={handleLocation}
              salary={salary}
              qualification={qualification}
              handleSalary={handleSalary}
              handleQualification={handleQualification}
              skills={skills}
              activities={activities}
              handleSkills={handleSkills}
              handleActivities={handleActivities}
              photo={photo}
              resume={resume}
              handlePhoto={handlePhoto}
              handleResume={handleResume}
            />
          ) : (
            <Submit checkSubmit={checkSubmit} />
          )}
          <div className="absolute bottom-10">
            <Footer
              currentQuestion={questionNumber}
              totalQuestion={questions.length}
              next={next}
              previous={previous}
            />
          </div>
        </div>
      ) : (
        <ThankYou />
      )}
    </div>
  );
}

export default App;
