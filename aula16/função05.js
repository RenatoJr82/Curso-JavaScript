// Fatorial de um número usando RECURSIVIDADE

function fatorial(n) {
    if ( n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

// Fatorial de 5 (5!) é 5 * 4 * 3 * 2 * 1 = 120

// criado uma função chamada 'fatorial' que recebe um número 'n' como parâmetro. A função verifica se 'n' é igual a 1, caso seja, retorna 1 (pois o fatorial de 1 é 1). Caso contrário, a função retorna 'n' multiplicado pelo resultado da chamada recursiva da função 'fatorial' com o argumento 'n-1'. Isso cria uma cadeia de chamadas que eventualmente chega a 1, onde a função começa a retornar os valores e calcular o fatorial. Em seguida, a função é chamada com o argumento 5, e o resultado (120) é impresso no console.