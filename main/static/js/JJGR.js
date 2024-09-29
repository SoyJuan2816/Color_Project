function typeCommand(element, command, delay = 100) {
    let i = 0;
    return new Promise((resolve) => {
        const interval = setInterval(() => {
            element.textContent += command[i];
            i++;
            if (i === command.length) {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

async function startTyping() {
    const command1 = document.getElementById('command1');
    const output1 = document.getElementById('output1');
    const newPrompt1 = document.getElementById('newPrompt1');
    const command2 = document.getElementById('command2');
    const output2 = document.getElementById('output2');
    const newPrompt2 = document.getElementById('newPrompt2');

    await typeCommand(command1, 'echo "Bienvenido a mi portafolio web"');
    setTimeout(() => {
        output1.style.display = 'block';
    }, 500);

    await new Promise(resolve => setTimeout(resolve, 550));

    newPrompt1.style.display = 'flex';

    await typeCommand(command2, 'cat informacion.txt');
    setTimeout(() => {
        output2.style.display = 'block';
    }, 500);

    await new Promise(resolve => setTimeout(resolve, 550));

    newPrompt2.style.display = 'flex';
}
window.onload = startTyping;