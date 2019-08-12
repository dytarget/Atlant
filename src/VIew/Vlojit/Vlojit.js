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



export class Vlojit extends Component {
    constructor(){
        super();
        this.state={
            isLoading:true,
            activeclient:"all",
            one:true,
            two:false,
            three:false,
            activeopp:"find"
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
        var {one,two,three}=this.state;
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
                                src={require('../../img/alvaro-reyes-4eTnTQle0Ks-unsplash.jpg')}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-strong"  />
                            </MDBView>
                            <MDBCarouselCaption className="texts-car">
                                <span className="titlecarousel">Вложить и приумножить</span>
                                <div className="pcarousel">Ваш капитал под управлением профессионалов</div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span className="active"> Вложить </span></Link></div></div>
                    <hr/>

                    <div  className="ourClient">
                        <h2 className="client-title">Подберите решение</h2>
                           
                         <div >
                                            {one &&  <CSSTransition in={false} timeout={200} classNames="modalanim2">
                                                        <div className="modal-element">

                                                        <div onClick={()=>{this.props.history.push('/investing/structural-products')}} style={{backgroundImage:"url("+require('../../img/alvaro-reyes-4eTnTQle0Ks-unsplash.jpg')+")"}}  className="modal-elem-list"> 
                                                            <span className="modal-el-title">Структурные продукты</span> 
                                                            <div className="hovered-card card1">
                                                                    <span>
                                                                        <p className="hovered-title">Структурные продукты</p>
                                                                        <p className="hovered-text">Вы можете инвестировать средства с условием защиты вложенного капитала или получения фиксированной выплаты, а также дополнительно заработать на акциях, которыми владеете, в случае их роста</p>
                                                                    </span>
                                                                    <button className="hovered-button">Узнать больше</button>
                                                                </div>
                                                                
                                                        </div>

                                                        <div onClick={()=>{this.props.history.push('/investing/individual')}} style={{backgroundImage:"url("+require('../../img/denny-muller-XNTC5G1W3Xs-unsplash.jpg')+")"}}  className="modal-elem-list">
                                                        <span className="modal-el-title">Индивидуальный торговый счет</span>
                                                        <div className="hovered-card card2">
                                                                    <span>
                                                                        <p className="hovered-title">Индивидуальный торговый счет</p>
                                                                        <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                                    </span>
                                                                    <button className="hovered-button">Узнать больше</button>
                                                                </div>
                                                                
                                                        </div>

                                                        <div onClick={()=>{this.props.history.push('/investing/trusted-control')}} style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}}  className="modal-elem-list">
                                                        <span className="modal-el-title">Доверительное управление проект</span>
                                                        <div className="hovered-card card3">
                                                                    <span>
                                                                        <p className="hovered-title">Доверительное управление проект</p>
                                                                        <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                                    </span>
                                                                    <button className="hovered-button">Узнать больше</button>
                                                                </div>
                                                                
                                                        </div>
                                                        </div>
                                                        </CSSTransition>}

