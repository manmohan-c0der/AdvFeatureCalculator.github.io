let string = "";
function fact(n) {
    if (n < 0) {
        document.write("Please enter positive number")
    }
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}
function gamma(n) {
    if (n < 0) {
        document.write("Please enter positive number")
    }
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}function fib(n) {
    if (n <0) {
        document.write("Please enter positive number")
    }
    if (n<=1) {
        return n;
    }
    else {
        return fib(n-1)+fib(n-2);
    }
}
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'Ans') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'Del') {
            let n = string.length;
            string = string.substring(0, n - 1)
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '⫪') {
            string = string + Math.PI;
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '√') {
            string = Math.sqrt(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'Sign') {
            string = string + Math.sign(string);
            let n = string.length;
            string = string.substring(n - 2, n);
            console.log(string);


            if (string == -1) {
                string = "Negative Number";
            }
            else {
                string = "Positive Number";
            }
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'Pow') {
            let n = string.length;
            let str = string.substring(n - 2, n - 1);
            let str1 = string.substring(n - 1, n);
            string = Math.pow(str, str1);
            document.querySelector('input').value = string;


        }
        else if (e.target.innerHTML == 'floor') {
            string = Math.floor(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'round') {
            string = Math.round(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'ceil') {
            string = Math.ceil(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'abs') {
            string = Math.abs(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'log') {
            string = Math.log(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'sin') {
            string = Math.sin(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'cos') {
            string = Math.cos(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'tan') {
            string = Math.tan(string);
            document.querySelector('input').value = string;
        }
         else if (e.target.innerHTML == 'n!') {
            string =fact(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '⌈n') {
            string =gamma((string)-1);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'fib') {
            string =fib(string);
            document.querySelector('input').value = string;
        }else if (e.target.innerHTML == 'e') {
            let n=2.718281828446;
            string =n;
            document.querySelector('input').value = string;
        }

        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})