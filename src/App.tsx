import {useSelector} from 'react-redux';
import React from 'react';
import './App.css';
import {AppStateType, useAppDispatch} from "./state/store";
import {incValueTC} from "./state/counterReducer";

function App() {

    const dispatch = useAppDispatch()

    const value = useSelector<AppStateType, number>(state => state.counter.value)

    const incHandler = () => {
        dispatch(incValueTC(value+1))
    }

    return (
        <div className="App">
            <h1> {value} </h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}

export default App;
