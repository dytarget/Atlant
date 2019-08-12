import React, { Component } from 'react';
import './index.css';
import axios from 'axios';

export class Consult extends Component {

    state={
        name:"",
        phone:"",
        email:"",
        theme:""
    }

    handleChange=(event)=>{
        if (event.target.name==="phone" && !isNaN(event.target.value) && event.target.value.length<=11) {
            this.setState({[event.target.name]:event.target.value});        
        }
        if (event.target.name!=="phone") {
            this.setState({[event.target.name]:event.target.value});        
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        var {name,phone,email,theme}=this.state;
        axios.post('http://89.219.32.117:5000/help',{name:name,phone:phone,email:email,theme:theme}).then(res=>{
            window.alert("Успешно отправлено!");
            this.setState({ name:"",
            phone:"",
            email:"",
            theme:""})
        }).catch(error=>{window.alert("Произошла ошибка!")});
    }


    render() {
        return (
            <div className="field">
                <form onSubmit={this.handleSubmit} className="form-input">
                    <div className="form-body">
                        <div className="little-fields">
                            <label htmlFor="name">ФИО</label>
                            <input value={this.state.name} onChange={this.handleChange} placeholder="Введите ФИО" name="name" required type="text"/>
                            <label htmlFor="phone">Номер телефона</label>
                            <input value={this.state.phone} onChange={this.handleChange} placeholder="Введите номер телефона" name="phone" required type="tel"/>
                        </div>
                        <div className="message-field">
                            <label htmlFor="email">Ваш e-mail</label>
                            <input value={this.state.email} onChange={this.handleChange} placeholder="Введите -mail" name="email" required type="email"/>
                            <label htmlFor="theme">Тема консультации</label>
                            <select onChange={this.handleChange} required name="theme" id="">
                                <option value="Открытие счёта">Открытие счёта</option>
                                <option value="Зачисление и вывод денежных средств">Зачисление и вывод денежных средств</option>
                                <option value="Торговые терминалы">Торговые терминалы</option>
                                <option value="Продукты и сервисы">Продукты и сервисы</option>
                                <option value="Тарифы">Тарифы</option>
                                <option value="Другое">Другое</option>
                            </select>
                        </div>
                    </div>
                    <p className="soglasie"><input required type="checkbox"/>Подтверждаю <a href="!#">своё согласие на коммуникацию</a>и на обработку <a href="!#">ваших персональных данных</a></p>
                    <div className="submit-form">
                        <input  type="reset" value="Очистить"/>
                        <input onClick={this.handleSubmit} type="submit" value="Отправить"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Consult;
