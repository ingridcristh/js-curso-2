let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';
<button onclick="mostarMensajeEnLaConsola()" class="button">Console</button>
function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')
}
<button onclick="mostarAlerta()" class="button">Alert</button>
function mostarAlerta(){
    alert("AMO JS");
} 
 <button onclick="sumaDosNumeros()" class="button">Suma</button>
function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert('${primerNumero} + ${segunNumero} = ${resultado}')
}

