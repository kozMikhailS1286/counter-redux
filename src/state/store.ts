import {createStore, combineReducers, applyMiddleware, AnyAction} from 'redux';
import {counterReducer} from "./counterReducer";
import thunk, {ThunkDispatch} from 'redux-thunk'
import {useDispatch} from "react-redux";


const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState;
const persistedTodosString = localStorage.getItem('app-state')
if (persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}

export const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export const useAppDispatch = () => useDispatch<ThunkDispatch<AppStateType, any, AnyAction>>()

store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
    localStorage.setItem('value', JSON.stringify(store.getState().counter.value))
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store