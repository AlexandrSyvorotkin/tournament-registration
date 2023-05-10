import './App.css';
import React from "react";
import Registration from '../src/components/Registration'

function App() {
  return (
    <div className="App">
        <div className='header'>"Единый информационно-расчетный центр города Москвы" регистрация на турнир</div>
        <Registration/>
    </div>
  );
}

export default App;
