let amigo = {nome: 'jose', 
            sexo: 'M', 
            peso: 80, 
            engordar(p){
                console.log("Engordou");
                this.peso += p;
            }
        };
amigo.engordar(2);
console.log(amigo);