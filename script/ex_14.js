window.onload = () => {
    
             
    document.getElementsByTagName('button')[0].onclick = () => 
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.blob())
            .then(blobFile => 
            {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blobFile);
                link.download="text.txt";
                link.click();
            })
    }        
   
}