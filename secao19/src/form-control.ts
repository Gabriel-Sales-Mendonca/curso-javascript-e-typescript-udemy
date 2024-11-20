import { isEmail } from 'validator'

const SHOW_ERROR_MESSAGE = 'show-error-message'

const form = document.querySelector('.form') as HTMLBodyElement
const username = document.querySelector('.username') as HTMLInputElement
const email = document.querySelector('.email') as HTMLInputElement
const password = document.querySelector('.password') as HTMLInputElement
const password2 = document.querySelector('.password2') as HTMLInputElement

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // esconder mensagens de erro
    hideErrorMenssage([username, email, password, password2])

    if(validForm()) {
        console.log('O formulário pode ser enviado')
    } else {
        console.log('O formulário não pode ser enviado')
    }
})

function hideErrorMenssage(camps: HTMLInputElement[]): void {
    camps.forEach((camp) => {
        if(camp.parentElement?.classList.contains(SHOW_ERROR_MESSAGE)) {
            camp.parentElement.classList.remove(SHOW_ERROR_MESSAGE)
        }
    })
}

function showErrorMessage(field: HTMLInputElement, msg: string): void {
    const message = field.parentElement?.querySelector('.error-message') as HTMLSpanElement
    message.innerHTML = msg
    field.parentElement?.classList.add(SHOW_ERROR_MESSAGE)
}

// valida todos os campos do formulário
function validForm(): boolean {
    let formIsValid = true

    checkEmptyField([username, email, password, password2])

    formIsValid = validUsername()

    formIsValid = validEmail()

    formIsValid = validPassword()

    return formIsValid
}

function checkEmptyField(field: HTMLInputElement[]): void {
    field.forEach((field) => {
        if(field.value.length <= 0) {
            showErrorMessage(field, 'Campo não pode estar vazio.')
        }
    })
}

function validUsername(): boolean {
    if(username.value.length < 3 || username.value.length > 30) {
        showErrorMessage(username, 'Usuário deve ter entre 2 e 31 caracteres.')
        return false
    }
    return true
}

function validEmail(): boolean {
    if(!isEmail(email.value)) {
        showErrorMessage(email, 'Email inválido.')
        return false
    }
    return true
}

function validPassword(): boolean {
    if(password.value.length < 6) {
        showErrorMessage(password, 'A senha deve ter mais de 5 caracteres.')
        return false
    } 
    else if(password.value !== password2.value) {
        showErrorMessage(password, 'As senhas não são iguais.')
        showErrorMessage(password2, 'As senhas não são iguais.')
        return false
    }
    return true
}