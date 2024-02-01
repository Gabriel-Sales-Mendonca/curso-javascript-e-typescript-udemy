export function geraNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}