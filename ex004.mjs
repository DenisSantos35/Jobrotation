/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

*/

let distribuidora ={'sp':7836.43,'rj':36678.66,'mg':29229.88,'es':27165.48,'outros':19849.53}
let soma = 0
function faturamento(distribuidora){
    for(let i in distribuidora){    
        soma += distribuidora[i]       
    }
    return soma
}

let total = faturamento(distribuidora);
let perc = {}
function percentual(total, distribuidora){
    for(let i in distribuidora){           
        perc[i] = ((distribuidora[i] / total) * 100 ).toFixed(2)    
    }
    return perc
}

console.log(percentual(total, distribuidora))

