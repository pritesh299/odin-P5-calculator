let resultDisplay=document.getElementById('result')
const add=document.getElementById('add')
const sub=document.getElementById('sub')
const multiply=document.getElementById('multiply')
const divide=document.getElementById('divide')
const equal=document.getElementById('equal')
const inputs=document.querySelectorAll('.input')
const operators=document.querySelectorAll('.operator')
const clearBtn=document.getElementById('clear')
const AllClearBtn=document.getElementById('allClear')
let display=document.getElementById('display')
let number1="",number2="",currentOperator="",result="";

//stores the numbers input values
inputs.forEach(input=>{
    
    input.addEventListener('click',()=>{
        dispalyStatement(input.value)
      if (number1==="" || currentOperator===""){
        number1+=input.value;
 console.log(number1,number2)
    }
      else { 
        number2+=input.value;
 console.log(number1,number2)
 preResultDisplay()
          
      }
    })
})
//stores the operator values
operators.forEach(operator=>{
    operator.addEventListener('click',()=>{
        adjustOperator()//adjust change in operator if any
        dispalyStatement(operator.value)
        if (!(number2==="")){
            number2="";
            number1=result
        }
     currentOperator=operator.value;
      
    })
})

equal.addEventListener('click',()=>{
    compute(number1,number2,currentOperator)
      number1=result;
      currentOperator="";
      resultDisplay.style.color="black";

})

AllClearBtn.addEventListener('click',()=>{
    number1="";
    number2="";
    currentOperator="";
    prevOperator="";
    result="";
    display.textContent="";
    resultDisplay.textContent="";
})
 clearBtn.addEventListener('click',()=>{clearText()})
function compute(n1,n2,currentOperator){
   n1= Number(n1)
   n2= Number(n2)
    if(currentOperator==='+'){result=(n1+n2)}
    else if(currentOperator==='-'){result=(n1-n2)}
    else if(currentOperator==='×'){result=(n1*n2)}
    else if(currentOperator==='÷'){result=(n1/n2)}
}

function dispalyStatement(text){
    display.textContent += text;
}
function preResultDisplay(){
    if(number1==="" ||currentOperator==="" ||number2===""){
       resultDisplay.innerText="";
    }

    else{
      resultDisplay.style.color="grey"
     compute(number1,number2,currentOperator)
       resultDisplay.innerText=result;
    }
   
}
let lastInput;

function adjustOperator(){
     lastInput=display.innerText.charAt(display.innerText.length-1);
if ((lastInput==='+')||(lastInput==='-')||(lastInput==='×')||(lastInput==='÷')){
clearText();
}
}
function clearText(){
    lastInput=display.innerText.charAt(display.innerText.length-1);
    if(number2===""&&currentOperator===""){
        display.textContent=display.textContent.slice(0,display.textContent.length-1);
        number1=toString(number1).slice(0,number1.length-1)
        number1=Number(number1)
    }
    else if(number2==="" && !(currentOperator==="")){
        display.textContent=display.textContent.slice(0,display.textContent.length-1);
        currentOperator="";
    }
    else {
        display.textContent=display.textContent.slice(0,display.textContent.length-1);
        number2=number2.slice(0,number2.length-1)
    }
    preResultDisplay();
}