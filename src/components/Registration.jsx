import React, { useState } from 'react';
import './Registration.css'
import axios from "axios";

const TournamentRegistrationForm = () => {


    const [registrationEnd, setRegistrationEnd] = useState(false)
    console.log(registrationEnd)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        middleName: '',
        phone: '',
        email: '',
        discipline: '',
        consent: false,
        team: ''
    });


    const [phoneError, setPhoneError] = useState(null);

    const { firstName, lastName, middleName, phone, email, discipline, consent, team } = formData;

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        setFormData({
            ...formData,
            phone: value,
        });
        if (value.length !== 11) {
            setPhoneError('Номер телефона должен содержать 11 цифр');
        } else {
            setPhoneError(null);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            firstName: firstName,
            lastName:lastName,
            middleName: middleName,
            phone:phone,
            email: email,
            discipline: discipline,
            team: team
        }

        axios.post('https://sheet.best/api/sheets/f0c4d75a-f3f9-44fb-a510-335b13dd7c23', data).then(response => console.log(response))
        setRegistrationEnd(true)
        // console.log( data )
    }

    return (
    <>
        {!registrationEnd ?
            <form onSubmit={handleSubmit} className='registration'>
                <div className='content-div'>
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
                <div className='content-div'>
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
                <div className='content-div'>
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
                <div className='content-div'>
                    <label htmlFor="team" className='label'>Название команды:</label>
                    <input
                        type="text"
                        name="team"
                        id="team"
                        value={team}
                        onChange={handleInputChange}
                        required
                        className='input'
                    />
                </div>
                <div className='content-div'>
                    <label htmlFor="phone" className='label'>Телефон:</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                        className='input'
                    />
                    {phoneError && <div style={{ color: 'red', fontSize: '10px' }}>{phoneError}</div>}
                </div>
                <div className='content-div'>
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
                <div className='content-div select'>
                    <label htmlFor="discipline" className='label'>Дисциплина:</label>
                    <select name="discipline" id="discipline" value={discipline} onChange={handleInputChange}>
                        <option value="">Выберите дисциплину</option>
                        <option value="Дота">Dota 2</option>
                        <option value="КС">CS:GO</option>
                        <option value="Фифа">Fifa 2023</option>
                    </select>
                </div>
                <div className='agrement'>
                    <input className='concent-input' type="checkbox" name="consent" id="consent" checked={consent} onChange={handleInputChange} />
                    <label htmlFor="consent" className='consent'>
                        Согласие на обработку персональных данных
                    </label>
                </div>
                <button type="submit" className='btn' disabled={!consent}>Зарегистрироваться</button>
            </form>
            : <p className='reg-end'>Поздравляем регистрация прошла успешно!</p>}
    </>
    );
}

export default TournamentRegistrationForm;
