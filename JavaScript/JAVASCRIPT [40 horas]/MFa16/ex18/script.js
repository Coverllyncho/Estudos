function adicionar(){
    
    console.log(numero);
    console.log(numero.value.length);
    let n = Number(numero.value);
    console.log(n);
    

    
    let checa = vetor.indexOf(n);

    if(numero.value.length == 0 || (n < 1) || (n > 100)){
        window.alert("Insira um numero válido");
    } else if(vetor.indexOf(n) == -1){
        vetor.push(n);
        console.log(vetor);
        let item = document.createElement('option');
        item.text = `${n} foi inserido`;
        tab.appendChild(item);
        
    } else {
        window.alert(`Número ${n} já está no vetor.`);
    }

    numero.value = '';
    numero.focus();

    res.innerHTML = '';

}

function maiorNumero(v){
    let maior = v[0];
    for (let i = 0; i < v.length; i++) {
        if(maior < v[i]){
            maior = v[i];
        }
    }
    return maior;
}

function menorNumero(v){
    let menor = v[0];
    for (let i = 0; i < v.length; i++) {
        if(menor > v[i]){
            menor = v[i];
        }
    }
    return menor;
}

function finalizar(){
    let soma = 0;

    if(vetor.length == 0){
        window.alert("Insira pelo menos um número.");
    } else {
        res.innerHTML = `<p>Ao todo, temos ${vetor.length} numeros cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado é: ${maiorNumero(vetor)}</p>`;
        res.innerHTML += `<p>O menor valor informado é: ${menorNumero(vetor)}</p>`;

        for(let i = 0; i < vetor.length; i++){
            soma += vetor[i];
        }
        res.innerHTML += `<p>A soma dos valores é: ${soma}</p>`;
        res.innerHTML += `<p>A média dos valores infomrado é:  ${(Math.round((soma/vetor.length)*100)/100)}</p>`

    }

}

let numero = document.getElementById('numero');
let res = document.getElementById('res');
let tab = document.getElementById('seltab');
let vetor = [];

