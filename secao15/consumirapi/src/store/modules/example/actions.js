import * as types from '../types'

export function buttonClickedRequest() {
    return {
        type: types.BUTTON_CLICKED_REQUEST
    }
}

export function buttonClickedSuccess() {
    return {
        type: types.BUTTON_CLICKED_SUCcESS
    }
}

export function buttonClickedFailure() {
    return {
        type: types.BUTTON_CLICKED_FAILURE
    }
}