window.onload = () => {
  
    var footer = document.getElementsByTagName("footer")[0];
    var div = footer.getElementsByTagName("div")[0];
    var coord = footer.getElementsByTagName("div")[1];
    var canvas = div.getElementsByTagName("canvas")[0];
   
    canvas.onmousedown = function(){
        this.setAttribute('draggable','true');
        pressed = true;
    }
    //getcanvas
    document.onmouseup = function(){
        pressed = false;
    }
    canvas.onmouseemove = function(event){
        if(pressed){
        coord.innerText = "New coordinates => {x:" + event.pageX + ", y:" + event.pageY +"}";
        }
    }
    canvas.ondragstart = function(event){
        event.dataTransfer.setData("text", event.target.id);
    
    }
    
    //getcanvas
    div.ondragover = function(event){
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        var offsetX = 0;
        var offsetY = 0;
        canvas.style.position = 'static';
        canvas.style.left = event.pageX+offsetX+"px";
        canvas.style.top = event.pageY+offsetY+"px";
        coord.innerText = "New coordinates => {x:"+event.pageX+", y:"+ event.pageY+"}";
    }
    
    div.ondrop = function(event){
        //e.preventDefault();
        var data = event.dataTransfer.getData("text");
        var offsetX = 0;
        var offsetY = 0;
        canvas.style.position = 'static';
        if(boxed(event.pageX+offsetX,event.pageY+offsetY)){
        canvas.style.left = event.pageX+offsetX+"px";
        canvas.style.top = event.pageY+offsetY+"px";
        }
    }
   


    }
   

    /*let coord = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[1];

        coord.innerHTML = 'New coordinates => {x:' + x + ', y:' + y + '}';*/
     
  
