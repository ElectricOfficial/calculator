function sin() {
    document.calculator.result.value = Math.sin(document.calculator.result.value);
}

function cos() {
    document.calculator.result.value = Math.cos(document.calculator.result.value);
}

function tan() {
    document.calculator.result.value = Math.tan(document.calculator.result.value);
}

function C() {
    var a = document.calculator.result.value;
    document.calculator.result.value = a.substr(0, a.length - 1);
}

function square() {
    document.calculator.result.value = Math.pow(document.calculator.result.value, 2);
}

function cubed() {
    document.calculator.result.value = Math.pow(document.calculator.result.value, 3);
}

function sqrt() {
    document.calculator.result.value = Math.pow(document.calculator.result.value, 1 / 2);
}

function cbrt() {
    document.calculator.result.value = Math.pow(document.calculator.result.value, 1 / 3);
}

function number(value) {
    document.calculator.result.value += value;
}

function AC() {
    document.calculator.result.value = " ";
}

function equal() {
    document.calculator.result.value = eval(document.calculator.result.value);
}