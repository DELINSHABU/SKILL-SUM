import React, { useState } from "react";
import ReactDom from "react-dom/client";

//* Making random numbers
//? Number will random between 50 to 10
let fNo = Math.floor(Math.random() * 20) + 10;
let sNo = Math.floor(Math.random() * 20) + 10;

function getRandomNumber(){
    let fNo = Math.floor(Math.random() * 20) + 10;
    let sNo = Math.floor(Math.random() * 20) + 10;
}
//* Making random ANSWERS
//? other three option rather correct it they will plus and minus between 1 to 10 that those random
let ansNo01 = Math.floor(Math.random() * 10) + 1;
let ansNo02 = Math.floor(Math.random() * 10) + 1;

//* Answer panel
//? other ans02node other random number which small difference than correct answer
const ans01Node = fNo + sNo - ansNo01;
const ans02Node = fNo + sNo;
const ans03Node = fNo + sNo + ansNo02;

//* putting all ansNode to answer array
let ansArray = [ans01Node,ans02Node,ans03Node]

//* Shuffling the options
//? getting 3 values and store it in array also making sure that 3 values are different
function option(){
    //? getting storing 3 random numbers
    let option01 = Math.floor(Math.random() * 3);
    let option02 = Math.floor(Math.random() * 3);
    let option03 = Math.floor(Math.random() * 3);
    
    //? math operation running until 3 three values are different
    while(option02 === option01){
        option02 = Math.floor(Math.random() * 3);
    }

    while(option03 === option01 || option03 === option02){
        option03 = Math.floor(Math.random() * 3);
    }
    //? return those 3 value in array
    return ([option01,option02,option03])
}


//* set array and that option function
const optionArray= option()
console.log(option())


//* adding options to the page
//? getting option from ansArray and shuffling array index using optionArray
const optionNode01 = ansArray[optionArray[0]]
const optionNode02 = ansArray[optionArray[1]]
const optionNode03 = ansArray[optionArray[2]]

console.log(optionNode01,optionNode02,optionNode03)





const MainCompo = () => {
  const [result, setResult] = useState("");

  const handleButtonClick = (answer) => {
    // Handle button click here
    console.log("Button clicked with answer:", answer);
    if (fNo + sNo === answer) {
      setResult("Correct");
      // Reload the website if the answer is correct
      window.location.reload();
    } else {
      setResult("Wrong");
    }
  };

  return (
    <div className="mainDiv">
      <div className="logo">
        <h1> SKILL SUM</h1>
      </div>
      <div className="questionPanel">
        <h1 className="no1">{fNo}</h1>
        <h1>+</h1>
        <h1 className="no2">{sNo}</h1>
      </div>
      <div className="ansPanel">
        <div className="frow">
        <button onClick={() => handleButtonClick(optionNode01)}>
          <h1 className="ans01">{optionNode01}</h1>
        </button>
        <button onClick={() => handleButtonClick(optionNode02)}>
          <h1 className="ans02">{optionNode02}</h1>
        </button>
        <button onClick={() => handleButtonClick(optionNode03)}>
          <h1 className="ans03">{optionNode03}</h1>
        </button>
        </div>
      </div>
      <p>{result}</p>
    </div>
  );
};

console.log(fNo+sNo)
// Render
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<MainCompo />);
