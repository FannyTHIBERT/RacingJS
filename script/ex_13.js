window.onload = () => {

    let img = document.createElement('img');
    img.src = localStorage.getItem('ex12_img');
    let element = document.getElementsByTagName('footer')[0];
    element.getElementsByTagName('div')[0].appendChild(img);

    img.style.width = "654px";

    img.addEventListener('mouseenter', ()=>{
        img.style.transitionProperty = "width";
        img.style.transitionDuration = "20s"
        img.style.width = "1px";
    })
    
    img.addEventListener('mouseout', ()=>{
        img.style.width = "654px";
    })
    img.addEventListener('click',()=>{
        localStorage.removeItem('ex12_img');
        document.location.reload(true);
    })

    img.addEventListener('click', () => {
        localStorage.removeItem('ex12_img');
        element.getElementsByTagName('div')[0].removeChild(img)

    })

    element.getElementsByTagName('div')[0].addEventListener('mouseout', () => {
        img.style.transitionProperty = "width";
        img.style.transitionDuration = "1s"
        img.style.width = "654px";
    })   
 }