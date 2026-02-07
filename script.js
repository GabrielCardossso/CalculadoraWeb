let display = document.getElementById("display")

function adicionar(valor) {
    display.value += valor;
}

function calcular() {
    display.value = eval(display.value); // “Pegue o texto que está no visor, 
    // calcule isso como código JavaScript e coloque o resultado de volta no visor.”
}

function limpar() {
    display.value = "";
}