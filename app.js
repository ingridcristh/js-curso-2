// Cambiar el contenido de la etiqueta h1
let titulo = document.querySelector('h1').textContent = "Hora del Desafío";

// Función para mostrar mensaje en la consola
function consoleFunction(){
    alert("El boton fue clicado");
};


// Función para pedir el nombre de una ciudad y mostrar una alerta
function promptFunction() {
    let ciudad = prompt("Nombre de una ciudad de Brasil:");
    if (ciudad) {
        alert(`Estuve en ${ciudad} y me acordé de ti`);
    }
};


// Función para mostrar una alerta con el mensaje "Yo amo JS"
function alertFunction(){
    alert("Yo amo JS");
};

// Función para pedir 2 números y mostrar la suma en una alerta
function sumaFunction(){
    let num1 = parseFloat(prompt("Ingresa el primer numero:"));
    let num2 = parseFloat(prompt("Ingresa el segundo numero:"));
    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`El resultado de la suma es: ${num1 + num2}`);
    } else {
        alert("Por favor ingresa números válidos.");
    }
};
