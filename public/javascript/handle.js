function clickSave(){
    let txt = document.getElementById('note').value;
    let btnSave = document.getElementById('btn-save');

    localStorage.setItem('note',txt);
    btnSave.style.backgroundColor = "#ffffff";
    alert('Lưu thành công!');
}

function loadText(){
    let txt = localStorage.getItem('note') || '';
    if(!localStorage.getItem('img'))
        localStorage.setItem('img','https://www.besthealthmag.ca/wp-content/uploads/sites/16/2018/04/Run-club-woman-running.jpg')
    let url = localStorage.getItem('img');
    document.body.style.backgroundImage = "url('"+url+"')"
    document.getElementById('note').value = txt;
}

function textChange(){
    let btnSave = document.getElementById('btn-save');
    btnSave.style.backgroundColor = "#ff9900";
}

function clickBtnBackground(){
    document.getElementById("txtUrl").style.display = 'inline'
}

function changeTxtUrl(){
    var txtUrl = document.getElementById("txtUrl");
    let index1 = txtUrl.value.indexOf('.jpg');
    let index2 = txtUrl.value.indexOf('.png')
    if(index>0 || index2>0){
        document.body.style.backgroundImage = "url('"+txtUrl.value+"')"
        localStorage.setItem('img',txtUrl.value);
        txtUrl.style.display = 'none'
    }else{
        alert('Hãy chọn 1 ảnh jpg');
    }
}

function clickSaveImage(){
    let file = document.getElementById('fileImg')
}