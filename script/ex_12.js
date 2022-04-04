window.onload = () => {

    localStorage.setItem('ex12_img', 'https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png');
    let img = document.createElement('img');
    img.src = localStorage.getItem('ex12_img');
    img.style.width = "654px";
    
    let element = document.getElementsByTagName('footer')[0];
    element.getElementsByTagName('div')[0].appendChild(img);

}