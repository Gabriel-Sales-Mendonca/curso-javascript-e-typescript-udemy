function fizzBuzz (numero) {
    if (numero % 3 === 0 && numero % 5 !== 0) return 'Fizz';
    if (numero % 5 === 0 && numero % 3 !==0) return 'Buzz';
    if (!Number(numero) || numero % 3 !== 0 && numero % 5 !== 0) {
        return numero
    } else return 'FizzBuzz'
}

console.log(fizzBuzz(0))