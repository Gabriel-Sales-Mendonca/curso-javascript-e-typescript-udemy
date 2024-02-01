import {geraNumAleatorio} from './geraNumAleatorio'

export function gerarSenha(qtdCaracteres, caracteresDaSenha) {
    let senhaGerada = ''
    for(let c = 0; c < qtdCaracteres; c++) {
        let numGerado = geraNumAleatorio(0, caracteresDaSenha.length - 1)
        let caracterEscolhido = caracteresDaSenha[numGerado]
        senhaGerada += caracterEscolhido
    }
    return senhaGerada
}