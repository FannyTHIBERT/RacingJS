window.onload = () => {
    document.getElementsByTagName('footer')[0].addEventListener('click', function(){
        var name = prompt("What's your name ?");
        while (name.length == 0) {
            name = prompt("What's your name ?");
        }
        confirm('Are you sure ' + name + ' is your name ?' );
        alert ('Hello ' + name + ' !');
        var element = document.getElementsByTagName('footer')[0];
        element.getElementsByTagName('div')[0].innerHTML = "Hello " + name + " !";
    });
};