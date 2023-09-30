function contar(){
    //var epasso = "👉🏻";
    var epasso =  "\u{1f449}";
    var echegada = "🏁";
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res');
    res.innerHTML = "Contando: ";
    
    if(inicio.value.length == 0 || fim.value.length == 0|| passo.value.length == 0){
        res.innerHTML = "Impossivel contar.";
        window.alert("[ERRO]Insira dados corretamente.");
        

    } else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p <=0){
            window.alert("Passo invalido, considerando passo como 1.");
            p = 1;
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} ${epasso}`;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} ${epasso}`;
            }
        }
        res.innerHTML += `${echegada}`;
    }

}
