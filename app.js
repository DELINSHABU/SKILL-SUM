import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function RandomNumber(high, low) {
  return Math.floor(Math.random() * high) + low;
}

function generateNewQuestion() {
  const fNo = RandomNumber(15, 10);
  const sNo = RandomNumber(15, 10);
  const ansNo01 = RandomNumber(10, 1);
  const ansNo02 = RandomNumber(10, 1);
  const ansArray = [fNo + sNo - ansNo01, fNo + sNo, fNo + sNo + ansNo02];


  //* generating Options 
  const optionArray = option();
  const optionNode01 = ansArray[optionArray[0]];
  const optionNode02 = ansArray[optionArray[1]];
  const optionNode03 = ansArray[optionArray[2]];
  console.log(ansArray[1])

  return { fNo, sNo, optionNode01, optionNode02, optionNode03 };
}

//* this function is for generate random three numbers between 0-2
function option() {
  let option01 = RandomNumber(3, 0);
  let option02 = RandomNumber(3, 0);
  let option03 = RandomNumber(3, 0);

  while (option02 === option01) {
    option02 = Math.floor(Math.random() * 3);
  }

  while (option03 === option01 || option03 === option02) {
    option03 = Math.floor(Math.random() * 3);
  }

  return [option01, option02, option03];
}



const optionNode = option()
// console.log(optionNode)

const MainCompo = () => {
  const [question, setQuestion] = useState(generateNewQuestion);
  const [result, setResult] = useState("");
  const [timer, setTimer] = useState(5000); // 5 seconds in milliseconds

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1000); // decrement by 10 milliseconds
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setQuestion(generateNewQuestion());
      setTimer(5000);
      setResult("Time's up!");
    }
  }, [timer]);

  const handleButtonClick = (answer) => {
    clearInterval(timer); // Reset the timer when a button is clicked
    if (question.fNo + question.sNo === answer) {
      setResult("Correct");
      setQuestion(generateNewQuestion);
      setTimer(5000);
    } else {
      setResult("Wrong");
    }
  };

  const seconds = Math.floor(timer / 1000);
  const milliseconds = (timer % 1000)/10;
  // console.log(milliseconds/10)
  return (
    <div className="mainDiv">
      <div className="logo">
        <h1> SKILL SUM</h1>
      </div>
      <div className="questionPanel">
        <h1 className="no1">{question.fNo}</h1>
        <h1>+</h1>
        <h1 className="no2">{question.sNo}</h1>
      </div>
      <div className="ansPanel">
        <div className="frow">
          <button onClick={() => handleButtonClick(question.optionNode01)}>
            <h1 className="ans01">{question.optionNode01}</h1>
          </button>
          <button onClick={() => handleButtonClick(question.optionNode02)}>
            <h1 className="ans02">{question.optionNode02}</h1>
          </button>
          <button onClick={() => handleButtonClick(question.optionNode03)}>
            <h1 className="ans03">{question.optionNode03}</h1>
          </button>
        </div>
      </div>
      <h2 className="Timer">{seconds}</h2>
      <p>{result}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainCompo />);
