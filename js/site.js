function add(){

    let numberOne = document.getElementById('firstNumber').value;
    let numberTwo = document.getElementById('secondNumber').value;
    
    numberOne= parseFloat(numberOne);
    numberTwo= parseFloat(numberTwo);

    let sum = numberOne + numberTwo;

    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = sum
}


function subtract(){
    let numberOne = document.getElementById('firstNumber').value;
    let numberTwo = document.getElementById('secondNumber').value;
    
    numberOne= parseFloat(numberOne);
    numberTwo= parseFloat(numberTwo);

    let sum = numberOne - numberTwo;

    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = sum

}

function divide(){
    let numberOne = document.getElementById('firstNumber').value;
    let numberTwo = document.getElementById('secondNumber').value;
    
    numberOne= parseFloat(numberOne);
    numberTwo= parseFloat(numberTwo);

    let sum = numberOne / numberTwo;

    if (numberTwo == 0){
        sum = 'Cannot divide by zero'
    }

    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = sum

    

}

function multiply(){
    let numberOne = document.getElementById('firstNumber').value;
    let numberTwo = document.getElementById('secondNumber').value;
    
    numberOne= parseFloat(numberOne);
    numberTwo= parseFloat(numberTwo);

    let sum = numberOne * numberTwo;

    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = sum

}

function sumAll(){
    let numberString = document.getElementById('numberSeries').value;
    //numberString = '12345'
    
    let numberArr = numberString.split('');
    // numberArr = ['1', '2', '3', '4']\\

    let sum =0;

    for (let i = 0; i < numberArr.length; i = i + 1 ) {
        

        let currentNumber = numberArr[i];
        // currentNumber = '0'
    
        currentNumber = parseInt(currentNumber)
        // currentNumber = 1

        sum = sum + currentNumber;
    }

    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = sum;
}

function quotientAll() { 
    // the same as sumAll, but *
    // product

    let numberString = document.getElementById('numberSeries').value;
    //numberString = '12345'
    
    let numberArr = numberString.split('');
    // numberArr = ['1', '2', '3', '4']\\

    let quotient =1;

    for (let i = 0; i < numberArr.length; i = i + 1 ) {
        

        let currentNumber = numberArr[i];
        // currentNumber = '0'
    
        currentNumber = parseInt(currentNumber)
        // currentNumber = 1

        quotient = quotient * currentNumber;
    }

    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = quotient;
}
function minimum() { 
    // check each number and see if it's smaller than
    // the smallest number I've found so far


    let numberString = document.getElementById('numberSeries').value;
    let numberArr = numberString.split('');

    let min = parseInt(numberArr[0]);

    for (let i = 1; i < numberArr.length; i = i + 1 ) {
        let currentNumber = numberArr[i];
        let number = parseInt(currentNumber);
      

        if (number < min) {
            min = number;
        }
    }

    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = min;

    
}
function maximum() {
    // check each number and see if it's larger than
    // the largest number I've found so far


    let numberString = document.getElementById('numberSeries').value;
    let numberArr = numberString.split('');

    let max = parseInt(numberArr[0]);

    for (let i = 0; i < numberArr.length; i = i + 1 ) {
        let currentNumber = numberArr[i];
        let number = parseInt(currentNumber);
      

        if (number > max) {
            max = number;
        }
    }

    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = max;
}
function average() { 
    
    let numberString = document.getElementById('numberSeries').value;
    let numberArr = numberString.split('');

    let sum = 0;

    for (let i = 0; i < numberArr.length; i = i + 1) {
        let currentNumber = numberArr[i];
        currentNumber = parseInt(currentNumber)
      
        sum = sum + currentNumber;
    } 
    
    let avg = sum / numberArr.length;

    let resultDiv = document.getElementById('results');
    resultDiv.innerHTML = avg;
}