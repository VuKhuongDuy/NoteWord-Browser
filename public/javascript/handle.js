function clickSave(){
    let txt = document.getElementById('note').value;
    let btnSave = document.getElementById('btn-save');

    localStorage.setItem('note',txt);
    btnSave.style.backgroundColor = "#ffffff";
    alert('Lưu thành công!');
}

function loadText(){
    var rad = Math.random();
    var index = Number.parseInt(rad*3)+1
    document.body.style.backgroundImage = "url('../img/"+index+".jpg')";
    let txt = localStorage.getItem('note') || '';
    document.getElementById('note').value = txt;
}

function textChange(){
    let btnSave = document.getElementById('btn-save');
    btnSave.style.backgroundColor = "#ff9900";
}