var num1 = 0;
var num2 = 0;
var operacion = '';

function setearValor(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    document.getElementById('id-display').innerText = valor;
}

function setearValorConcateando(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    document.getElementById('id-display').innerText = valorActual + valor;
}

function recibirValor(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    if (valorActual === '0' || valorActual === 'C') {
        document.getElementById('id-display').innerText = valor;
    } else {
        document.getElementById('id-display').innerText = valorActual + valor;
    }
}

function recibirOperacion(op) {     
    num1 = parseFloat(document.getElementById('id-display').innerText);
    operacion = op;
    document.getElementById('id-display').innerText = '';
}

function igual() {
    num2 = parseFloat(document.getElementById('id-display').innerText);
    let valorFinal;

    switch (operacion) {
        case '+':
            valorFinal = num1 + num2;
            break;
        case '-':
            valorFinal = num1 - num2;
            break;
        case 'X':
            valorFinal = num1 * num2;
            break;
        case '/':
            valorFinal = num1 / num2;
            break;
        default:
            valorFinal = num2;
            break;
    }
    setearValor(valorFinal);
    num1 = valorFinal;  // Para permitir continuar con cálculos adicionales
}

function limpiar() {
    num1 = 0;
    num2 = 0;
    operacion = '';
    setearValor('0');
}
