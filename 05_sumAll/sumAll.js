const sumAll = function(start, end) {
    let firstNumber = start;
    let secondNumber = end;
    let sumTotal = 0;
    if ( firstNumber < 0 || secondNumber < 0 || typeof(firstNumber, secondNumber) != "number" ) return "ERROR";
    else if ( firstNumber > secondNumber){
        let counter = firstNumber + secondNumber;
        sumTotal = (firstNumber * counter) / 2;
        return sumTotal;
    } else if ( firstNumber < secondNumber){
        let counter = secondNumber + firstNumber;
        sumTotal = (secondNumber * counter) / 2;
        return sumTotal;
    }
};

// Do not edit below this line
module.exports = sumAll;
