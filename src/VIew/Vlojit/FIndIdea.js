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
import Axios from 'axios';

var counter=0;
var interval=null;

export class FindIdea extends Component {
    constructor(){
        super();
        this.state={
            isLoading:true,
            activeclient:"defense",
            activenum:1,
            texts:[],
        };
    }

    
    componentWillMount(){
        Axios.get("http://89.219.32.117:5000/get_idea").then(res=>{
            console.log(res.data);
            console.log("hello");

            this.setState({texts:res.data});
        });
        window.scrollTo(0,0);
        AOS.init({
            duration : 300
        });
        setTimeout(() => this.setState({ isLoading: false }), 3000); 
        interval=setInterval(()=>{
            let temp=this.state.activenum+1;
            if (temp>this.state.texts.length) {
                temp=1;
            }
            this.setState({activenum:temp});
        },5500);
    }

    upgrade=()=>{
        counter=counter+1;
        if (counter>this.state.texts.length) {
            counter=1;
        }
    }
    change=(onClicker)=>{
        this.setState({activenum:onClicker});
        clearInterval(interval);
        interval=setInterval(()=>{
            let temp=this.state.activenum+1;
            if (temp>this.state.texts.length) {
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
    ];
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
                                <span className="titlecarousel">Найти идею</span>
                                <div className="pcarousel">Найдите идею которая вам нравится</div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<span className="active"> Найти идею </span></div></div>
                    <hr/>
                   
                    <div className="idea-wrap">
                        <div><h2 className="client-title">Вкладывайте в готовые решения</h2></div>
                        <div className="idea">
                            <div style={{backgroundImage:texts[(this.state.activenum-1)%3].color}} className="ideaLeft">
                                <div className="absoluted">
                                    <h6>{this.state.texts[this.state.activenum-1] && this.state.texts[this.state.activenum-1].title}</h6>
                                    <p>{this.state.texts[this.state.activenum-1] && this.state.texts[this.state.activenum-1].description}</p>
                                    
                                    <div className="percent">+{this.state.texts[this.state.activenum-1] && this.state.texts[this.state.activenum-1].percentage}</div>
                                    <button onClick={()=>{window.open("http://89.219.32.117:5000/"+this.state.texts[this.state.activenum-1].file)}}>Смотреть отчет</button>
                                </div>
                                <div className="grided"></div>
                            </div>
                            <div className="ideaRight">
                                {this.state.texts.map(idea=>{
                                    this.upgrade();
                                    var onClicker=counter;
                                    return(
                                    <div onClick={()=>{this.change(onClicker)}} className={this.state.activenum===counter ? "ideaNum activeNum":"ideaNum"} >
                                        <span style={this.state.activenum===counter ? {backgroundImage:texts[(this.state.activenum-1)%3].color,color:"white",border:"0"}:null} >{counter}</span>{idea.title}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="idea-wrap-mobile">
                        <div >
                            <div className="idea-mobile" style={{backgroundImage:texts[(this.state.activenum-1)%3].color}}>
                                <div className="idea-mobile-abs">
                                    <h6>{this.state.texts[this.state.activenum-1] && this.state.texts[this.state.activenum-1].title}</h6>
                                    <p>{this.state.texts[this.state.activenum-1] && this.state.texts[this.state.activenum-1].description}</p>
                                    
                                    <div className="percent">+{this.state.texts[this.state.activenum-1] && this.state.texts[this.state.activenum-1].percentage}</div>
                                    <button onClick={()=>{window.open("http://89.219.32.117:5000/"+this.state.texts[this.state.activenum-1].file)}}>Смотреть отчет</button>

                                </div>
                                <div className="grided"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <Charts/> */}
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
                    <div style={{marginBottom:20}} className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<span className="active"> Найти идею </span></div></div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default FindIdea;
