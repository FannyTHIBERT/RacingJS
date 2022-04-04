window.onload = () => {
    let clic = 0;
    document.getElementsByTagName('footer')[0].addEventListener('click', function () {
        clic++
        var element = document.getElementsByTagName('footer')[0];
        element.getElementsByTagName('div')[0].innerHTML = "Number of clicks: (" + clic + ")";
    });
};
