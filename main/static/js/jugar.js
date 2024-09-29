// Obtener los elementos
const colorBoxRandom = document.getElementById('color-box-random');
const randomColorBtn = document.getElementById('random-color-btn');
const colorBoxRgb = document.getElementById('color-box-rgb');
const openMenuBtn = document.getElementById('open-menu-btn');
const colorMenu = document.getElementById('color-menu');
const calculateAccuracyBtn = document.getElementById('calculate-accuracy-btn');
const accuracyResult = document.getElementById('accuracy-result');

// Sliders del menú RGB
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

// Variables para almacenar los colores
let randomColor = {};
let rgbColor = {};

// Función para generar un color RGB aleatorio
function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    randomColor = { red, green, blue };
    const color = `rgb(${red}, ${green}, ${blue})`;
    colorBoxRandom.style.backgroundColor = color;
}

// Función para actualizar el color basado en los sliders
function updateColorFromSliders() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    rgbColor = { red: parseInt(red), green: parseInt(green), blue: parseInt(blue) };
    const color = `rgb(${red}, ${green}, ${blue})`;
    colorBoxRgb.style.backgroundColor = color;
    colorBoxRgb.textContent = `RGB: ${red}, ${green}, ${blue}`;
}

// Mostrar u ocultar el menú de colores
function toggleColorMenu() {
    colorMenu.classList.toggle('hidden');
}

// Función para calcular la precisión entre los dos colores
function calculateAccuracy() {
    const redDiff = Math.abs(randomColor.red - rgbColor.red);
    const greenDiff = Math.abs(randomColor.green - rgbColor.green);
    const blueDiff = Math.abs(randomColor.blue - rgbColor.blue);

    const totalDiff = redDiff + greenDiff + blueDiff;
    const maxDiff = 3 * 255;

    const accuracy = ((maxDiff - totalDiff) / maxDiff) * 100;
    accuracyResult.textContent = `Precisión: ${accuracy.toFixed(2)}%`;

    window.onload();
}

// Event listeners
randomColorBtn.addEventListener('click', generateRandomColor);
openMenuBtn.addEventListener('click', toggleColorMenu);
calculateAccuracyBtn.addEventListener('click', calculateAccuracy);

// Event listeners para los sliders
redSlider.addEventListener('input', updateColorFromSliders);
greenSlider.addEventListener('input', updateColorFromSliders);
blueSlider.addEventListener('input', updateColorFromSliders);

// Generar un color aleatorio al cargar la página
window.onload = generateRandomColor;


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