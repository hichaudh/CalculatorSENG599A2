const keys = document.querySelectorAll('[data-input]')
var operators = ['+', '-', 'x', '/']
var decimalAdded = false
var prevVal = document.querySelector('.previous-operand')

for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
      var input = document.querySelector('.current-operand');
      var inputVal = input.innerText
      var btnVal = this.innerText
 
    if (btnVal === 'AC') {
        input.innerText = ''
        prevVal.innerText = ''
        decimalAdded = false
    }
    else if (btnVal === 'CE'){
          input.innerText = input.innerText.substring(0, input.innerText.length - 1)
    }

    else if (btnVal === '=') {
        var equation = inputVal
        var lastChar = equation[equation.length - 1]

        equation = equation.replace(/x/g, '*')
  
        if (equation)
          input.innerText = eval(equation)
          prevVal.innerText = equation
  
        decimalAdded = false;
    }
    else if (operators.indexOf(btnVal) > -1) {
        var lastChar = inputVal[inputVal.length - 1]

        if (inputVal != '' && operators.indexOf(lastChar) === -1)
          input.innerText += btnVal

        else if (inputVal === '' && btnVal === '-')
          input.InnerText += btnVal
  
        if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
          input.innerText = inputVal.replace(/.$/, btnVal)
        }
        decimalAdded = false
    }
    else if (btnVal === '.') {
        if (!decimalAdded) {
          input.innerText += btnVal
          decimalAdded = true
        }
    }
    else {
        input.innerText += btnVal
      }
      e.preventDefault();
    }
  }