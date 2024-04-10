function createAlert(){
    alert("Hello, world!");
}

function bigger(){
    document.getElementById('fancifyThis').style.fontSize = "24pt";
}

function fancify(){
    let txt = document.getElementById('fancifyThis');
    txt.style.fontWeight = "bold";
    txt.style.color = "blue";
    txt.style.textDecorationLine = "underline";
}

function defancify(){
    let txt = document.getElementById('fancifyThis');
    txt.style.fontWeight = "normal";
    txt.style.color = "black";
    txt.style.textDecorationLine = "none";
}

function up(){
    let txt = document.getElementById('fancifyThis');
    let newTxt = txt.value.toUpperCase();
    var parts = newTxt.split(".");
    txt.value = parts.length;
    for (let i=0, len=parts.length; i<len-1; i++){
        parts[i] += "MOO";
    }
    newTxt = parts.join(".");
    txt.value = newTxt;
    
}