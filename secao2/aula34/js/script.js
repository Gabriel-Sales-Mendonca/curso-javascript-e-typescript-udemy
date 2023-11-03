function formulario () {
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = []

    function enviar (evento) {
        evento.preventDefault();

        let nome = document.querySelector('.nome')
        let sobrenome = document.querySelector('.sobrenome')
        let peso = document.querySelector('.peso')
        let altura = document.querySelector('.altura')

        pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(pessoa);
        console.log(pessoas);

        resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome}</p>
        <p>${pessoa.peso} ${pessoa.altura}</p>`
    }

    form.addEventListener('submit', enviar);
}


formulario()