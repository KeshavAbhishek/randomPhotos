function setImageFn(){
    var widthToBe = parseInt(window.innerWidth*(parseInt(document.getElementById('widthInputEntry').value))/100);
    var heightToBe = parseInt(window.innerHeight*(parseInt(document.getElementById('heightInputEntry').value))/100);

    document.getElementById('mainFrame').style.backgroundImage=`url(https://picsum.photos/${widthToBe}/${heightToBe})`;

    document.getElementById('aboveContainer').style.display='flex';

    document.getElementById('mainFrame').style.width=`${widthToBe}px`;
    document.getElementById('mainFrame').style.height=`${heightToBe}px`;

    document.getElementById('widthHeight').innerHTML=`Width: ${widthToBe}px, Height: ${heightToBe}px`;

    setTimeout(() => {
        document.getElementById('aboveContainer').style.display='none';
    }, 1000);

}

window.addEventListener('resize',()=>{
    setImageFn()
})