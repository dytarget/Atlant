import React, { Component } from 'react';
import './index.css';


export class Forms extends Component {

    state={
        name:"",
        phone:"",
        email:"",
        message:""
    }

    handleChange=(event)=>{
        if (event.target.name==="phone" && !isNaN(event.target.value) && event.target.value.length<=11) {
            this.setState({[event.target.name]:event.target.value});        
        }
        if (event.target.name!=="phone") {
            this.setState({[event.target.name]:event.target.value});        
        }
    }


    render() {
        return (
            <div className="field">
                <form onSubmit={()=>{}} className="form-input">
                    <div className="form-body">
                        <div className="little-fields">
                            <label htmlFor="name">ФИО</label>
                            <input value={this.state.name} onChange={this.handleChange} placeholder="Введите ФИО" name="name" required type="text"/>
                            <label htmlFor="phone">Номер телефона</label>
                            <input value={this.state.phone} onChange={this.handleChange} placeholder="Введите номер телефона" name="phone" required type="tel"/>
                            <label htmlFor="email">Ваш e-mail</label>
                            <input value={this.state.email} onChange={this.handleChange} placeholder="Введите -mail" name="email" required type="email"/>
                        </div>
                        <div className="message-field">
                            <label htmlFor="message">Ваш вопрос</label>
                            <textarea value={this.state.message} onChange={this.handleChange} placeholder="Напишите сюда ваш вопрос" name="message" cols="30"></textarea> 
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
