import React from "react"
import ReactDom from "react-dom/client"


//* making random numbers
let fNo = Math.floor(Math.random()*8)+2;
let sNo = Math.floor(Math.random()*8)+2;


//* ansPanel 
//! this answer are hardcoded not for testing only

const ans01Node = (fNo +sNo)-1
const ans02Node = (fNo +sNo)
const ans03Node = (fNo +sNo)+1


const MainCompo = () =>{
    return(
        <div className = "mainDiv">
        <div className="logo">
            <h1> SKILL SUM</h1>
        </div>
        <div className="questionPanel">
            <h1 className="no1" >{fNo}</h1>
            <h1>+</h1>
            <h1 className="no2">{sNo}</h1>
        </div>
        <div className="ansPanel">
            <button>
            <h1 className="ans01">{ans01Node}</h1>
            </button>
            <button>
            <h1 className="ans02">{ans02Node}</h1>
            </button>
            <button>
            <h1 className="ans03">{ans03Node}</h1>
            </button>
        </div>
        
        </div>
    )
} 


//? console.log answer

console.log(fNo+sNo)


// Render 

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<MainCompo />)