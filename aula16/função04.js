function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// Fatorial de 5 (5!) é 5 * 4 * 3 * 2 * 1 = 120

// criado uma função chamada 'fatorial' que recebe um número 'n' como parâmetro. A função calcula o fatorial de 'n' usando um loop 'for' que começa em 'n' e decrementa até 1, multiplicando o valor de 'fat' por cada número no caminho. O resultado final do fatorial é retornado. Em seguida, a função é chamada com o argumento 5, e o resultado (120) é impresso no console.