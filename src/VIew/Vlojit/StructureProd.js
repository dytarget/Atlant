import React, { Component } from 'react';
import {  MDBContainer, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact";
import {CSSTransition} from 'react-transition-group';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LineChart, PieChart ,AreaChart} from 'react-chartkick';
import Navbar from '../NavbarFolder';
import './index.css';
import Consult from '../Form/Consult';
import Footer from '../Footer';
import 'chart.js';
import Charts from '../Charts';



export class StructureProd extends Component {
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
        setInterval(()=>{
            let temp=this.state.activenum+1;
            if (temp>3) {
                temp=1;
            }
            this.setState({activenum:temp});
        },5500);
    }

    render() {
        var texts=[{
            title:'Technology Select Sector',
            description:'Структурный продукт на рост акций ETF XLK',
            percentage:"31.32%",
            color:"linear-gradient(45deg, rgb(248, 123, 49) 0%, rgb(251, 158, 16) 100%)"
        },
        {
            title:'FedEx',
            description:'Структурный продукт на рост акций FedEx',
            percentage:"33.62%",
            color:"linear-gradient(45deg, rgb(175, 56, 61) 0%, rgb(206, 34, 41) 100%)"

        },
        {
            title:'Visa Inc',
            description:'Структурный продукт на рост акций Visa',
            percentage:"33.1%",
            color:"linear-gradient(45deg, rgb(32, 135, 205) 0%, rgb(5, 148, 211) 100%)"
        }
    ]
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
                                src={require('../../img/alvaro-reyes-4eTnTQle0Ks-unsplash.jpg')}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-strong"  />
                            </MDBView>
                            <MDBCarouselCaption className="texts-car">
                                <span className="titlecarousel">Структурные продукты</span>
                                <div className="pcarousel">Особые готовые инвестиционные решения</div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Инвестировать </span></Link>/<span className="active"> Структурные продукты</span></div></div>
                    <hr/>
                    <div data-aos="zoom-in" ><h2 className="client-title">Структурные продукты</h2></div>
                    <div data-aos="zoom-in" style={{marginBottom:60}}  className="cl-mod-par">
                    Структурные продукты – это особые готовые инвестиционные решения, созданные для
максимально эффективной работы капитала и обеспечивающие максимальную защиту. Данные
решения генерируются за счет комплексной финансовой стратегии из различных финансовых
инструментов. Применяется в аналогию банковским вкладам.                    </div>
                    <div data-aos="zoom-in"  className="modal-element anotherdiv" style={{justifyContent:"space-around"}}>
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
                        <div className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img src={require("../../img/fixed-period.svg")} alt=""/>
                                <p>Фиксированный срок</p>
                                <div>Инвестиции на срок от 1 месяца до 3 лет</div>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>Фиксированный срок</p>
                                <div>Структурный продукт всегда характеризуется заданным сроком инвестирования и имеет дату погашения. Вы точно знаете, когда освободятся ваши средства.</div>
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
                    <hr style={{margin:"45px 0px"}}/>
                    <div data-aos="zoom-in"  className="ourClient">
                        <h2 className="client-title">Виды инвестиционных портфелей</h2>
                            <div className="modal-zb">
                                <div className="modal-left" onClick={()=>{this.setState({activeclient:"defense"});window.scrollTo(0,window.scrollY+1)}} style={this.state.activeclient==="defense" ? {backgroundColor:"#F3F5F6",color:"#73808D",width:"36.5vw"}:{width:"36.5vw"}}>Консервативный</div>
                                <div className="modal-center" onClick={()=>{this.setState({activeclient:"kupon"});window.scrollTo(0,window.scrollY+1)}} style={this.state.activeclient==="kupon" ? {background:"#F3F5F6",color:"#73808D",width:"27.5vw"}:{width:"27.5vw"}}>Умеренный</div>
                                <div className="modal-right" onClick={()=>{this.setState({activeclient:"dohod"});window.scrollTo(0,window.scrollY+1)}} style={this.state.activeclient==="dohod" ? {background:"#F3F5F6",color:"#73808D",width:"29.5vw"}:{width:"29.5vw"}}>Агрессивный</div>
                            </div>
                        <div className="cl-mod-title">{this.state.activeclient==="defense" ? "Консервативный (защитный)" : (this.state.activeclient==="kupon" ? "Умеренный (стабильный)":"Агрессивный (доходный)")}</div>
                        
                        <div className="cl-mod-par">{this.state.activeclient==="defense" ? "Инвестиционный портфель состоит из государственных ценных бумаг,акций «голубых фишек», золота и обеспечивает высокую защищенность составляющих и портфеля в целом, а доходность инвестиционного портфеля сохраняется на необходимом инвестору уровне." : (
                            this.state.activeclient==="kupon" ? "Оптимизация по доходности и степени риска — характерная черта умеренного инвестиционного портфеля. В таком портфеле находятся как высокодоходные бумаги с высокой степенью риска, так и низкодоходные надежные бумаги.": 
                            "Агрессивный инвестиционный портфель укомплектован высокодоходными ценными бумагами, включая их дериваты. Эти ценные бумаги имеют достаточно высокую степень риска.")}</div>
                         <div >
                                {this.state.activeclient==="defense" ? (
                                           <div className="modal-element">
                                               

                                                <div /*style={{backgroundImage:"url("+require('../../img/helloquence-5fNmWej4tAA-unsplash.jpg')+")"}} */ style={{opacity:0}} className="modal-elem-list">
                                                {/* <span className="modal-el-title">Интернет трейдинг на международном рынке</span>
                                                <div className="hovered-card card2">
                                                        <span>
                                                            <p className="hovered-title">Золото в тенге</p>
                                                            <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div> */}
                                                   
                                                </div>

                                                <Link to="/investing/structural-products/conservative"><div style={{borderRadius:25,backgroundImage:"url("+require('../../img/typewriter-407695_1920.jpg')+")"}}  className="modal-elem-list"> 
                                                    <span className="modal-el-title">Консервативный (защитный)</span> 
                                                    <div style={{borderRadius:25}} className="hovered-card card1">
                                                        <span>
                                                            <p className="hovered-title">Срок инвестиций</p>
                                                            <p className="hovered-text">от 1 года</p>
                                                            <p className="hovered-title">Доходность</p>
                                                            <p className="hovered-text">36% в иностранной валюте</p>
                                                            <p className="hovered-title">Защита капитала</p>
                                                            <p className="hovered-text">Полная гарантийное обеспечение капитала на уровне 100 процентов</p>
                                                        </span>
                                                    </div>
                                                </div></Link>

                                                <div /*style={{backgroundImage:"url("+require('../../img/m-b-m-ZzOa5G8hSPI-unsplash.jpg')+")"}}*/ style={{opacity:0}}  className="modal-elem-list">
                                                {/* <span className="modal-el-title">Снижение перед взлетом</span>
                                                <div className="hovered-card card3">
                                                        <span>
                                                            <p className="hovered-title">Ваш финансовый аналитик</p>
                                                            <p className="hovered-text">Этот продукт для вас, если вы хотите торговать самостоятельно, но при этом вам интересно получать актуальные инвестиционные идеи наших аналитиков </p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div> */}
                                                </div>
                                            </div>
                                ):(this.state.activeclient==="kupon" ? (
                                            <div className="modal-element">   
                                               <div /*style={{backgroundImage:"url("+require('../../img/helloquence-5fNmWej4tAA-unsplash.jpg')+")"}} */ style={{opacity:0}} className="modal-elem-list">
                                               {/* <span className="modal-el-title">Интернет трейдинг на международном рынке</span>
                                               <div className="hovered-card card2">
                                                       <span>
                                                           <p className="hovered-title">Золото в тенге</p>
                                                           <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                       </span>
                                                       <button className="hovered-button">Узнать больше</button>
                                                   </div> */}
                                                  
                                               </div>

                                               <Link to="/investing/structural-products/umerennyi"> <div style={{borderRadius:25,backgroundImage:"url("+require('../../img/money-2696234_1920.jpg')+")"}}  className="modal-elem-list"> 
                                                   <span className="modal-el-title">Умеренный</span> 
                                                   <div style={{borderRadius:25}} className="hovered-card card1">
                                                       <span>
                                                           <p className="hovered-title">Срок инвестиций</p>
                                                           <p className="hovered-text">от 1 года</p>
                                                           <p className="hovered-title">Доходность</p>
                                                           <p className="hovered-text">свыше 36% в иностранной валюте</p>
                                                           <p className="hovered-title">Защита капитала</p>
                                                           <p className="hovered-text">Гарантийное обеспечение капитала на уровне 60 процентов</p>
                                                       </span>
                                                   </div>
                                               </div></Link>

                                               <div /*style={{backgroundImage:"url("+require('../../img/m-b-m-ZzOa5G8hSPI-unsplash.jpg')+")"}}*/ style={{opacity:0}}  className="modal-elem-list">
                                               {/* <span className="modal-el-title">Снижение перед взлетом</span>
                                               <div className="hovered-card card3">
                                                       <span>
                                                           <p className="hovered-title">Ваш финансовый аналитик</p>
                                                           <p className="hovered-text">Этот продукт для вас, если вы хотите торговать самостоятельно, но при этом вам интересно получать актуальные инвестиционные идеи наших аналитиков </p>
                                                       </span>
                                                       <button className="hovered-button">Узнать больше</button>
                                                   </div> */}
                                               </div>
                                           </div>      
                                ):(

                                    <div className="modal-element">   
                                    <div /*style={{backgroundImage:"url("+require('../../img/helloquence-5fNmWej4tAA-unsplash.jpg')+")"}} */ style={{opacity:0}} className="modal-elem-list">
                                    {/* <span className="modal-el-title">Интернет трейдинг на международном рынке</span>
                                    <div className="hovered-card card2">
                                            <span>
                                                <p className="hovered-title">Золото в тенге</p>
                                                <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                            </span>
                                            <button className="hovered-button">Узнать больше</button>
                                        </div> */}
                                       
                                    </div>

                                    <Link to="/investing/structural-products/aggressive"> <div style={{borderRadius:25,backgroundImage:"url("+require('../../img/chicago-690364_1920.jpg')+")"}}  className="modal-elem-list"> 
                                        <span className="modal-el-title">Агрессивный</span> 
                                        <div style={{borderRadius:25}} className="hovered-card card1">
                                            <span>
                                                <p className="hovered-title">Срок инвестиций</p>
                                                <p className="hovered-text">от 1 года</p>
                                                <p className="hovered-title">Доходность</p>
                                                <p className="hovered-text">Деление полученной прибыли в равных долях</p>
                                                <p className="hovered-title">Защита капитала</p>
                                                <p className="hovered-text">Гарантийное обеспечение капитала на уровне 50 процентов</p>
                                            </span>
                                        </div>
                                    </div></Link>

                                    <div /*style={{backgroundImage:"url("+require('../../img/m-b-m-ZzOa5G8hSPI-unsplash.jpg')+")"}}*/ style={{opacity:0}}  className="modal-elem-list">
                                    {/* <span className="modal-el-title">Снижение перед взлетом</span>
                                    <div className="hovered-card card3">
                                            <span>
                                                <p className="hovered-title">Ваш финансовый аналитик</p>
                                                <p className="hovered-text">Этот продукт для вас, если вы хотите торговать самостоятельно, но при этом вам интересно получать актуальные инвестиционные идеи наших аналитиков </p>
                                            </span>
                                            <button className="hovered-button">Узнать больше</button>
                                        </div> */}
                                    </div>
                                </div>      
                                ))}
                         </div>
                    </div>
                    <hr/>
                    {/* <div className="idea-wrap">
                        <div><h2 className="client-title">Вкладывайте в готовые решения</h2></div>
                        <div className="idea">
                            <div style={{backgroundImage:texts[this.state.activenum-1].color}} className="ideaLeft">
                                <div className="absoluted">
                                    <h6>{texts[this.state.activenum-1].title}</h6>
                                    <p>{texts[this.state.activenum-1].description}</p>
                                    
                                    <div className="percent">+{texts[this.state.activenum-1].percentage}</div>
                                    <button>Смотреть отчет</button>
                                </div>
                                <div className="grided"></div>
                            </div>
                            <div className="ideaRight">
                                <div onClick={()=>{this.setState({activenum:1})}} className={this.state.activenum===1 ? "ideaNum activeNum":"ideaNum"} ><span style={this.state.activenum===1 ? {backgroundImage:texts[this.state.activenum-1].color,color:"white",border:"0"}:null} >1</span>Идея 1</div>
                                <div onClick={()=>{this.setState({activenum:2})}}   className={this.state.activenum===2 ? "ideaNum activeNum":"ideaNum"} ><span style={this.state.activenum===2 ? {backgroundImage:texts[this.state.activenum-1].color,color:"white",border:"0"}:null} >2</span>Идея 2</div>
                                <div onClick={()=>{this.setState({activenum:3})}} style={{borderBottom:"0px"}}   className={this.state.activenum===3 ? "ideaNum activeNum":"ideaNum"} ><span style={this.state.activenum===3 ? {backgroundImage:texts[this.state.activenum-1].color,color:"white",border:"0"}:null} >3</span>Идея 3</div>
                            </div>
                        </div>
                    </div>
                    <div className="idea-wrap-mobile">
                        <div >
                            <div className="idea-mobile" style={{backgroundImage:texts[this.state.activenum-1].color}}>
                                <div className="idea-mobile-abs">
                                    <h6>{texts[this.state.activenum-1].title}</h6>
                                    <p>{texts[this.state.activenum-1].description}</p>
                                    
                                    <div className="percent">+{texts[this.state.activenum-1].percentage}</div>
                                </div>
                                <div className="grided"></div>
                            </div>
                        </div>
                    </div>
                    <div> */}
                        {/* <Charts/> */}
                    {/* </div> */}
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
                    <div style={{position:"relative",marginTop:10}}  data-aos="zoom-in" >
                        <div><h2 className="client-title">Заявка на консультацию</h2></div>
                        <p style={{textAlign:"center"}}>Оставьте заявку, и мы перезвоним вам в ближайшее время</p> 
                        <Consult/>
                    </div>
                    <hr style={{marginTop:10}}/>
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Структурные продукты </span></Link>/<span className="active"> Структурные продукты</span></div></div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default StructureProd;
