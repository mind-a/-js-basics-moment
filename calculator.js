const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a,b){
        return a - b;
    },
    multiply: function(a,b){
        return a * b;
    },
    divide: function(a,b){
        return a / b;
    },
    power: function(a,b){
        return a ** b;
    },
    remainder: function(a,b){
        return a % b;
    }
}

const plus = calculator.plus(5,5);
const minus = calculator.minus(5, 5);
const multiply = calculator.multiply(5, 5);
const divide = calculator.divide(5, 5);
const power = calculator.power(5,5);
const remainder = calculator.remainder(5,5);
console.log(plus, minus, multiply, divide, power, remainder);