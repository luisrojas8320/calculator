document.addEventListener('DOMContentLoaded', function () {
    const pantalla = document.getElementById('pantalla');
    let operacionActual = '';
    let operacionAnterior = '';
    let operacion = null;

    // Agrega evento a cada botón
    document.querySelectorAll('#calculadora .btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === '+') {
                elegirOperacion('+');
            } else if (this.textContent === '-') {
                elegirOperacion('-');
            } else if (this.textContent === '*') {
                elegirOperacion('*');
            } else if (this.textContent === '/') {
                elegirOperacion('/');
            } else if (this.textContent === '=') {
                calcular();
            } else {
                agregarNumero(this.textContent);
            }
        });
    });

    function agregarNumero(numero) {
        operacionActual = operacionActual.toString() + numero.toString();
        actualizarPantalla();
    }

    function elegirOperacion(op) {
        if (operacionActual === '') return;
        if (operacionAnterior !== '') {
            calcular();
        }
        operacion = op.toString();
        operacionAnterior = operacionActual;
        operacionActual = '';
    }

    function calcular() {
        let calculo;
        const anterior = parseFloat(operacionAnterior);
        const actual = parseFloat(operacionActual);
        if (isNaN(anterior) || isNaN(actual)) return;

        switch (operacion) {
            case '+':
                calculo = anterior + actual;
                break;
            case '-':
                calculo = anterior - actual;
                break;
            case '*':
                calculo = anterior * actual;
                break;
            case '/':
                calculo = anterior / actual;
                break;
            default:
                return;
        }
        operacionActual = calculo;
        operacion = undefined;
        operacionAnterior = '';
        actualizarPantalla();
    }

    function actualizarPantalla() {
        pantalla.textContent = operacionActual;
    }
});
