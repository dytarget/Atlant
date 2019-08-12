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
import 'chart.js';
import Charts from '../Charts';



export class Etica extends Component {
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
                                <span className="titlecarousel">Этика и честность</span>
                                <div className="pcarousel">Наша приверженность честности</div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<span className="active"> Этика и честность </span></div></div>
                    <hr/>
                    <div data-aos="zoom-in" ><h2 className="client-title">Честность и этические принципы</h2></div>
                    <div data-aos="zoom-in" style={{marginBottom:60}}  className="cl-mod-par">
                    Честность — вот, что лежит в основе нашей компании. Сегодня мы также следуем принципам честного ведения бизнеса и проявления уважения. Можно сказать, что эти качества достались нам в наследство. Мы твердо убеждены: безупречная деловая этика — залог успеха нашего успеха. Тот факт, что мы ведем только честный бизнес и соблюдаем международный кодекс корпоративного поведения, свидетельствует о нашем желании руководствоваться правилом взаимного уважения в работе как с клиентами и партнерами, так и друг с другом.                 </div>
        
                   
                    <hr/>
                    <div>
                        <div><h2 className="client-title">Деловая этика и честность</h2></div>
                        <div className="best-broker lolita">
                            <div className="best-broker-elem">
                                <img src={require('../../img/dollar.png')} alt=""/>
                                <span>«Atlant Finance разработала и применяет</span>
                                <div data-aos="zoom-in"   className="cl-mod-par">
                                Кодекс Этики, устанавливающий четкие указания для сотрудников в области их повседневной деятельности.
                                </div>
        
                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/savings.png')} alt=""/>
                                <span>Все сотрудники и руководящий состав</span>
                                <div data-aos="zoom-in"   className="cl-mod-par">
                                несут ответственность за соблюдение Кодекса этики, ведь он является важной частью нашего бизнес-процесса и залогом будущего успеха
                                </div>
                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/exchange.png')} alt=""/>
                                <span>Мы гарантируем</span>
                                <div data-aos="zoom-in"   className="cl-mod-par">
                                что все принципы реализуются через наши внутренние процессы, процедуры и Аудиты Системы качества
                                </div>
                            </div>

                        </div>
                        <Link to="/aboutus"><div style={{margin:"0 auto",textAlign:"center",width:"300px"}} className="btncarousel">Подробнее о компании</div></Link>
                    </div>
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
                    <div style={{position:"relative",marginTop:50}}  data-aos="zoom-in" >
                        <div><h2 className="client-title">Заявка на консультацию</h2></div>
                        <p style={{textAlign:"center"}}>Оставьте заявку, и мы перезвоним вам в ближайшее время</p> 
                        <Consult/>
                    </div>
                    <hr style={{marginTop:50}}/>
                    <div style={{marginBottom:20}} className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<span className="active"> Этика и честность </span></div></div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default Etica;