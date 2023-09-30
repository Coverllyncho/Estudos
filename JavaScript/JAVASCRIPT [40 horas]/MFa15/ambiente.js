let num = [5, 8, 4];
num[3] = 6;

num.push(7);
console.log(`Nosso vetor é: ${num}`);

num.sort();
console.log(`Nosso vetor ordenado é: ${num}`);

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    
}

num.push(2);
console.log(`Nosso vetor é: ${num}`);
for(let i in num){
    console.log(num[i]);
}

console.log(num.indexOf(5));