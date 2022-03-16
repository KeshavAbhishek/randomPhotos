function setImageFn(){
    var widthToBe = parseInt(window.innerWidth*(parseInt(document.getElementById('widthInputEntry').value))/100);
    var heightToBe = parseInt(window.innerHeight*(parseInt(document.getElementById('heightInputEntry').value))/100);

    document.getElementById('mainFrame').style.background=`url(https://picsum.photos/${widthToBe}/${heightToBe})`;

    document.getElementById('mainFrame').style.width=`${widthToBe}px`;
    document.getElementById('mainFrame').style.height=`${heightToBe}px`;
}

window.addEventListener('resize',()=>{
    setImageFn()
})