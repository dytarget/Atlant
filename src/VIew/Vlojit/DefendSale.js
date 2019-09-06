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



export class DefendSale extends Component {
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
                                src={require('../../img/entrepreneur-2411763_1920.jpg')}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-strong"  />
                            </MDBView>
                            <MDBCarouselCaption className="texts-car">
                                <span className="titlecarousel">Защитные акции</span>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="pathroute"><div><Link to="/corporative"><span> Корпоратвный инвестор </span></Link>/<Link to="/corporative/3"><span> Методы защиты капитала </span></Link>/<span className="active"> Защитные акций </span></div></div>
                    <hr/>
                        <div className="etics-wrap">
                            <div className="etics-elem">
                                <div className="etcis-info">
                                    <div className="etics-title">Защитные акции</div>
                                    <div className="etics-text">
                                    Обычно растут хуже на бычьем рынке и меньше падают на медвежьем, их
главный признак – стабильность. Такие бумаги, как правило, неинтересны спекулянтам.
Приоритет – эмитентам, продукция которых пользуется постоянным спросом и не подвержена
цикличности. Если бизнес компании имеет стратегическое значение для экономики государства, –
еще лучше. Желательно, чтобы спрос не ограничивался местным рынком. Плюсом будет хорошая
дивидендная история.</div>  
                                </div>
                               <div className="etcis-image-wrap">
                                   <img src={require('../../img/euro-447209_1920.jpg')} alt="" className="etics-image"/>
                               </div>
                            </div>
                            

                            <div className="etics-elem">
                               <div className="etcis-image-wrap">
                                   <img src={require('../../img/shares-4383451_1920.jpg')} alt="" className="etics-image"/>
                               </div>
                               <div className="etcis-info">
                                    <div className="etics-title">Примеры защитных акции</div>
                                    <div className="etics-text"> 
                                    Электроэнергетика, телекомы, золотодобыча, производство
продуктов питания, фармацевтика, строительство общественной инфраструктуры. Существуют
противоречивые мнения относительно защитных возможностей бумаг потребительского сектора.
Одни эксперты считают, что постоянный спрос на продукты первой необходимости будет
гарантировать стабильный денежный поток.</div>
                                </div>
                            </div>

                            <div className="etics-elem">
                                <div className="etcis-info">
                                    <div className="etics-title">Другие ссылаются на статистику</div>
                                    <div className="etics-text">
                                    Где показатели ритейлеров ухудшаются вслед за рынком. Этому
                                    способствует снижение покупательского спроса даже в дискаунт-сегменте. Акции второго и
                                    третьего эшелонов, особенно с высокой долговой нагрузкой, наименее предсказуемы в периоды
                                    кризисов. Компании малой капитализации не попадают в первоочередные государственные
                                    программы поддержки бизнеса. Как правило, во время кризиса их просадка больше, чем у акций
                                    первого эшелона. <br/> <br/>
                                    Держать большие длинные позиции в акциях во время кризиса – не оптимальное решение.
                                    Исключением являются самые качественные эмитенты с низким долгом и стабильными
                                    поступлениями, а лучше – с запасом кэша. Длинные позиции в качественных бумагах можно
                                    захеджировать короткими позициями в акциях из других отраслей или во фьючерсе на индекс.</div>
                                </div>
                               <div className="etcis-image-wrap">
                                   <img src={require('../../img/business-3150423_1920.jpg')} alt="" className="etics-image"/>
                               </div>
                            </div>
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
                                    <div style={{backgroundImage:"url("+require('../../img/laptop-computer-1245981_1920.jpg')+")"}}  className="left-dp-elem">
                                    <span>Программное обеспечение</span>
                                </div></Link>

                                <Link to="/trading/your-financial-analyst"> 
                                    <div style={{backgroundImage:"url("+require('../../img/office-3126597_1920.jpg')+")"}}  className="left-dp-elem">
                                    <span>Ваш финансовый аналитик</span>
                                </div></Link>
                        </div>
                    </div>
                    <hr/>
                    <div style={{position:"relative",marginTop:30}}  >
                        <div><h2 className="client-title">Заявка на консультацию</h2></div>
                        <p style={{textAlign:"center"}}>Оставьте заявку, и мы перезвоним вам в ближайшее время</p> 
                        <Consult/>
                    </div>
                        <hr/>
                        <div className="pathroute"><div><Link to="/corporative"><span> Корпоратвный инвестор </span></Link>/<Link to="/corporative/3"><span> Методы защиты капитала </span></Link>/<span className="active"> Защитные акций </span></div></div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default DefendSale;