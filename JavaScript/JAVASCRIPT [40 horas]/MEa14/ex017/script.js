function gerar(){
    let numero = document.getElementById('numero');
    let tab = document.getElementById('seltab');
    let n = numero.value;
    tab.innerHTML = '';

   
    if(numero.value.length == 0){
        window.alert("Insira um numero.");
    } else {
        for(let i = 1; i <= 10 ; i++){
            let item = document.createElement('option');
            item.text = `${i} x ${n} = ${i * n}`;
            tab.appendChild(item);
        }
    }
}