import React, { Component } from 'react';
import {  MDBContainer, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact";
import {CSSTransition} from 'react-transition-group';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../NavbarFolder';
import './index.css';
import Consult from '../Form/Consult';
import Footer from '../Footer';



export class Analitic extends Component {
    constructor(){
        super();
        this.state={
            isLoading:true,
            activeclient:"defense",
            activenum:1
        };
    }

    
    componentDidMount(){
        window.scrollTo(0,0);
        AOS.init({
            duration : 300
        });
        setTimeout(() => this.setState({ isLoading: false }), 3000); 
    }

    render() {
        return (
            <div>
                <header className="headerPrivate">
                    <div className="allhead">
                <Navbar/>      
                <MDBContainer>
                    <MDBCarousel
                        activeItem={1}
                        length={1}
                        showControls={false}
                        showIndicators={false}
                        className="z-depth-1"
                        style={{position:"absolute",top:0,zIndex:0,maxWidth:"100%",height:"75vh",left:0}}
                    >
                        <MDBCarouselInner>
                        <MDBCarouselItem className="car-item" itemId="1">
                            <MDBView>
                            <img
                                className="d-block w-100"
                                src={require('../../img/m-b-m-ZzOa5G8hSPI-unsplash.jpg')}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-strong"  />
                            </MDBView>
                            <MDBCarouselCaption className="texts-car analitic-car">
                                <span className="titlecarousel">Ваш финансовый <br/>аналитик</span>
                                <div className="pcarousel">Вдохновляйтесь инвестиционными идеями</div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Торговать </span></Link>/<span className="active"> Ваш финансовый аналитик</span></div></div>
                    <hr/>
                    <div className="numbers-all-mobile-invisible">
                    <div data-aos="zoom-in" ><h2 className="client-title">Как это работает</h2></div>
                    <div data-aos="zoom-in" style={{marginBottom:60}}  className="cl-mod-par">
                    Вам будет предоставлен личный инвестиционный аналитик, который будет сопровождать вас на
протяжение всего процесса. Вы будете получать различные инвестиционные идеи и ключевые
новостные события, который можете использовать в целях увеличения капитала.
                    </div>
                    <div data-aos="zoom-in">
                        <div   className="modal-element" style={{justifyContent:"space-around"}}>
                            <div onMouseEnter={()=>{this.setState({activenum:1})}} className={this.state.activenum===1 ? ("number-wrappers active-num"):("number-wrappers")}>
                                <div className="number-elements index1">
                                    <div className="number-index ">01</div>
                                    <div className="number-tex">Регистрация личного банковского счета </div>
                                </div>
                            </div>
                            <div onMouseEnter={()=>{this.setState({activenum:2})}}  className={this.state.activenum===2 ? ("number-wrappers active-num"):("number-wrappers")}>
                                <div className="number-elements index2">
                                    <div className="number-index">02</div>
                                    <div className="number-tex">Моментальное пополнение счета и получение инвестиционных идей </div>
                                </div>
                            </div>
                            <div onMouseEnter={()=>{this.setState({activenum:3})}}  className={this.state.activenum===3 ? ("number-wrappers active-num"):("number-wrappers")}>
                                <div className="number-elements index3">
                                    <div className="number-index">03</div>
                                    <div className="number-tex">Удобное исполнение сделок с различных устройств</div>
                                </div>
                            </div>
                        </div>
                        <div className={"number-desc-wrap"+this.state.activenum}>
                            {this.state.activenum===1 && <div className="number-desc desk1">Возможность открытия инвестиционного счета как дистанционно, так и при нахождении в офисе.
Доступное оформление документации, которые занимает 5-7 минут</div>}
                            {this.state.activenum===2 && <div className="number-desc desk2">Перевод денежных средств осуществляется как с местных, так и международных банков.
Инвестиционные идеи будут предоставлены по электронной почте, смс-сообщениями, а также
при личном звонке финансового аналитика</div>}
                            {this.state.activenum===3 &&<div className="number-desc desk3">Торгуйте через ПК или через мобильное приложение на iOS и Android.</div>}
                        </div>
                    </div>

                    <div className="btncarousel"  onClick={()=>{window.open("http://my.atlantfinance.com/registration?language=en")}}>Откройте счёт прямо сейчас</div>
                    </div>
                    <hr/>
                    <div style={{position:"relative",textAlign:"center",marginTop:30}} className="not-found" data-aos="zoom-in" >
                        <div><h2 className="client-title">Это не то, что вы искали?</h2></div>
                        <p>Ознакомьтесь с другими решениями «Atlant Finance»</p> 
                    
                        <div style={{justifyContent:"center"}} className="nav-element-dp">
                                <Link to="/investing/individual"> 
                                    <div style={{backgroundImage:"url("+require('../../img/helloquence-5fNmWej4tAA-unsplash.jpg')+")"}}  className="left-dp-elem"> 
                                    <span>Индивидуальный торговый счет</span> 
                                </div></Link>
                                                
                                <Link to="/trading/download-platform"> 
                                    <div style={{backgroundImage:"url("+require('../../img/m-b-m-ZzOa5G8hSPI-unsplash.jpg')+")"}}  className="left-dp-elem">
                                    <span>Программное обеспечение</span>
                                </div></Link>

                                <Link to="/investing/structural-products"> 
                                    <div style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}}  className="left-dp-elem">
                                    <span>Структурные продукты</span>
                                </div></Link>
                        </div>
                    </div>
                    <hr/>
                    <div style={{position:"relative",marginTop:30}}  data-aos="zoom-in" >
                        <div><h2 className="client-title">Заявка на консультацию</h2></div>
                        <p style={{textAlign:"center"}}>Оставьте заявку, и мы перезвоним вам в ближайшее время</p> 
                        <Consult/>
                    </div>
                    <hr style={{marginTop:30}}/>
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Торговать </span></Link>/<span className="active"> Ваш финансовый аналитик</span></div></div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default Analitic;
