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



export class DownloadPlatform extends Component {
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
                                <span className="titlecarousel">Скачать Торговую платформу</span>
                                <div className="pcarousel">Торговая платформа (или как ее еще называют, торговый терминал) — это специальное
программное обеспечение, позволяющее трейдеру иметь доступ финансовому рынку в режиме
онлайн и совершать финансовые операции на ней.</div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Торговать </span></Link>/<span className="active"> Скачать Торговую платформу</span></div></div>
                    <hr/>
                    <div className="numbers-all-mobile-invisible">
                    <div data-aos="zoom-in" ><h2 className="client-title">Atlant Fin Station.</h2></div>
                    <div data-aos="zoom-in" style={{marginBottom:60}}  className="cl-mod-par">Наша компания дает Вам возможность воспользоваться профессиональной торговой платформой
Atlant Fin Station. Благодаря сотрудничеству с компанией Utip Technologies, мы имеем точные
котировки с моментальным исполнением сделок.
                    </div>
                    <div data-aos="zoom-in"  className="modal-element anotherdiv" style={{justifyContent:"space-around"}}>
                        <div className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img src={require("../../img/understand.svg")} alt=""/>
                                <p>Уровень безопасности</p>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>Уровень безопасности</p>
                                <div>Наша платформа обеспечивает высокий уровень безопасности и конфиденциальности Вашего
капитала.</div>
                            </div>
                        </div>
                        <div className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img src={require("../../img/fixed-period.svg")} alt=""/>
                                <p>Более 10 различных инструментов</p>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>Более 10 различных инструментов</p>
                                <div>Платформа имеет более 10 различных инструментов для профессиональной торговли.
                                Присутствую такие инструменты как: Акции США, Россия, Межбанковские валютные пары,
                                Фьючерсы, Фондовые индексы и т.д.</div>
                            </div>
                        </div>
                        <div  className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img src={require("../../img/complite.svg")} alt=""/>
                                <p>На различных устройствах:</p>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>На различных устройствах:</p>
                                <div>Платформой можно пользоваться на различных устройствах: ПК, мобильные устройства, планшет.</div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <hr style={{margin:'40px 0'}}/>                 
                   
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
                    <div>
                        <div><h2 className="client-title">Пошаговая инструкция</h2></div>
                        <div className="best-broker lolita">
                            <div className="best-broker-elem">
                                <img src={require('../../img/dollar.png')} alt=""/>
                                <span>Собрать первичную информацию о клиенте!</span>
                                <div className="cl-mod-par">рассказать, что такое рынок, какие основные задачи рынка, как можно им пользоваться,
что такое акции валюты и т.д, как они приносят прибыль, кто мы в этой системе, каковы
основные участники.</div>

                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/savings.png')} alt=""/>
                                <span>Узнать у клиента
о его бизнесе работе вложениях!</span>                                <div className="cl-mod-par">фундаментальный анализ, объяснить, как экономические политические и другие факторы,
могут позволить нам получить прибыль на рынке. Дать понять, что банковские депозиты
не приносят нужные доходы а инфляция все съедает. Что бы в дальнейшем при продаже
инвестиционной идеи клиент мог понять, как она ему принесет прибыль.</div>

                            </div>
                           
                           
                            <div className="best-broker-elem">
                                <img src={require('../../img/id-card.png')} alt=""/>
                                <span>Открыть демо счет, узнать какая комфортная сумма для клиента для торговли.</span>
                                <div className="cl-mod-par">Торговый терминал. Показать клиенту практически как совершаются все сделки на рынке,
как говорится лучше прокатиться на машине, нежели слушать на сколько она классная,
пусть клиент почувствует это на демонстрационном счете. Показать основные виды
ордеров.</div>

                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/commerce.png')} alt=""/>
                                <span>Совершить продажу ни клиента, дать грамотную идею!</span>
                                <div className="cl-mod-par">технический анализ. Показать клиенту как можно прогнозировать рынок минуя
информационное поле. Внедрить основные аспекты инструментов этого анализа, а также
включить Фиббоначчи и т.д. Какие основные фигуры можно наблюдать на графике.</div>
                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/atm.png')} alt=""/>
                                <span>Рассчитать для его
капитала месячный доход!</span>
                                <div className="cl-mod-par">Правила MM, клиент должен понять, что это инвестиции, которые требуют правильного
распределения капитала, что бы максимально обеспечить себе защиту и выручить
наибольшую доходность с рынка, а также применить основные стратегии торговли,
которые можно использовать в различных ситуациях на рынке.</div>
                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/exchange.png')} alt=""/>
                                <span>Уже закрыть клиента!!! </span>
                                <div className="cl-mod-par">Индикаторы, то что может помочь нам в прогнозирование рынка, основные индикаторы
MACD, MA, стохастик, RSI и т.д.</div>

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
                    <div style={{position:"relative",marginTop:50}}  >
                        <div><h2 className="client-title">Заявка на консультацию</h2></div>
                        <p style={{textAlign:"center"}}>Оставьте заявку, и мы перезвоним вам в ближайшее время</p> 
                        <Consult/>
                    </div>
                    <hr style={{marginTop:50}}/>
                    <div style={{marginBottom:20}} className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Вложить </span></Link>/<span className="active"> Доверительное управление</span></div></div>
                </section>
                <Footer/>
            </div>
        )
    }
}
export default DownloadPlatform;
