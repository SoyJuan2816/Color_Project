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