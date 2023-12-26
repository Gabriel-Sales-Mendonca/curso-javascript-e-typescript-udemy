/*
const nomes = ['Metamask', 'Consensys', 'Linea', 'zkSync', 'Scroll']

nomes.splice(2, 2)  // removi 2 nomes a partir do índice 2 do array usando o número positivo para informar o índice
console.log(nomes)
*/

/*
const nomes = ['Metamask', 'Consensys', 'Linea', 'zkSync', 'Scroll']

nomes.splice(-2, 1)  // removi 1 nome a partir do índice 2 do array usando o número negativo para informar o índice
console.log(nomes)
*/

/*
const nomes = ['Metamask', 'Consensys', 'Linea', 'zkSync', 'Scroll']

nomes.splice(0, 0, 'Starknet', 'Ethereum')  // adicionei 2 nomes a partir do índice 0 do array
console.log(nomes)
*/


const nomes = ['Metamask', 'Consensys', 'Linea', 'zkSync', 'Scroll']

nomes.splice(nomes.length, 0, 'NFTs', 'Ordinals')  // adicionei 2 nomes no final do array
console.log(nomes)