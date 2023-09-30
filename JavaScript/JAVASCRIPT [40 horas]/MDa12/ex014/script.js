function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    //var msg = document.querySelectorAll(div, msg);
    var date = new Date();
    var hora = date.getHours();
    //var hora = 6;
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'fotos/fotomanha.jpg'
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora <18){
        img.src = 'fotos/fototarde.jpg'
        document.body.style.background = '#b9846f';
    } else {
        img.src = 'fotos/fotonoite.jpg'
        document.body.style.background = '#515154';
    }
}
