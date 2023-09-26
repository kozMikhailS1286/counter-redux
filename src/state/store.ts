import {createStore, combineReducers} from 'redux';
import {counterReducer} from "./counterReducer";


const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);

export type AppStoreType = typeof store