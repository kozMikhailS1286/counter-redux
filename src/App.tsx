import {useSelector} from 'react-redux';
import React from 'react';
import './App.css';
import {AppStateType, useAppDispatch} from "./state/store";
import {incValueAC} from "./state/counterReducer";


function App() {

    const dispatch = useAppDispatch()

    const value = useSelector<AppStateType, number>(state => state.counter.value)

    const incHandler = () => {
        dispatch(incValueAC())
    }

    return (
        <div className="App">
            <h1> {value} </h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}

export default App;
