import * as types from '../types'

const initialState = {
    buttonClicked: false
}

export default function exampleReducer(state = initialState, action) {
    switch(action.type) {
        case types.BUTTON_CLICKED_SUCCESS: {
            console.log('Sucesso')
            const newState = { ...state }
            newState.buttonClicked = !newState.buttonClicked
            return newState
        }

        case types.BUTTON_CLICKED_FAILURE: {
            console.log('Falha')
            return state
        }

        case types.BUTTON_CLICKED_REQUEST: {
            console.log('Fazendo a requisição')
            return initialState
        }

        default: {
            return state
        }
    }
}
