import React, { Component } from 'react';
import './index.css';


export class Forms extends Component {

    render() {
        return (
            <div className="field">
                <form onSubmit={()=>{}} className="form-input">
                    <div className="form-body">
                        <div className="little-fields">
                            <label htmlFor="name">Имя</label>
                            <input placeholder="Введите имя" name="name" required type="text"/>
                            <label htmlFor="surname">Фамилия</label>
                            <input placeholder="Введите фамилию" name="surname" required type="text"/>
                            <label htmlFor="telephone">Номер телефона</label>
                            <input placeholder="Введите номер телефона" name="telelphone" required type="tel"/>
                            <label htmlFor="email">Ваш e-mail</label>
                            <input placeholder="Введите -mail" name="email" required type="email"/>
                            <label htmlFor="city">Город</label>
                            <input placeholder="Введите город" name="city" required type="text"/>
                        </div>
                        <div className="message-field">
                            <label htmlFor="message">Ваш вопрос</label>
                            <textarea placeholder="Напишите сюда ваш вопрос" name="message" rows="9" cols="30"></textarea> 
                        </div>
                    </div>
                    <p className="soglasie"><input type="checkbox"/>Подтверждаю <a href="!#">своё согласие на коммуникацию</a></p>
                    <div className="submit-form">
                        <input type="reset" value="Очистить"/>
                        <input type="submit" value="Отправить"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Forms;
