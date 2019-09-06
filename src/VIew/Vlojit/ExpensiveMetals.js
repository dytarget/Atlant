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
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";



export class ExpensiveMetals extends Component {
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

    render() { const data = [
        {
          country: "Акции малых и средних компаний",
          litres: 21
        },
        {
          country: "Облигации ААА-А",
          litres: 10
        },
        {
          country: "Акции крупных компании развитых стран",
          litres: 38
        },
        {
          country: "Акции крупных компании развивающихся стран",
          litres: 31
        }];
      const ds = new DataSet();
    const dv = ds
      .createView()
      .source(data)
      .transform({
        type: "percent",
        field: "litres",
        dimension: "country",
        as: "percent"
      });
      const scale = {
        percent: {
          formatter: val => {
            val = (val * 100).toFixed(2) + "%";
            return val;
          }
        },
        nice: false
      };
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
                                src={require('../../img/laser-4398314_1920.jpg')}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-strong"  />
                            </MDBView>
                            <MDBCarouselCaption className="texts-car analitic-car">
                                <span className="titlecarousel">Драгоценные металлы</span>
                                <div className="pcarousel">Традиционно золото на всей истории человечества считалось и считается до сих пор
единственным эквивалентом стоимости, который может спасти в самые «лихие времена».</div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="pathroute"><div><Link to="/private"><span>Методы защиты капитала </span></Link>/<span className="active"> Драгоценные металлы </span></div></div>
                    <hr/>
                  
                   
                    <div data-aos="zoom-in"  className="ourClient">
                        <div><h2 className="client-title">Однако всегда стоит <br/> учитывать определенные <br/> особенности актива</h2></div>
                        <div className="cl-mod-par">Данный актив не генерирует дополнительной стоимости или не имеет внутренней доходности. У
                        покупателей нет возможности получить проценты, дивиденды, а также прогнозируемость
                        биржевых котировок крайне низкая на краткосрочном периоде.</div>
                        <div style={{marginTop:40}} className="cl-mod-par">Данный актив не генерирует дополнительной стоимости или не имеет внутренней доходности. У
                        покупателей нет возможности получить проценты, дивиденды, а также прогнозируемость
                        биржевых котировок крайне низкая на краткосрочном периоде.</div>
                        <div className="best-broker lolita">
                            <div className="best-broker-elem">
                                <img src={require('../../img/fishing-rod.png')} alt=""/>
                                <span>Приобретение фьючерсных контрактов</span>

                            </div>
                           
                            <div className="best-broker-elem">
                                <img src={require('../../img/axe.png')} alt=""/>
                                <span>Приобретение акций золотодобывающих компаний</span>
                            </div>

                            <div className="best-broker-elem">
                                <img src={require('../../img/shovel.png')} alt=""/>
                                <span>Покупка золотых слитков</span>
                            </div>
                          
                        </div>
                        </div>
                        <hr/>
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
                    <hr style={{marginTop:50}}/>
                    <div className="pathroute"><div><Link to="/private"><span>Методы защиты капитала </span></Link>/<span className="active"> Драгоценные металлы </span></div></div>
                    </section>
                <Footer/>
            </div>
        )
    }
}
export default ExpensiveMetals;
