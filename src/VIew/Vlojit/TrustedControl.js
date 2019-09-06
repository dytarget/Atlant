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



export class TrustedControl extends Component {
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
                                src={require('../../img/office-932926_1920.jpg')}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-strong"  />
                            </MDBView>
                            <MDBCarouselCaption className="texts-car analitic-car">
                                <span className="titlecarousel">Доверительное управление</span>
                                <div className="pcarousel">Доверительное управление активами предоставляет Вам возможность увеличить свой капитал, затрачивая на это минимальное количество времени и усилий</div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Инвестировать </span></Link>/<span className="active"> Доверительное управление</span></div></div>
                    <hr/>
                    <div className="numbers-all-mobile-invisible">
                    <div data-aos="zoom-in" ><h2 className="client-title">Доверительное управление</h2></div>
                    <div data-aos="zoom-in" style={{marginBottom:60}}  className="cl-mod-par">
                    Доверительное управление активами предоставляет Вам возможность увеличить свой капитал, затрачивая на это минимальное количество времени и усилий. Для этого наши профессиональные управляющие – специалисты инвестиционного рынка займутся этим. Услуги доверительного управления дают возможность инвестору принимать решение. Например, инвестор может определять желаемый уровень диверсификации портфеля, ожидаемую доходность и его защищенность                    </div>
                    <div data-aos="zoom-in">
                        <div   className="modal-element" style={{justifyContent:"space-around"}}>
                            <div onMouseEnter={()=>{this.setState({activenum:1})}} className={this.state.activenum===1 ? ("number-wrappers active-num"):("number-wrappers")}>
                                <div className="number-elements index1">
                                    <div className="number-index ">01</div>
                                    <div className="number-tex">Персональный график выплаты дивидендов</div>
                                </div>
                            </div>
                            <div onMouseEnter={()=>{this.setState({activenum:2})}}  className={this.state.activenum===2 ? ("number-wrappers active-num"):("number-wrappers")}>
                                <div className="number-elements index2">
                                    <div className="number-index">02</div>
                                    <div className="number-tex">Ожидаемая доходность заданном уровне риска</div>
                                </div>
                            </div>
                            <div onMouseEnter={()=>{this.setState({activenum:3})}}  className={this.state.activenum===3 ? ("number-wrappers active-num"):("number-wrappers")}>
                                <div className="number-elements index3">
                                    <div className="number-index">03</div>
                                    <div className="number-tex">Индивидуальные пожелания инвестора</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <hr/>                 
                    <div data-aos="zoom-in"  ><h2 className="client-title">Доверяя активы профессионалам</h2></div>
                    <div data-aos="zoom-in" style={{marginBottom:60}}  className="cl-mod-par">
                    Если вы готовы поручить профессионалу управление вашим капиталом и принятие инвестиционных решений – этот сервис для вас. Всё, что вам нужно – выбрать стратегию и заключить договор доверительного управления. Остальную работу сделают профессионалы.
                    </div>
                    <div data-aos="zoom-in"  className="modal-element anotherdiv" style={{justifyContent:"space-around"}}>
                    <Link to="/investing/structural-products"><div className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img src={require("../../img/understand.svg")} alt=""/>
                                <p>Готовые решения</p>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>Готовые решения</p>
                                <div>Вы можете выбрать одну из готовых и оптимально составленных стратегий. Они рассчитаны на разные стили управления – от консервативного до агрессивного.</div>
                            </div>
                        </div></Link>
                        <div className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img src={require("../../img/fixed-period.svg")} alt=""/>
                                <p>Эффективное управление</p>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>Эффективное управление</p>
                                <div>Вы доверяете капитал профессиональным управляющим с многолетним опытом работы. Принцип отбора инструментов и особенности управления отражены в декларации.</div>
                            </div>
                        </div>
                        <div  className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img src={require("../../img/complite.svg")} alt=""/>
                                <p>Участие</p>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>Участие</p>
                                <div>Вам необходимо выбрать только стратегию, срок и комфортный капитал для инвестиций. Всю остальную работу сделают портфельные управляющие.</div>
                            </div>
                        </div>
                    </div>
                    <hr style={{margin:"60px 0px"}}/>
{/* 
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
                                            <button className="hovered-button">Открыть счет онлайн</button>
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
                                            <button className="hovered-button">Открыть счет онлайн</button>
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
                    </div> */}
                  
                    <div style={{position:"relative",textAlign:"center",marginTop:10}} className="not-found" data-aos="zoom-in" >
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

                                <Link to="/trading/your-financial-analyst"> 
                                    <div style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}}  className="left-dp-elem">
                                    <span>Ваш финансовый аналитик</span>
                                </div></Link>
                        </div>
                    </div>
                    <hr/>
                    <div style={{position:"relative",marginTop:10}}  >
                        <div><h2 className="client-title">Заявка на консультацию</h2></div>
                        <p style={{textAlign:"center"}}>Оставьте заявку, и мы перезвоним вам в ближайшее время</p> 
                        <Consult/>
                    </div>
                    <hr />
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Инвестировать </span></Link>/<span className="active"> Доверительное управление</span></div></div>
                </section>
                <Footer/>
            </div>
        )
    }
}
export default TrustedControl;
