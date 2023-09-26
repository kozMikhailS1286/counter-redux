import {useSelector} from 'react-redux';
import React from 'react';
import './App.css';
import {AppStateType} from "./state/store";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)

const incHandler = () => {

}
    return (
        <div className="App">
            <h1> {value} </h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}

export default App;
