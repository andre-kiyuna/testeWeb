function Ligar(){
    document.getElementById('lamp').src = 'img/pic_bulbon.gif';
}
function desligar(){
    document.getElementById('lamp').src = 'img/pic_bulboff.gif';
}
function onOff(){
    const lampada = document.getElementById("lamp2");
        if (lampada.src.includes("pic_bulboff.gif")){
            lampada.src = "img/pic_bulbon.gif";
        } else {
            lampada.src = "img/pic_bulboff.gif";
        }
}