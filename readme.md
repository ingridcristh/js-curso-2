# Desafio 1 ---> 🕒 Hora del Desafío

¡Bienvenidos al proyecto **Hora del Desafío**! 🚀 Este proyecto demuestra el uso de JavaScript para manejar eventos y manipular el DOM de una manera interactiva y divertida.

## 📋 Descripción

Este proyecto incluye una página web simple con botones que desencadenan diversas acciones utilizando JavaScript. Las funcionalidades incluyen:

- Cambiar el contenido del encabezado.
- Mostrar mensajes en la consola.
- Solicitar y mostrar información del usuario mediante `prompt` y `alert`.
- Realizar cálculos básicos con entrada del usuario.

## 🛠️ Estructura del Proyecto

- **index.html**: Contiene la estructura básica de la página.
- **style.css**: Estilos para una apariencia moderna y limpia.
- **app.js**: Funcionalidades JavaScript para la interacción del usuario.

## 🌟 Funcionalidades

1. **Cambio de Encabezado**: 
   - Cambia el contenido del encabezado a "Hora del Desafío" al cargar la página.
   - 🖊️ `let titulo = document.querySelector('h1').textContent = "Hora del Desafío";`

2. **Botón Console**: 
   - Muestra un mensaje en la consola cuando se hace clic en el botón.
   - 🖱️ `alert("El boton fue clicado");`

3. **Botón Alert**: 
   - Muestra una alerta con el mensaje "Yo amo JS".
   - 📢 `alert("Yo amo JS");`

4. **Botón Prompt**: 
   - Solicita el nombre de una ciudad de Brasil y muestra una alerta con el mensaje: "Estuve en {ciudad} y me acordé de ti".
   - 🌆 `let ciudad = prompt("Nombre de una ciudad de Brasil:"); alert("Estuve en " + ciudad + " y me acordé de ti");`

5. **Botón Suma**: 
   - Solicita dos números al usuario y muestra la suma en una alerta.
   - ➕ `let num1 = parseFloat(prompt("Ingresa el primer número:")); let num2 = parseFloat(prompt("Ingresa el segundo número:")); alert("El resultado de la suma es: " + (num1 + num2));`

## 🧩 Cómo Empezar

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/hora-del-desafio.git
    ```

2. **Navega a la carpeta del proyecto**:
    ```bash
    cd hora-del-desafio
    ```

3. **Abre el archivo `index.html` en tu navegador** y prueba las funcionalidades.

## 📂 Estructura de Archivos

js-curso-2-main/
│
├── index.html
├── style.css
└── app.js


## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b mejora-nueva`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega una mejora nueva'`).
4. Haz un push a la rama (`git push origin mejora-nueva`).
5. Abre un Pull Request.

## Interfaz de usuario
La interfaz de usuario incluye botones que, al ser presionados, ejecutan las funciones descritas anteriormente. Cada botón está asociado con una función específica para realizar las operaciones mencionadas.
![Interfaz](https://github.com/user-attachments/assets/50807890-9978-41e9-a617-1fc9bf10a85b)

## 📧 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **Silvia Gonzalez**
- 📧 devsoftwaregonzalez@gmail.com
- 🌐 LinkedIn: https://www.linkedin.com/in/silvia-gonzalez-82414037/


¡Gracias por visitar el proyecto **Hora del Desafío**! 😊

