import React, { Component} from 'react';
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
    
    goBack=()=>{
        this.props.history.goBack();
    }
 
    render() {
        
        return (
                <div style={{maxWidth:"100%",overflowX:"hidden",height:'100vh',maxHeight:"100vh"}}>
                <ReactPageScroller ref={c => this.reactPageScroller = c} pageOnChange={(info)=>{console.log(info);this.setState({which:info})}}>
                        <div className="bottom-layer" >
                                <CSSTransition in={this.state.which===1}  timeout={2900} classNames="animtext">
                                    <h1 className="text">Пресс-Центр</h1>
                                </CSSTransition>
                                {this.state.which===1 &&
                                    <div className="numbers">
                                        <div onClick={this.goBack}><i class="fas fa-arrow-circle-left"></i></div>
                                        <div style={{color:"#812b47",opacity:"1"}}>01</div>
                                        <div onClick={()=>{this.goToPage(1)}}>02</div>
                                        <div onClick={()=>{this.goToPage(2)}}>03</div>
                                        <div onClick={()=>{this.goToPage(3)}}>04</div>
                                        <div onClick={()=>{this.goToPage(4)}}>05</div>
                                    </div >
                                }
                               
                            
                                        <CSSTransition in={this.state.which===1}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{console.log("gekk");
                                            }} className="abt-button" style={{backgroundColor:"#812b47"}}>Больше +</button>
                                        </CSSTransition>
                                <CSSTransition in={this.state.which===1} timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#812b47",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>
            
                        
                        <div className="bottom-layer" >
                                <CSSTransition in={this.state.which===2}  timeout={2900} classNames="animtext">
                                    <h1 className="text">Лицензии</h1>
                                </CSSTransition>
                                {this.state.which===2 &&

                                <div className="numbers">
                                    <div onClick={this.goBack}><i class="fas fa-arrow-circle-left"></i></div>
                                    <div onClick={()=>{this.goToPage(0)}}>01</div>
                                    <div style={{color:"#763251",opacity:"1"}}>02</div>
                                    <div onClick={()=>{this.goToPage(2)}}>03</div>
                                    <div onClick={()=>{this.goToPage(3)}}>04</div>
                                    <div onClick={()=>{this.goToPage(4)}}>05</div>
                                </div>
                                }
                                    <div className="popup">
                                    <CSSTransition in={this.state.which===2}  timeout={2900} classNames="animbutton">
                                        <button className="abt-button" style={{backgroundColor:"#763251"}}>Больше +</button>
                                    </CSSTransition>
                                        <div></div>
                                    </div>
                                <CSSTransition  in={this.state.which===2} timeout={2900} classNames="alert">
                                <div className="animated" style={{backgroundColor:"#763251",maxWidth:"100%"}}></div>
                                </CSSTransition>

                        </div>
                       
                        <div className="bottom-layer" >
                                <CSSTransition in={this.state.which===3}  timeout={2900} classNames="animtext">
                                    <h1 className="text">Реквизиты</h1>
                                </CSSTransition>
                                {this.state.which===3 &&

                                <div className="numbers">
                                    <div onClick={this.goBack} ><i class="fas fa-arrow-circle-left"></i></div>
                                    <div onClick={()=>{this.goToPage(0)}}>01</div>
                                    <div onClick={()=>{this.goToPage(1)}}>02</div>
                                    <div style={{color:"#534169",opacity:"1"}}>03</div>
                                    <div onClick={()=>{this.goToPage(3)}}>04</div>
                                    <div onClick={()=>{this.goToPage(4)}}>05</div>
                                </div>
                                }
                                    <div className="popup">
                                        <CSSTransition in={this.state.which===3}  timeout={2900} classNames="animbutton">
                                            <button className="abt-button" style={{backgroundColor:"#534169"}}>Больше +</button>
                                        </CSSTransition>
                                        <div></div>
                                    </div>
                                <CSSTransition in={this.state.which===3} timeout={2900} classNames="alert">
                                <div className="animated" style={{backgroundColor:"#534169", maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>
                        
                        <div className="bottom-layer" >
                                <CSSTransition in={this.state.which===4}  timeout={2900} classNames="animtext">
                                    <h1 className="text">Миссия и принципы</h1>
                                </CSSTransition>
                                {this.state.which===4 &&

                                <div className="numbers">
                                    <div onClick={this.goBack}><i class="fas fa-arrow-circle-left"></i></div>
                                    <div onClick={()=>{this.goToPage(0)}}>01</div>
                                    <div onClick={()=>{this.goToPage(1)}}>02</div>
                                    <div onClick={()=>{this.goToPage(2)}}>03</div>
                                    <div style={{color:"#394674",opacity:"1"}}>04</div>
                                    <div onClick={()=>{this.goToPage(4)}}>05</div>
                                </div>
                                }
                                    <div className="popup">
                                    <CSSTransition in={this.state.which===4}  timeout={2900} classNames="animbutton">
                                        <button className="abt-button" style={{backgroundColor:"#394674"}}>Больше +</button>
                                    </CSSTransition>
                                    <div></div>
                                    </div>
                                <CSSTransition in={this.state.which===4} timeout={2900} classNames="alert">
                                <div className="animated" style={{backgroundColor:"#394674",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>
                        <div className="bottom-layer" >
                                <CSSTransition in={this.state.which===5}  timeout={2900} classNames="animtext">
                                    <h1 className="text">Контакты и местонахождение</h1>
                                </CSSTransition>
                                {this.state.which===5 &&

                                <div className="numbers">
                                    <div onClick={this.goBack}><i class="fas fa-arrow-circle-left"></i></div>
                                    <div onClick={()=>{this.goToPage(0)}}>01</div>
                                    <div onClick={()=>{this.goToPage(1)}}>02</div>
                                    <div onClick={()=>{this.goToPage(2)}}>03</div>
                                    <div onClick={()=>{this.goToPage(3)}}>04</div>
                                    <div style={{color:"#615175",opacity:"1"}}>05</div>
                                </div>
                                }
                                    <div className="popup">
                                        <CSSTransition in={this.state.which===5}  timeout={2900} classNames="animbutton">
                                            <button className="abt-button" style={{backgroundColor:"#615175"}}>Больше +</button>
                                        </CSSTransition>
                                    </div>
                                <CSSTransition in={this.state.which===5} timeout={2900} classNames="alert">
                                <div className="animated" style={{backgroundColor:"#615175",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>
                
                    

                </ReactPageScroller>
                   
                </div>
        )
    }
}


export default AboutUs;
