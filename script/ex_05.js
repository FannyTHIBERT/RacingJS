window.addEventListener('load', () => {
    const button = document.getElementsByTagName('button')[0];
    const paragraph = document.getElementsByTagName('p');
    const startingFontSize = window.getComputedStyle(document.body, null)
      .getPropertyValue('font-size')
      .slice(0, 2) * 1;
    let clicks = 0;
  
    button.addEventListener('click', () => {
      clicks++;
  
      const fontSize = `${startingFontSize + clicks}px`;
      document.body.style.fontSize = fontSize;
    });

    const button2 = document.getElementsByTagName('button')[1];
    const paragraph2 = document.getElementsByTagName('p');
    const startingFontSize2 = window.getComputedStyle(document.body, null)
      .getPropertyValue('font-size')
      .slice(0, 2) * 1;
    let click = 0;
  
    button2.addEventListener('click', () => {
      click--;
  
      const fontSize2 = `${startingFontSize2 - (- click)}px`;
      document.body.style.fontSize = fontSize2;
    });

    let selectElement = document.getElementsByTagName('select')[0];
     
        selectElement.addEventListener('click', function (){
            var value =  selectElement.options[selectElement.selectedIndex].value; ;
            console.log(value)
            document.body.style.backgroundColor = value;
        })
  });