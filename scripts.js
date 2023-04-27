

//* making random numbers
let fNo = Math.floor(Math.random()*8)+2;
let sNo = Math.floor(Math.random()*8)+2;

//? putting value in the DOM
let fNoNode = document.getElementById('fno')
fNoNode.innerText = fNo;
console.log(fNoNode.innerText)

let sNoNode = document.getElementById('sno')
sNoNode.innerText = sNo;
console.log(sNoNode.innerText)

//* Setting up input make default as 0 
let aNo = document.getElementById('ans')
aNo.value = 0
// console.log(aNo.innerText)

console.log(`Ans: ${fNo+sNo}`)


//* getting buttons
const submit = document.getElementById("submitBtn")
const reset = document.getElementById('resetBtn')


//? setting EventListener and checking values responding
reset.addEventListener('click',()=>{
    fNo = Math.floor(Math.random()*8)+2;
    fNoNode.innerText = fNo;
    
    sNo = Math.floor(Math.random()*8)+2;
    sNoNode.innerText = sNo;

    aNo.value = 0

    document.body.style.backgroundColor = "#0000"; 



})

submit.addEventListener('click',()=>{
    const sum = fNo+sNo
    const ans = aNo.value
    // console.log( `ans: ${sum} `)
    console.log( `input: ${ans}`)
    if(sum == ans){
        document.body.style.backgroundColor = "#D1FFC0";      
        
        
        // response.innerText = "✔️"
        console.log('true')
        fNo = Math.floor(Math.random()*8)+2;
    fNoNode.innerText = fNo;
    
    sNo = Math.floor(Math.random()*8)+2;
    sNoNode.innerText = sNo;
    }
    else{
        document.getElementById('response').style.display ="unset";
        document.body.style.backgroundColor = "#FFC0C0";      
        // response.innerText = "❌"
        console.log('false')
    }
    
})