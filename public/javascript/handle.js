function clickSave(){
    let txt = document.getElementById('note').value;
    localStorage.setItem('note',txt);
}

function loadText(){
    var rad = Math.random();
    var index = Number.parseInt(rad*3)+1
    document.body.style.backgroundImage = "url('../img/"+index+".jpg')";
    let txt = localStorage.getItem('note') || '';
    document.getElementById('note').value = txt;
}