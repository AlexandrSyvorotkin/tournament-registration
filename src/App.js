import './App.css';
import React from "react";
import Registration from '../src/components/Registration'

function App() {
  return (
    <div className="App">
        <div className='header'>"Единый информационно-расчетный центр города Москвы" регистрация на турнир</div>
        <div className='format'>Формат турнира: Дота 2х2, CS:GO 2x2, FIFa 1x1</div>
        <Registration/>
    </div>
  );
}

export default App;
