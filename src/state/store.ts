import {createStore, combineReducers, applyMiddleware, AnyAction} from 'redux';
import {counterReducer} from "./counterReducer";
import thunk, {ThunkDispatch} from 'redux-thunk'
import {useDispatch} from "react-redux";


const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk));

export const useAppDispatch = () => useDispatch<ThunkDispatch<AppStateType, any, AnyAction>>()

store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})


export type AppStoreType = typeof store