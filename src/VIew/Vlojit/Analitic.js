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
                        style={{position:"absolute",top:0,zIndex:0,maxWidth:"100%",height:"100vh",left:0}}
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
                    Так, как будто у вас есть свой личный биржевой аналитик. <br/>Он отправляет вам инвестидеи, вы исполняете их в три клика.
                    </div>
                    <div data-aos="zoom-in">
                        <div   className="modal-element" style={{justifyContent:"space-around"}}>
                            <div onMouseEnter={()=>{this.setState({activenum:1})}} className={this.state.activenum===1 ? ("number-wrappers active-num"):("number-wrappers")}>
                                <div className="number-elements index1">
                                    <div className="number-index ">01</div>
                                    <div className="number-tex">Оформите документы дистанционно </div>
                                </div>
                            </div>
                            <div onMouseEnter={()=>{this.setState({activenum:2})}}  className={this.state.activenum===2 ? ("number-wrappers active-num"):("number-wrappers")}>
                                <div className="number-elements index2">
                                    <div className="number-index">02</div>
                                    <div className="number-tex">Пополните счёт и получайте инвестидеи </div>
                                </div>
                            </div>
                            <div onMouseEnter={()=>{this.setState({activenum:3})}}  className={this.state.activenum===3 ? ("number-wrappers active-num"):("number-wrappers")}>
                                <div className="number-elements index3">
                                    <div className="number-index">03</div>
                                    <div className="number-tex">Исполняйте идеи прямо с телефона</div>
                                </div>
                            </div>
                        </div>
                        <div className={"number-desc-wrap"+this.state.activenum}>
                            {this.state.activenum===1 && <div className="number-desc desk1">Вам не нужно приезжать в офис, чтобы открыть счёт — всё можно сделать онлайн. Обычно это занимает 5-7 минут</div>}
                            {this.state.activenum===2 && <div className="number-desc desk2">Переведите деньги на свой счёт из любого российского банка. Идеи будут приходить по SMS и email</div>}
                            {this.state.activenum===3 &&<div className="number-desc desk3">Без сложных программ — торгуйте в личном кабинете или через мобильное приложение на iOS и Android</div>}
                        </div>
                    </div>
                    </div>
                    <hr/>

                    <div data-aos="zoom-in"  className="ourClient">
                        <h2 className="client-title">Откройте счёт прямо сейчас</h2>
                        <div  style={{marginBottom:40}} className="cl-mod-par" >
                        Без минимальной суммы, абонентской платы и скрытых комиссий
                        </div>
                            <div className="modal-zb">
                                <div className="modal-left" onClick={()=>{this.setState({activeclient:"defense"});window.scrollTo(0,window.scrollY+1)}} style={this.state.activeclient==="defense" ? {backgroundColor:"#F3F5F6",color:"#73808D"}:{}}>Универсальный</div>
                                <div className="modal-right" onClick={()=>{this.setState({activeclient:"kupon"});window.scrollTo(0,window.scrollY+1)}} style={this.state.activeclient==="kupon" ? {background:"#F3F5F6",color:"#73808D"}:{}}>Инвестор</div>
                            </div>


                         <div >
                                {this.state.activeclient==="defense" ? (
                                    <h2 className="client-title">Тариф "Универсальный"</h2>
                                ):(
                                    <h2 className="client-title">Тариф "Инвестор"</h2> 
                                )}

                                {this.state.activeclient==="defense" ? (
                                    <div className="car-anal">
                                        <div  style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}} className="car-anal-elem">
                                            <div className="afterhas"></div>
                                            <p>Ваш финансовый аналитик</p>
                                            <div>с тарифом "Универсальный"</div>
                                            <div>"Для тех кто хочет получать торговые идеи от "Atlant Finance", а также реализовывать собственные</div>
                                        </div>  
                                        <div className="car-anal-elem">
                                            <ul>
                                                <li>Торговые идеи от аналитиков по SMS и email</li>
                                                <li>Простое исполненияе идей в мобильном приложении на iOS и Android</li>
                                                <li>Комиссия за сделки включает биржевой сбор</li>
                                            </ul>
                                        </div>                 
                                    </div>
                                ):(
                                    <div className="car-anal">
                                        <div style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}} className="car-anal-elem">
                                            <div className="afterha"></div>
                                            <p>Ваш финансовый аналитик</p>
                                            <div>с тарифом "Инвестор" </div>
                                            <div>"Для тех кто хочет получать торговые идеи от "Atlant Finance"</div>
                                        </div>   
                                        <div className="car-anal-elem">
                                            <ul>
                                                <li>Торговые идеи от аналитиков по SMS и email</li>
                                                <li>Простое исполненияе идей в мобильном приложении на iOS и Android</li>
                                                <li>Комиссия за сделки включает биржевой сбор</li>
                                            </ul>
                                        </div>   
                                    </div>
                                )}
                                   <div className="why-wrapper gg">
                                        <div className="why-elem">
                                            <div className="left-why">
                                                <i class="far fa-thumbs-up"></i>
                                            </div>
                                            <div style={{fontSize:"1rem"}} className="right-why">
                                                <span style={{color:"black",fontWeight:"bolder"}}>Сопровождение счёта <br/></span> 
                                               
                                                {this.state.activeclient==="defense" ? (' 0,17% в месяц,но не менее 400 рублей'):('175 рублей в месяц при наличии сделок')}
                                            </div>
                                        </div>
                                        <div className="why-elem">
                                                <div className="left-why">
                                                    <i class="fas fa-lock"></i>
                                                </div>
                                                <div style={{fontSize:"1rem"}} className="right-why">
                                                <span style={{color:"black",fontWeight:"bolder"}}>Комиссия за сделки <br/></span> 
                                                {this.state.activeclient==="defense" ? (0.057):(0.27)}% независимо от торгового оборота
                                                </div>
                                        </div>
                                        <div className="why-elem">
                                                <div className="left-why">
                                                        <i class="far fa-handshake"></i>
                                                </div>
                                                <div style={{fontSize:"1rem"}} className="right-why">
                                                    <span style={{color:"black",fontWeight:"bolder"}}>О. InveStore! <br/></span> 
                                                    {this.state.activeclient==="defense" ? (4):(3)}% кэшбек за сделки на бирже
                                                </div>
                                        </div>
                                    </div>
                         </div>
                    </div>
                    <hr/>
                    <div>
                        <div><h2 className="client-title">В чём преимущества?</h2></div>
                        <div className="best-broker lolita">
                            <div className="best-broker-elem">
                                <img src="https://open-broker.ru/static/icons/rocket.svg" alt=""/>
                                <span>Быстрый <br/> старт</span>
                                <div className="cl-mod-par">Открытие счёта онлайн и доступ к торгам уже сегодня</div>
                            </div>
                            <div className="best-broker-elem">
                                <img src="https://open-broker.ru/static/icons/input-output.svg" alt=""/>
                                <span>Оперативный ввод-вывод денег</span>
                                <div className="cl-mod-par">Простота и оперативность зачислений, переводов и выводов денежных средств</div>
                            </div>
                            <div className="best-broker-elem">
                                <img src="https://open-broker.ru/static/icons/wallet.svg" alt=""/>
                                <span>Отсутствие скрытых комиссий</span>
                                <div className="cl-mod-par">Комиссия брокера взимается только при совершении сделок. Нет сделок — нет комиссии брокера</div>
                            </div>
                        </div>
                        <Link to="/abouts"><div style={{margin:"0 auto",textAlign:"center",width:"300px"}} className="btncarousel">Подробнее о компании</div></Link>
                    </div>
                    <div style={{position:"relative",textAlign:"center",marginTop:50}} className="not-found" data-aos="zoom-in" >
                        <div><h2 className="client-title">Это не то, что вы искали?</h2></div>
                        <p>Ознакомьтесь с другими решениями «Atlant Finance»</p> 
                    
                        <div style={{justifyContent:"center"}} className="nav-element-dp">
                                <Link to="/investing/individual"> 
                                    <div style={{backgroundImage:"url("+require('../../img/helloquence-5fNmWej4tAA-unsplash.jpg')+")"}}  className="left-dp-elem"> 
                                    <span>Индивидуальный торговый счет</span> 
                                </div></Link>
                                                
                                <Link to="/trading/download-platform"> 
                                    <div style={{backgroundImage:"url("+require('../../img/m-b-m-ZzOa5G8hSPI-unsplash.jpg')+")"}}  className="left-dp-elem">
                                    <span>Торговая платформа</span>
                                </div></Link>

                                <Link to="/trading/your-financial-analyst"> 
                                    <div style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}}  className="left-dp-elem">
                                    <span>Ваш финансовый аналитик</span>
                                </div></Link>
                        </div>
                    </div>
                    <div style={{position:"relative",marginTop:50}}  data-aos="zoom-in" >
                        <div><h2 className="client-title">Заявка на консультацию</h2></div>
                        <p style={{textAlign:"center"}}>Оставьте заявку, и мы перезвоним вам в ближайшее время</p> 
                        <Consult/>
                    </div>
                    <hr style={{marginTop:50}}/>
                    <div style={{marginBottom:20}} className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Торговать </span></Link>/<span className="active"> Ваш финансовый аналитик</span></div></div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default Analitic;
