const pantalla = document.getElementById('pantalla');

// Permite solo ingresar valores válidos desde botones
function ingresarValor(valor) {
    if (validarEntrada(valor)) {
        pantalla.value += valor;
    }
}

// Limpia la pantalla
function limpiar() {
    pantalla.value = '';
}

// Evalúa la expresión con validaciones
function calcular() {
    try {
        if (/\/0(?![0-9])/.test(pantalla.value)) {
            pantalla.value = 'Error: División por 0';
            return;
        }

        const resultado = eval(pantalla.value);

        if (!isFinite(resultado)) {
            pantalla.value = 'Error: Resultado inválido';
        } else {
            pantalla.value = resultado;
        }
    } catch {
        pantalla.value = 'Error de sintaxis';
    }
}

// Solo permite números, punto y operadores
function validarEntrada(valor) {
    const permitido = /^[0-9+\-*/.]+$/;
    return permitido.test(valor);
}

// Bloquea teclas no válidas
document.addEventListener('keydown', function (e) {
    e.preventDefault();
    const tecla = e.key;

    if (tecla === 'Enter') {
        calcular();
    } else if (tecla === 'Backspace') {
        pantalla.value = pantalla.value.slice(0, -1);
    } else if (tecla === 'Escape') {
        limpiar();
    } else if (validarEntrada(tecla)) {
        pantalla.value += tecla;
    }
});

function toggleModo() {
    document.body.classList.toggle('dark');

    const boton = document.getElementById('modoToggle');
    if (document.body.classList.contains('dark')) {
        boton.textContent = 'Modo Claro';
    } else {
        boton.textContent = 'Modo Nocturno';
    }
}

