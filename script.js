const display = document.getElementById("display");
let primeiroNumero = "";
let operador = "";
let segundoNumero = "";

function adicionarNumero(num) {
    if (operador === "") {
        primeiroNumero += num;
        display.value = primeiroNumero;
    } else {
        segundoNumero += num;
        display.value = segundoNumero;
    }
}

function escolherOperador(op) {
    if (primeiroNumero === "") return;
    operador = op;
}

function calcular() {
    let n1 = Number(primeiroNumero);
    let n2 = Number(segundoNumero);
    let resultado = 0;

    if (operador === "+") {
        resultado = n1 + n2
    } else if (operador === "-") {
        resultado = n1 - n2
    } else if (operador === "*") {
        resultado = n1 * n2
    } else if (operador === "/") {
        resultado = n1 / n2
    }

    display.value = resultado;

    // reset pra continuar calculando
    primeiroNumero = resultado.toString();
    segundoNumero = "";
    operador = "";
}

function limpar() {
    primeiroNumero = "";
    segundoNumero = "";
    operador = "";
    display.value = "";
}