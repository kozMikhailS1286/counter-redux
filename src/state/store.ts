import {createStore, combineReducers, applyMiddleware, AnyAction} from 'redux';
import {counterReducer} from "./counterReducer";
import thunk, {ThunkDispatch} from 'redux-thunk'
import {useDispatch} from "react-redux";
import {loadState, saveState} from "../utils/localstoraje-utils";
import app from "../App";


const rootReducer = combineReducers({
    counter: counterReducer
})






export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));

export const useAppDispatch = () => useDispatch<ThunkDispatch<AppStateType, any, AnyAction>>()

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store