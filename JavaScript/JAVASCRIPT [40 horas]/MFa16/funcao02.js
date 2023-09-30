function soma(n1 = 0, n2 = 0){
    return n1 + n2;
}

console.log(soma(1, 2));

let v = function(x){
    return x * 2;
}
console.log(v(5));

//fatorial

function fatorial (n){
    let fat = 1;
    for(let c = n; c > 1 ; c--){
        fat *= c;
    }
    return fat;
}

console.log(fatorial(5));

function fatorialR(n){
    if(n == 1){
        return 1;
    } else {
        return n * fatorialR(n-1);
    }
}

console.log(fatorialR(5));