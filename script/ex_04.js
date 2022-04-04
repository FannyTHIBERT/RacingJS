window.onload = () => {
    let keysPressed = "";
    document.addEventListener('keypress', (event) => {
        if (keysPressed.length < 42) {
            keysPressed += (event.key)
            var element = document.getElementsByTagName('footer')[0];
            element.getElementsByTagName('div')[0].innerHTML = keysPressed;
        }
    });
};

