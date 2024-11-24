var num1 = 0;
var num2 = 0;
var operacion = '';
var expresion = ''; // Para mantener la cadena de operaciones

function setearValor(valor) {
    document.getElementById('id-display').innerText = valor;
    expresion = valor; // Reiniciar la expresión
}

function setearValorConcatenando(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    document.getElementById('id-display').innerText = valorActual + valor;
    expresion += valor; // Concatenar en la expresión
}

function recibirValor(valor) {
    let valorActual = document.getElementById('id-display').innerText;
    if (valorActual === '0' || valorActual === 'C') {
        document.getElementById('id-display').innerText = valor;
        expresion = valor; // Iniciar nueva expresión
    } else {
        document.getElementById('id-display').innerText = valorActual + valor;
        expresion += valor; // Concatenar en la expresión
    }
}

function recibirOperacion(op) {     
    let valorActual = document.getElementById('id-display').innerText;

    // Si la última operación no ha sido finalizada, completar la expresión
    if (expresion && !"+-X/".includes(expresion[expresion.length - 1])) {
        expresion += op; // Añadir el operador a la expresión
    }
    document.getElementById('id-display').innerText = expresion;
    operacion = op; // Guardar la operación actual
}

function igual() {
    try {
        // Reemplazar operadores para que sean compatibles con `eval`
        let evaluacion = expresion.replace(/X/g, '*');
        let resultado = eval(evaluacion); // Calcular el resultado
        setearValor(resultado);
        expresion = resultado.toString(); // Reiniciar la expresión con el resultado
    } catch (e) {
        setearValor('Error'); // Mostrar error si ocurre un problema en la evaluación
        expresion = ''; // Reiniciar la expresión en caso de error
    }
}

function limpiar() {
    num1 = 0;
    num2 = 0;
    operacion = '';
    expresion = ''; // Reiniciar la expresión
    setearValor('0'); // Reiniciar el display a cero
}
