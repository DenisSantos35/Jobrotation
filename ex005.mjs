let string = 'job rotation'
let array = []

for(let i of string){
    array.unshift(i)
}

let stringInvertido = ''
for(let i of array){
    stringInvertido += i
}
console.log(stringInvertido)
