import React, { useState } from 'react';
import './Registration.css'
import axios from "axios";

const TournamentRegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        middleName: '',
        phone: '',
        email: '',
        discipline: '',
    });

    const { firstName, lastName, middleName, phone, email, discipline } = formData;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            firstName: firstName,
            lastName:lastName,
            middleName: middleName,
            phone:phone,
            email: email,
            discipline: discipline
        }
        axios.post('https://sheet.best/api/sheets/f0c4d75a-f3f9-44fb-a510-335b13dd7c23', data).then(response => console.log(response))
        // console.log( data )
    };

    return (
        <form onSubmit={handleSubmit} className='registration'>
            <div>
                <label htmlFor="firstName" className='label'>Имя:</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={handleInputChange}
                    required
                    className='input'
                />
            </div>
            <div>
                <label htmlFor="lastName" className='label'>Фамилия:</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={handleInputChange}
                    required
                    className='input'
                />
            </div>
            <div>
                <label htmlFor="middleName" className='label'>Отчество:</label>
                <input
                    type="text"
                    name="middleName"
                    id="middleName"
                    value={middleName}
                    onChange={handleInputChange}
                    required
                    className='input'
                />
            </div>
            <div>
                <label htmlFor="phone" className='label'>Телефон:</label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={handleInputChange}
                    required
                    className='input'
                />
            </div>
            <div>
                <label htmlFor="email" className='label'>E-mail:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                    className='input'
                />
            </div>
            <div>
                <label htmlFor="discipline" className='label'>Дисциплина:</label>
                <select name="discipline" id="discipline" value={discipline} onChange={handleInputChange}>
                    <option value="">Выберите дисциплину</option>
                    <option value="Дота">Дота</option>
                    <option value="КС">КС</option>
                    <option value="Фифа">Фифа</option>
                </select>
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default TournamentRegistrationForm;
