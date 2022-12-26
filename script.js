
var texto = document.getElementById("encryptext");
var encryptr = document.getElementById("encrypt");
var desencryptr = document.getElementById("desencrypt");
var box1 = document.getElementById("bntTxt2");
var box2 = document.getElementById("imgp");


function encryptarTexto(){  
    
    var txt = texto.value.toLowerCase();
    var txt1 = txt.replace(/e/g, "enter");
    var txt2 = txt1.replace(/i/g, "imes");
    var txt3 = txt2.replace(/a/g, "ai");
    var txt4 = txt3.replace(/o/g, "ober");
    var txt5 = txt4.replace(/u/g, "ufat");
    var txtEncrypt = txt5;

    document.getElementById("textocaja2").innerHTML = txtEncrypt;
}

function desencryptarTexto(){           
    var txt = texto.value.toLowerCase();
    var txt1 = txt.replace(/enter/g, "e");
    var txt2 = txt1.replace(/imes/g, "i");
    var txt3 = txt2.replace(/ai/g, "a");
    var txt4 = txt3.replace(/ober/g, "o");
    var txt5 = txt4.replace(/ufat/g, "u");

    document.getElementById("textocaja2").innerHTML = txt5;
}

function copiarTexto(event) {
    var textocopy = document.getElementById("textocaja2");
    textocopy.select;

    navigator.clipboard.writeText(textocopy.value);
    alert("Texto copiado");
}

box1.style.display = 'none';
box2.style.display = 'block';

function hiddeDraw(e) {
        
    box2.style.display = 'none';
    box1.style.display = 'block'; 

    if (e.target.value == "") {
        box1.style.display = 'none';
        box2.style.display = 'block';
    }
        
}

encryptr.onclick = encryptarTexto;
desencryptr.onclick = desencryptarTexto;
copytext.onclick = copiarTexto;
texto.oninput = hiddeDraw;
