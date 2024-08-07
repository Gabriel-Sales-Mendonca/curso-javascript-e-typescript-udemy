import * as types from '../types'

export function loginRequest(payload) {
    return {
        type: types.LOGIN_REQUEST,
        payload: payload
    }
}

export function loginSucess(payload) {
    return {
        type: types.LOGIN_SUCESS,
        payload: payload
    }
}

export function loginFailure(payload) {
    return {
        type: types.LOGIN_FAILURE,
        payload: payload
    }
}