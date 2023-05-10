import './App.css';
import React from "react";
import Registration from '../src/components/Registration'

function App() {
  return (
    <div className="App">
        <div className='header'>"Единый информационно-расчетный центр города Москвы" регистрация на турнир</div>
        <div className='format'>Формат турнира: Dota2 2х2, CS:GO 2x2, Fifa 2023 1x1</div>
        <Registration/>
    </div>
  );
}

export default App;
