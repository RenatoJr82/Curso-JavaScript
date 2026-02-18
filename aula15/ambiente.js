let num = [8,2,3,4,5]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
let pos = num.indexOf(2)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}   else{
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}
