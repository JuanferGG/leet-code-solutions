//? Q2. Evaluate Reverse Polish Notation
//? You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
//? Evaluate the expression. Return an integer that represents the value of the expression.

//? Note that:
//? The valid operators are '+', '-', '*', and '/'.
//? Each operand may be an integer or another expression.
//? The division between two integers always truncates toward zero.
//? There will not be any division by zero.
//? The input represents a valid arithmetic expression in a reverse polish notation.
//? The answer and all the intermediate calculations can be represented in a 32-bit integer.

//? Example 1:
//? Input: tokens = ["2","1","+","3","*"]
//? Output: 9
//? Explanation: ((2 + 1) * 3) = 9

//? Example 2:
//? Input: tokens = ["4","13","5","/","+"]
//? Output: 6
//? Explanation: (4 + (13 / 5)) = 6

//? Example 3:
//? Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
//? Output: 22
//? Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
//? = ((10 * (6 / (12 * -11))) + 17) + 5
//? = ((10 * (6 / -132)) + 17) + 5
//? = ((10 * 0) + 17) + 5
//? = (0 + 17) + 5
//? = 17 + 5
//? = 22

function sum(a: number, b: number): number {
  return a + b;
}

function res(a: number, b: number): number {
  return a - b;
}

function multi(a: number, b: number): number {
  return a * b;
}

function divi(a: number, b: number): number {
  return Math.trunc(a / b);
}

const operators = new Set(["+", "-", "*", "/"]);

function evalRPN(tokens: string[]): number {
  const pila: number[] = [];

  for (const token of tokens) {
    if (operators.has(token)) {
      //! sacar b, luego a
      const b = pila.pop() as number;
      const a = pila.pop() as number;
      //! calcular según el operador
      //! y lo agregamos a al final de la pila
      switch (token) {
        case "+":
          pila.push(sum(a, b));
          break;
        case "-":
          pila.push(res(a, b));
          break;
        case "*":
          pila.push(multi(a, b));
          break;
        case "/":
            pila.push(divi(a, b))
            break
      }
    } else {
      pila.push(Number(token));
    }
  }

  return pila[0]
}

const tokens_1 = ["2", "1", "+", "3", "*"];
console.log(evalRPN(tokens_1));

const tokens_2 = ["4","13","5","/","+"]
console.log(evalRPN(tokens_2));

const tokens_3 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
console.log(evalRPN(tokens_3));