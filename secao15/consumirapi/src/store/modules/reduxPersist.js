import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default function reducers(reducers) {
    const persistedReducers = persistReducer({
        key: 'REACT-BASE',
        storage: storage,
        whitelist: ['example']
    }, reducers)

    return persistedReducers
}