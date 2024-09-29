window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    //console.log("Nuevo tamaño de pantalla: " + screenWidth + "x" + screenHeight);
    
    if (screenWidth < 768) {
        document.body.innerHTML = "<h1>Esta página solo está disponible en pantallas grandes (PC).</h1>";
        document.body.style.textAlign = "center";
        document.body.style.padding = "20px";
        document.body.style.fontSize = "20px";
    } else {
        this.location.reload();
    }
});

window.onload = function() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    //console.log("Nuevo tamaño de pantalla: " + screenWidth + "x" + screenHeight);
    
    if (screenWidth < 768) {
        document.body.innerHTML = "<h1>Esta página solo está disponible en pantallas grandes (PC).</h1>";
        document.body.style.textAlign = "center";
        document.body.style.padding = "20px";
        document.body.style.fontSize = "20px";
    } else {
        
    }
};


// Obtener los elementos
const referenceColorBox = document.getElementById('reference-color');
const colorOptionsContainer = document.getElementById('color-options');
const resultDisplay = document.getElementById('result');
const generateNewColorBtn = document.getElementById('generate-new-color-btn');
const daltonismoTypeSelect = document.getElementById('daltonismo-type');

// Generar un color RGB aleatorio
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return { red, green, blue };
}

// Convertir el color RGB a string
function rgbToString({ red, green, blue }) {
    return `rgb(${red}, ${green}, ${blue})`;
}

// Simular daltonismo (ajustar colores según el tipo de daltonismo)
function simulateDaltonismo(color, daltonismoType) {
    let { red, green, blue } = color;

    switch (daltonismoType) {
        case 'protanopia':
            // Simulación de Protanopia: Deficiencia en la percepción del rojo
            red = red * 0.5;
            green = green * 1.1;
            blue = blue * 1.0;
            break;
        case 'deuteranopia':
            // Simulación de Deuteranopia: Deficiencia en la percepción del verde
            red = red * 1.0;
            green = green * 0.5;
            blue = blue * 1.1;
            break;
        case 'tritanopia':
            // Simulación de Tritanopia: Deficiencia en la percepción del azul
            red = red * 1.0;
            green = green * 1.0;
            blue = blue * 0.5;
            break;
        default:
            // Visión normal, no se hace ningún ajuste
            break;
    }

    return { red: Math.min(255, red), green: Math.min(255, green), blue: Math.min(255, blue) };
}

// Función para generar el test de daltonismo
function generateColorTest() {
    // Obtener el tipo de daltonismo seleccionado
    const daltonismoType = daltonismoTypeSelect.value;

    // Generar color de referencia
    const referenceColor = getRandomColor();
    const simulatedReferenceColor = simulateDaltonismo(referenceColor, daltonismoType);
    referenceColorBox.style.backgroundColor = rgbToString(simulatedReferenceColor);

    // Generar varias opciones de colores similares
    const colorOptions = [];
    const correctIndex = Math.floor(Math.random() * 5); // La respuesta correcta estará en una posición aleatoria

    // Limpiar las opciones anteriores
    colorOptionsContainer.innerHTML = '';

    // Generar colores similares
    for (let i = 0; i < 5; i++) {
        let optionColor;

        if (i === correctIndex) {
            optionColor = referenceColor; // La opción correcta
        } else {
            // Crear una variación del color de referencia
            optionColor = {
                red: (referenceColor.red + Math.floor(Math.random() * 100 - 50)) % 256,
                green: (referenceColor.green + Math.floor(Math.random() * 100 - 50)) % 256,
                blue: (referenceColor.blue + Math.floor(Math.random() * 100 - 50)) % 256,
            };
        }

        const simulatedOptionColor = simulateDaltonismo(optionColor, daltonismoType);

        // Crear el elemento de opción
        const colorOptionDiv = document.createElement('div');
        colorOptionDiv.className = 'color-option';
        colorOptionDiv.style.backgroundColor = rgbToString(simulatedOptionColor);
        colorOptionDiv.addEventListener('click', () => checkAnswer(i, correctIndex));

        // Añadir la opción al contenedor
        colorOptionsContainer.appendChild(colorOptionDiv);
    }
}

// Función para verificar si la selección fue correcta
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        resultDisplay.textContent = '¡Correcto! El color coincide con el de referencia.';
        resultDisplay.style.color = 'green';
    } else {
        resultDisplay.textContent = 'Incorrecto. Ese no es el color correcto.';
        resultDisplay.style.color = 'red';
    }
}

// Generar un nuevo color al cargar la página
window.onload = generateColorTest;
generateNewColorBtn.addEventListener('click', generateColorTest);
daltonismoTypeSelect.addEventListener('change', generateColorTest);


document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Bloquea el menú del clic derecho
});

document.addEventListener('keydown', function(event) {
    // Bloquear F12 (Herramientas de desarrollador)
    if (event.key === 'F12') {
        event.preventDefault();
    }

    // Bloquear Ctrl+Shift+I (Inspector en Chrome y otros navegadores)
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
    }

    // Bloquear Ctrl+Shift+J (Consola en Chrome)
    if (event.ctrlKey && event.shiftKey && event.key === 'J') {
        event.preventDefault();
    }

    // Bloquear Ctrl+U (Ver código fuente)
    if (event.ctrlKey && event.key === 'U') {
        event.preventDefault();
    }

    // Bloquear Ctrl+Shift+C (Selector de elementos)
    if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        event.preventDefault();
    }
});