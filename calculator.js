
const num1 = parseFloat(prompt('Enter Num1: '));
const operator = prompt('Enter Operator to use: (+, -, *, /)');
const num2 = parseFloat(prompt('Enter Num2: '));

let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('Wrong input! Refresh and try again.');
}else{
    if(operator == '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '*'){
        result = num1 * num2;
    }else if(operator == '/'){
        result = num1 / num2;
    }
    alert(num1 + ' '+ operator + ' '+ num2 + ' = ' + result)
}
