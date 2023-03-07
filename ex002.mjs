function sequenciaFibonaci(valor,usuario){
    let n1 = [];
    n1[0] = 0;
    n1[1] = 1;
    for(let i = 2; i < valor; i++){
        n1[i] = n1[i - 2] + n1[ i - 1]
    }
    console.log(n1)
    for(let i of n1){
        if(usuario === i){
            return `O valor ${usuario} esta na sequencia de fibonacci`
        }
    }
    return `O valor ${usuario} não esta na sequencia de fibonacci`;
    
}

let usuario = 4;
let valor = usuario * 2;
console.log(sequenciaFibonaci(valor, usuario))