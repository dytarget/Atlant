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
                        style={{position:"absolute",top:0,zIndex:0,maxWidth:"100%",height:"75vh",left:0}}
                    >
                        <MDBCarouselInner>
                        <MDBCarouselItem className="car-item" itemId="1">
                            <MDBView>
                            <img
                                className="d-block w-100"
                                src={require('../../img/tie.jpg')}
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
                        <div className="etics-wrap">
                            <div className="etics-elem">
                                <div className="etcis-info">
                                    <div className="etics-title">Деловое поведение и этика</div>
                                    <div className="etics-text">
                                    Именно это лежит в основе нашей компании. Мы поддерживаем стандарты, которые
                                    соответствуют не только требованиям законов и нормативных актов, применимых к нам, но также
                                    к нашим принципам, основанных на превышении результативности. <br/> <br/>
                                    Наши достижения и поставленные цели являются прямым показателем образа жизни компании и
                                    партнеров. Мы приверженцы идеи меритократии, в которой вся работа и все отношения строятся
                                    на прозрачности и доверии.</div>
                                </div>
                               <div className="etcis-image-wrap">
                                   <img src={require('../../img/business-3152586_1920.jpg')} alt="" className="etics-image"/>
                               </div>
                            </div>
                            

                            <div className="etics-elem">
                               <div className="etcis-image-wrap">
                                   <img src={require('../../img/paper-3213924_1920.jpg')} alt="" className="etics-image"/>
                               </div>
                               <div className="etcis-info">
                                    <div className="etics-title">Приверженность высоким стандартам</div>
                                    <div className="etics-text">
                                    Именно благодаря постоянному стремлению к высшим уровням соответствия и совершенства мы
                                    создаем значимую работу и приоритетные отношения. <br/> <br/>
                                    Мы считаем, что для достижения превосходных результатов необходимо ставить амбициозные
                                    цели и применять всевозможные знания и понимание того, как устроен мир.
                                    Atlant ожидает таких же высоких стандартов от всех сотрудников, и мы проводим надлежащую
                                    юридическую проверку наших кадров и деловых партнеров.</div>
                                </div>
                            </div>

                            <div className="etics-elem">
                                <div className="etcis-info">
                                    <div className="etics-title">Кодекс Корпоративной этики</div>
                                    <div className="etics-text">
                                    Мы проявляем абсолютную нетерпимость в отношении незаконного или неэтичного поведения, и
                                    это отражено в нашей соответствующей политике, включая политику в отношении расхождений
                                    интересов, отмывания денег и борьбы с терроризмом, мошенничества, санкций, внешней
                                    деятельности, взяточничества и коррупции. <br/> <br/>

                                    Любой сотрудник, который нарушает требования Кодекса или многих других наших политик,
                                    подвергается дисциплинарному взысканию. <br/><br/>
                                    Наша Политика прямо запрещает любые транзакции, включая платежи за содействие, которые
                                    могут представлять собой взятку или коррумпированный платеж должностному или частному
                                    лицу. Наша политика распространяется на наших сотрудников и на тех, кто представляет нас,
                                    включая любых деловых партнеров, которые действуют от нашего имени.</div>
                                </div>
                               <div className="etcis-image-wrap">
                                   <img src={require('../../img/laptop-3196481_1920.jpg')} alt="" className="etics-image"/>
                               </div>
                            </div>



                            <div className="etics-elem">
                                <div className="etcis-image-wrap">
                                   <img src={require('../../img/свмвмчымсчм.png')} alt="" className="etics-image"/>
                               </div>
                                <div className="etcis-info">
                                    <div className="etics-title">Наш Кодекс - это то</div>
                                     <div className="etics-text">
                                     что ведет нас на пути к величию, сплачивает и развивает. Поскольку ATLANT-
это идея-меритократия, в которой мы ценим независимое мышление, мы призываем вас прочесть
и осознать то, чем живем мы.</div> 
                                </div>
                               
                            </div>

                        </div>
                     <hr style={{marginTop:10}}/>
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<span className="active"> Этика и честность </span></div></div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default Etica;