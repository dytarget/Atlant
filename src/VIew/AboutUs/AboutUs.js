import React, { Component,useState } from 'react';
import ReactDOM from 'react-dom';
import './AboutUs.css';
import ReactPageScroller from "react-page-scroller";
import {CSSTransition} from 'react-transition-group';




export class AboutUs extends Component {
    constructor() {
        super();
        this.state = { 
            isLoading: true ,
            which:1,
            show1:false,
            show2:false,
            show3:false,
            show4:false,
            show5:false
        }
    }
    
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ isLoading: false }), 1500); 
    }
    componentWillUnmount(){
        if (this.timerHandle) {
          clearTimeout(this.timerHandle);
          this.timerHandle = 0;
        }
      }
    

    goToPage = (pageNumber) => {
        this.reactPageScroller.goToPage(pageNumber);
    }
    
 
    render() {
        
        return (
            this.state.isLoading ? (<div>Hello{console.log("Hello")
            }</div>) : (
                <div>
                <ReactPageScroller ref={c => this.reactPageScroller = c} pageOnChange={(info)=>{console.log(info);this.setState({which:info})}}>
                        <div className="bottom-layer" >
                                <CSSTransition in={this.state.which===1}  timeout={2900} classNames="animtext">
                                    <h1 className="text">Пресс-Центр</h1>
                                </CSSTransition>
                                <div className="numbers">
                                    <div>00</div>
                                    <div style={{color:"#eabd00",opacity:"1"}}>01</div>
                                    <div onClick={()=>{this.goToPage(1)}}>02</div>
                                    <div onClick={()=>{this.goToPage(2)}}>03</div>
                                    <div onClick={()=>{this.goToPage(3)}}>04</div>
                                    <div onClick={()=>{this.goToPage(4)}}>05</div>
                                </div >
                            
                            
                                        <CSSTransition in={this.state.which===1}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{console.log("gekk");
                                            }} className="abt-button" style={{backgroundColor:"#eabd00"}}>Больше +</button>
                                        </CSSTransition>
                                <CSSTransition in={this.state.which===1} timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#eabd00"}}></div>
                                </CSSTransition>
                        </div>
            
                        
                        <div className="bottom-layer" >
                                <CSSTransition in={this.state.which===2}  timeout={2900} classNames="animtext">
                                    <h1 className="text">Лицензии</h1>
                                </CSSTransition>
                                <div className="numbers">
                                    <div>00</div>
                                    <div onClick={()=>{this.goToPage(0)}}>01</div>
                                    <div style={{color:"#ff4713",opacity:"1"}}>02</div>
                                    <div onClick={()=>{this.goToPage(2)}}>03</div>
                                    <div onClick={()=>{this.goToPage(3)}}>04</div>
                                    <div onClick={()=>{this.goToPage(4)}}>05</div>
                                </div>
                                    <div className="popup">
                                    <CSSTransition in={this.state.which===2}  timeout={2900} classNames="animbutton">
                                        <button className="abt-button" style={{backgroundColor:"#ff4713"}}>Больше +</button>
                                    </CSSTransition>
                                        <div></div>
                                    </div>
                                <CSSTransition  in={this.state.which===2} timeout={2900} classNames="alert">
                                <div className="animated" style={{backgroundColor:"#ff4713"}}></div>
                                </CSSTransition>

                        </div>
                       
                        <div className="bottom-layer" >
                                <CSSTransition in={this.state.which===3}  timeout={2900} classNames="animtext">
                                    <h1 className="text">Реквизиты</h1>
                                </CSSTransition>
                                <div className="numbers">
                                    <div >00</div>
                                    <div onClick={()=>{this.goToPage(0)}}>01</div>
                                    <div onClick={()=>{this.goToPage(1)}}>02</div>
                                    <div style={{color:"#af0924",opacity:"1"}}>03</div>
                                    <div onClick={()=>{this.goToPage(3)}}>04</div>
                                    <div onClick={()=>{this.goToPage(4)}}>05</div>
                                </div>
                                    <div className="popup">
                                        <CSSTransition in={this.state.which===3}  timeout={2900} classNames="animbutton">
                                            <button className="abt-button" style={{backgroundColor:"#af0924"}}>Больше +</button>
                                        </CSSTransition>
                                        <div></div>
                                    </div>
                                <CSSTransition in={this.state.which===3} timeout={2900} classNames="alert">
                                <div className="animated" style={{backgroundColor:"#af0924"}}></div>
                                </CSSTransition>
                        </div>
                        
                        <div className="bottom-layer" >
                                <CSSTransition in={this.state.which===4}  timeout={2900} classNames="animtext">
                                    <h1 className="text">Миссия и принципы</h1>
                                </CSSTransition>
                                <div className="numbers">
                                    <div>00</div>
                                    <div onClick={()=>{this.goToPage(0)}}>01</div>
                                    <div onClick={()=>{this.goToPage(1)}}>02</div>
                                    <div onClick={()=>{this.goToPage(2)}}>03</div>
                                    <div style={{color:"#008b5c",opacity:"1"}}>04</div>
                                    <div onClick={()=>{this.goToPage(4)}}>05</div>
                                </div>
                                    <div className="popup">
                                    <CSSTransition in={this.state.which===4}  timeout={2900} classNames="animbutton">
                                        <button className="abt-button" style={{backgroundColor:"#008b5c"}}>Больше +</button>
                                    </CSSTransition>
                                    <div></div>
                                    </div>
                                <CSSTransition in={this.state.which===4} timeout={2900} classNames="alert">
                                <div className="animated" style={{backgroundColor:"#008b5c"}}></div>
                                </CSSTransition>
                        </div>
                        <div className="bottom-layer" >
                                <CSSTransition in={this.state.which===5}  timeout={2900} classNames="animtext">
                                    <h1 className="text">Контакты и местонахождение</h1>
                                </CSSTransition>
                                <div className="numbers">
                                    <div>00</div>
                                    <div onClick={()=>{this.goToPage(0)}}>01</div>
                                    <div onClick={()=>{this.goToPage(1)}}>02</div>
                                    <div onClick={()=>{this.goToPage(2)}}>03</div>
                                    <div onClick={()=>{this.goToPage(3)}}>04</div>
                                    <div style={{color:"#9062bc",opacity:"1"}}>05</div>
                                </div>
                                    <div className="popup">
                                        <CSSTransition in={this.state.which===5}  timeout={2900} classNames="animbutton">
                                            <button className="abt-button" style={{backgroundColor:"#9062bc"}}>Больше +</button>
                                        </CSSTransition>
                                    </div>
                                <CSSTransition in={this.state.which===5} timeout={2900} classNames="alert">
                                <div className="animated" style={{backgroundColor:"#9062bc"}}></div>
                                </CSSTransition>
                        </div>
                
                    

                </ReactPageScroller>
                   
                </div>
            )
        )
    }
}


export default AboutUs;
