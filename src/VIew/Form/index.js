import React, { Component } from 'react';
import './index.css';
import axios from 'axios';


export class Forms extends Component {

    state={
        name:"",
        phone:"",
        email:"",
        message:"",
        soglasie:true,
        error:false
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
        var {name,phone,email,message}=this.state;
        if (name.length && phone.length && email.length && message.length) {
            axios.post('http://89.219.32.117:5000/questions',{name:name,phone,phone,email:email,question:message}).then(res=>{
                window.alert("Успешно отправлено!");
                this.setState({ name:"",
                phone:"",
                email:"",
                message:"",error:false})
            }).catch(error=>{window.alert("Произошла ошибка!")});
        }
        else{
            this.setState({error:true})
        }
       
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
                            <label htmlFor="email">Ваш e-mail</label>
                            <input value={this.state.email} onChange={this.handleChange} placeholder="Введите -mail" name="email" required type="email"/>
                        </div>
                        <div className="message-field">
                            <label htmlFor="message">Ваш вопрос</label>
                            <textarea value={this.state.message} onChange={this.handleChange} placeholder="Напишите сюда ваш вопрос" name="message" cols="30"></textarea> 
                        </div>
                    </div>
                    <p className="soglasie"><input name="soglasie" value={this.state.soglasie} onChange={this.handleChange} type="checkbox"/>Подтверждаю своё согласие на коммуникацию</p>
                    {this.state.error && <p style={{textAlign:"center",color:"red"}}>Заполните все данные и условия</p>}
                    <div className="submit-form">
                        <input type="reset" value="Очистить"/>
                        <input onClick={this.handleSubmit} type="submit" value="Отправить"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Forms;
