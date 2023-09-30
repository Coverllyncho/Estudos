function verificar(){ 
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || fano.value > ano){
        window.alert(`Verifique os dados e tente novamente.`);
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var img = document.createElement('img');//criar elemento html no javascript
        img.setAttribute('id', 'foto');
        //res.innerHTML = `Idade calculada: ${idade}`;
        var genero = '';
        if(fsex[0].checked){
            genero = 'Homem';

            if(idade >=0 && idade <= 12){
                img.setAttribute('src', 'foto/homembebe.jpg');
            } else if(idade <= 18){
                img.setAttribute('src', 'foto/homemjovem.jpg')
            } else if(idade <= 50){
                img.setAttribute('src', 'foto/homemadulto.jpg')
            } else {
                img.setAttribute('src', 'foto/homemvelho.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher';

            if(idade >=0 && idade <= 12){
                img.setAttribute('src', 'foto/mulherbebe.jpg')
            } else if(idade <= 18){
                img.setAttribute('src', 'foto/mulherjovem.jpg')
            } else if(idade <= 50){
                img.setAttribute('src', 'foto/mulheradulta.jpg')
            } else {
                img.setAttribute('src', 'foto/mulhervelha.jpg')
            }
        }
        res.style.textAlign= 'center';
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`;

        res.appendChild(img);
    }
}