                                            {two &&   <CSSTransition in={false} timeout={200} classNames="modalanim2">
                                                        <div className="modal-element">

                                                        <div onClick={()=>{this.props.history.push('/investing/structural-products')}} style={{backgroundImage:"url("+require('../../img/alvaro-reyes-4eTnTQle0Ks-unsplash.jpg')+")"}}  className="modal-elem-list"> 
                                                            <span className="modal-el-title">Структурные продукты</span> 
                                                            <div className="hovered-card card1">
                                                                    <span>
                                                                        <p className="hovered-title">Структурные продукты</p>
                                                                        <p className="hovered-text">Вы можете инвестировать средства с условием защиты вложенного капитала или получения фиксированной выплаты, а также дополнительно заработать на акциях, которыми владеете, в случае их роста</p>
                                                                    </span>
                                                                    <button className="hovered-button">Узнать больше</button>
                                                                </div>
                                                                
                                                        </div>

                                                        <div onClick={()=>{this.props.history.push('/investing/individual')}} style={{backgroundImage:"url("+require('../../img/denny-muller-XNTC5G1W3Xs-unsplash.jpg')+")"}}  className="modal-elem-list">
                                                        <span className="modal-el-title">Индивидуальный торговый счет</span>
                                                        <div className="hovered-card card2">
                                                                    <span>
                                                                        <p className="hovered-title">Индивидуальный торговый счет</p>
                                                                        <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                                    </span>
                                                                    <button className="hovered-button">Узнать больше</button>
                                                                </div>
                                                                
                                                        </div>

                                                        <div onClick={()=>{this.props.history.push('/investing/trusted-control')}} style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}}  className="modal-elem-list">
                                                        <span className="modal-el-title">Доверительное управление проект</span>
                                                        <div className="hovered-card card3">
                                                                    <span>
                                                                        <p className="hovered-title">Доверительное управление проект</p>
                                                                        <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                                    </span>
                                                                    <button className="hovered-button">Узнать больше</button>
                                                                </div>
                                                                
                                                        </div>
                                                        </div>
                                                        </CSSTransition>
                                            }
                                            {three && <>
                                            <div style={{fontSize:"1.4rem"}} className="cl-mod-title">От трёх лет</div>
                                           <div className="modal-element">
                                                
                                           <div style={{backgroundImage:"url("+require('../../img/kevin-bhagat-zNRITe8NPqY-unsplash.jpg')+")"}}  className="modal-elem-list"> 
                                                    <span className="modal-el-title">Недвижимость США</span> 
                                                    <div className="hovered-card card1">
                                                        <span>
                                                            <p className="hovered-title">Базовый актив</p>
                                                            <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                </div>
                                                <div style={{backgroundImage:"url("+require('../../img/helloquence-5fNmWej4tAA-unsplash.jpg')+")"}}  className="modal-elem-list">
                                                <span className="modal-el-title">Интернет трейдинг на международном рынке</span>
                                                <div className="hovered-card card2">
                                                        <span>
                                                            <p className="hovered-title">Золото в тенге</p>
                                                            <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                   
                                                </div>

                                                <div style={{backgroundImage:"url("+require('../../img/m-b-m-ZzOa5G8hSPI-unsplash.jpg')+")"}}  className="modal-elem-list">
                                                <span className="modal-el-title">Снижение перед взлетом</span>
                                                <div className="hovered-card card3">
                                                        <span>
                                                            <p className="hovered-title">Ваш финансовый аналитик</p>
                                                            <p className="hovered-text">Этот продукт для вас, если вы хотите торговать самостоятельно, но при этом вам интересно получать актуальные инвестиционные идеи наших аналитиков </p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                </div>
                                               
                                            </div></>
                                        }
                         </div>
                    </div>
                    <hr style={{marginTop:50}}/>
                    <div ><h2 className="client-title">Вы решаете, как работают ваши деньги</h2></div>
                    <div  style={{marginBottom:60}}  className="cl-mod-par">
                    В последнее время банковские вклады приносят всё меньший доход, поэтому всё большую популярность завоёвывает инвестирование на финансовых рынках. Мы предлагаем различные инвестиционные решения: под разные цели, сроки и суммы — не требующие от вас опыта инвестирования и времени для управления.</div>
                    <div   className="modal-element anotherdiv" style={{justifyContent:"space-around"}}>
                        <div className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img src={require("../../img/understand.svg")} alt=""/>
                                <p>Понятные условия</p>
                                <div>Контроль сотношения "риск/потенциальная доходность"</div>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>Понятные условия</p>
                                <div>У структурных продуктов рыночный риск снижается за счёт полной защиты. При этом их доходность может существенно превышать ставки депозитов, находясь на уровне прямых инвестиций в фондовый рынок.</div>
                            </div>
                        </div>
                        <div  className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img src={require("../../img/complite.svg")} alt=""/>
                                <p>Готовые решения</p>
                                <div>Не требуется участие инвестора</div>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>Готовые решения</p>
                                <div>Структурные продукты относятся к пассивному инвестированию, то есть не требуют от инвестора каких-либо действий, кроме принятия решения о покупке продукта.</div>
                            </div>
                        </div>
                    </div>
                    <div  style={{marginTop:80}} className="cl-mod-par" >
                    Идеальное решение для тех, кто ищет <br/>
                    альтернативу банковскому вкладу
                    </div>

                    <hr/>
                    <div style={{position:"relative",textAlign:"center",marginTop:50}} className="not-found"  >
                        <div><h2 className="client-title">Это не то, что вы искали?</h2></div>
                        <p>Ознакомьтесь с другими решениями «Atlant Finance»</p> 
                    
                        <div className="nav-element-dp">
                                <Link to="/investing/structural-products"> 
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
                    <div style={{position:"relative",marginTop:50}} >
                        <div><h2 className="client-title">Заявка на консультацию</h2></div>
                        <p style={{textAlign:"center"}}>Оставьте заявку, и мы перезвоним вам в ближайшее время</p> 
                        <Consult/>
                    </div>
                    <hr style={{marginTop:50}}/>
                    <div style={{marginBottom:20}} className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<span className="active"> Вложить</span></div></div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default Vlojit;
