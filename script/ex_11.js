window.onload = () => 
{
    var element = document.getElementsByTagName('footer')[0];
    element.getElementsByTagName('div')[0].getElementsByTagName('a')[0].addEventListener('click', function (cname = "acceptsCookies", cvalue, exdays) {
        
        cname = "acceptsCookies";
        cvalue = 'true';
        exdays = 1;

        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        document.location.reload(true);
    })
    
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        
        return null;

    }
    getCookie("acceptsCookies");

    function doSomething() {
        var myCookie = getCookie("acceptsCookies");

        if (myCookie !== null) {

            let btn = document.createElement('button');
            document.getElementsByTagName('section')[0].innerHTML = "";

           document.getElementsByTagName('section')[0].appendChild(btn);
           btn.innerHTML="Delete cookie";
           btn.onclick = function (cname = "acceptsCookies", cvalue, exdays) {

            var element = document.getElementsByTagName('footer')[0];
            element.getElementsByTagName('div')[0].innerHTML = "";
            cname = "acceptsCookies";
            cvalue = 'true';
            exdays = -50000;
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            document.getElementsByTagName('section')[0].innerHTML = "<p>When clicking on the OK link inside the white box area, a cookie <strong>acceptsCookies</strong> is created. It expires after a day.</p><p>The cookie has the value <strong>true</strong>.</p><p> While the cookie is set and its value is <strong>true</strong>, the first white box area must be empty. You will also create another white box area with a button Delete cookie. When clicked it clears the cookie, the second white box area vanish and the first one is back to its original state.</p>";
            }
        }      
    }
     doSomething();
}  
 
