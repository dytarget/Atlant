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
                        style={{position:"absolute",top:0,zIndex:0,maxWidth:"100%",height:"75vh",left:0}}
                    >
                        <MDBCarouselInner>
                        <MDBCarouselItem className="car-item" itemId="1">
                            <MDBView>
                            <img
                                className="d-block w-100"
                                src={require('../../img/dark.jpg')}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-strong"  />
                            </MDBView>
                            <MDBCarouselCaption className="texts-car analitic-car">
                                <span className="titlecarousel">Программное обеспечение</span>
                                <div className="pcarousel">Торговая платформа — это специальное
программное обеспечение, позволяющее трейдеру получить доступ к финансовым рынкам в режиме
онлайн и совершать финансовые операции.</div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/trading"><span> Торговать </span></Link>/<span className="active"> Программное обеспечение</span></div></div>
                    <hr/>
                    <div className="numbers-all-mobile-invisible">
                    <div data-aos="zoom-in" ><h2 className="client-title">Виды торговых платформ</h2></div>
                    <div data-aos="zoom-in" style={{marginBottom:60}}  className="cl-mod-par">Наша компания дает Вам возможность воспользоваться профессиональными торговыми платформами. Благодаря сотрудничеству с компанией Utip Technologies, Exante, а также Swissquote, мы имеем точные котировки с моментальным исполнением сделок.
                    </div>
                    <div data-aos="zoom-in"  className="modal-element anotherdiv" style={{justifyContent:"space-around"}}>
                        <div className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img style={{width:'150px'}} src={require("../../img/understand.svg")} alt=""/>
                                <p>Atlant Fin Station. </p>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>Atlant Fin Station. </p>
                                <div>Наиболее простая в использовании торговая платформа, подходит для начинающих трейдеров.</div>
                            </div>
                        </div>
                        <div className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img src={require("../../img/solid_vertical_1200x800.png")} alt=""/>
                                <p>Exante</p>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>Exante</p>
                                <div>Платформа нового поколения, в которой используются последние тренды и самые актуальные технологии. Она идеально подходит для трейдеров, управляющих активами и аналитиков. Скачав платформу, вы можете совершать сделки с 50 000 различных инструментов.</div>
                            </div>
                        </div>
                        <div  className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img style={{paddingBottom:60,paddingTop:20}} src={require("../../img/pngfind.com-special-offer-button-png-893001.png")} alt=""/>
                                <p>Thinkorswim</p>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>Thinkorswim</p>
                                <div>Электронная торговая платформа TD Ameritrade, используемая для торговли финансовыми активами. Он предназначен для самостоятельных трейдеров акций, опционов и фьючерсов</div>
                            </div>
                        </div>
                        <div  className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img src={require("../../img/Logotip_Foreks_brokera_Swissquote.png")} alt=""/>
                                <p>Swissquote</p>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>Swissquote</p>
                                <div>Для торговли Swissquote предлагает знаменитую платформу  Metatrader 4 и AdvancedTrader,который позволяет легко исполнять сложные ордера, отсутствующие на других платформах</div>
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
                    <div data-aos="zoom-in" ><h2 className="client-title">Десктопная торговая платформа</h2></div>
                     <Link onClick={()=>{window.open("http://atlantreal.utip-download.com/tradersetup.exe")}} ><div className="modal-button">Скачать платформу</div></Link>
                     
                     <div data-aos="zoom-in" ><h2 className="client-title">Мобильная торговая платформа</h2></div>
                     <div style={{margin:'20px auto',textAlign:'center'}}>
                     <a  href onClick={()=>{window.open('https://play.google.com/store/apps/details?id=universal.trading.information.platform&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1')}}><img style={{width:'200px'}} alt='Доступно в Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/ru_badge_web_generic.png'/></a>
                     <a  href onClick={()=>{window.open('https://apps.apple.com/ru/app/utip-mobile/id1069332482')}}><img style={{width:'200px'}} src="https://s3.open-broker.ru/site/files/public/GpJOne7bPXeRg694QkoG4m56/appstore.png"></img></a>
                     </div>
                     <hr/>
                    <div style={{position:"relative",textAlign:"center",marginTop:20}} className="not-found" data-aos="zoom-in" >
                        <div><h2 className="client-title">Это не то, что вы искали?</h2></div>
                        <p>Ознакомьтесь с другими решениями «Atlant Finance»</p> 
                    
                        <div style={{justifyContent:"center"}} className="nav-element-dp">
                                <Link to="/investing/individual"> 
                                    <div style={{backgroundImage:"url("+require('../../img/helloquence-5fNmWej4tAA-unsplash.jpg')+")"}}  className="left-dp-elem"> 
                                    <span>Индивидуальный торговый счет</span> 
                                </div></Link>
                                                
                                <Link to="/investing/structural-products"> 
                                    <div style={{backgroundImage:"url("+require('../../img/chicago-690364_1920.jpg')+")"}}  className="left-dp-elem">
                                    <span>Структурные продукты</span>
                                </div></Link>

                                <Link to="/trading/your-financial-analyst"> 
                                    <div style={{backgroundImage:"url("+require('../../img/office-932926_1920.jpg')+")"}}  className="left-dp-elem">
                                    <span>Ваш финансовый аналитик</span>
                                </div></Link>
                        </div>
                    </div>
                    <hr/>
                    <div style={{position:"relative",marginTop:20}}  >
                        <div><h2 className="client-title">Заявка на консультацию</h2></div>
                        <p style={{textAlign:"center"}}>Оставьте заявку, и мы перезвоним вам в ближайшее время</p> 
                        <Consult/>
                    </div>
                    <hr/>
                    <div  className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/trading"><span> Торговать </span></Link>/<span className="active"> Программное обеспечение</span></div></div>
                </section>
                <Footer/>
            </div>
        )
    }
}
export default DownloadPlatform;
