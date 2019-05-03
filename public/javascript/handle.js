function clickSave(){
    let txt = document.getElementById('note').value;
    localStorage.setItem('note',txt);
}

function loadText(){
    let txt = localStorage.getItem('note') || '';

    document.getElementById('note').value = txt;

    console.log('txt: '+txt)
}