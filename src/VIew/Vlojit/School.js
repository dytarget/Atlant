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



export class School extends Component {
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
                                <span className="titlecarousel">Научиться и применять</span>
                                <div className="pcarousel">Быстрый переход от слов к делу</div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="numbers-all-mobile-invisible">
                    <div data-aos="zoom-in" ><h2 className="client-title">Вы решаете, что
вам подходит</h2></div>
                    <div data-aos="zoom-in" style={{marginBottom:60}}  className="cl-mod-par">Шаг за шагом, от простого к сложному, мы научим вас инвестировать
на финансовых рынках. Узнайте, как стать совладельцем крупнейших мировых
компаний или зарабатывать на колебаниях курсов валют. Выбирайте любой
формат занятий — очный, дистанционный или индивидуальный.
                    </div>
                    <div data-aos="zoom-in"  className="modal-element anotherdiv" style={{justifyContent:"space-around"}}>
                        <div className="infopages-elem">
                            <div className="infopages-elem-main">
                                <img src={require("../../img/understand.svg")} alt=""/>
                                <p>Индивидуальное обучение</p>
                            </div>
                            <div className="infopages-elem-cover">
                                <p>Индивидуальное обучение</p>
                                <div>Ваш план обучения, удобное для занятий время и практические домашние задания</div>
                            </div>
                        </div>
                     
                    </div>
                    </div>
                    <hr style={{margin:'40px 0'}}/>                 
                   
                    <div data-aos="zoom-in"  className="ourClient">
                        <h2 className="client-title">Выберите формат обучения</h2>
                        <div  style={{marginBottom:40}} className="cl-mod-par" >
                        Очное обучение
                        </div>


                         <div >
                             
                                    <div className="car-anal">
                                        <div  style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}} className="car-anal-elem">
                                            <div className="afterhas"></div>
                                            <p>Индивидуальное обучение</p>
                                            <div>Для тех кто хочет стать проффесионалом</div>
                                            <button className="hovered-button">Посмотреть</button>
                                        </div>  
                                        <div className="car-anal-elem">
                                            <ul>
                                                <li>Ваш план обучения</li>
                                                <li>Удобное для занятий время</li>
                                                <li>Практические домашние задания</li>
                                            </ul>
                                        </div>                 
                                    </div>
                         </div>
                    </div> 
                    <hr style={{margin:'40px 0px'}}/>
                    <div><h2 className="client-title">Пошаговая инструкция</h2></div>
                        <div className="best-broker lolita">
                            <div className="best-broker-elem">
                                <img src={require('../../img/dollar.png')} alt=""/>
                                <span>В удобное
 время!</span>
                                <div className="cl-mod-par">Вы сами управляете
 своим расписанием</div>

                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/savings.png')} alt=""/>
                                <span>Полезная
информация</span>                                <div className="cl-mod-par">Вы будете получать
 только необходимое,
 без «воды»</div>

                            </div>
                           
                           
                            <div className="best-broker-elem">
                                <img src={require('../../img/id-card.png')} alt=""/>
                                <span>Команда
профессионалов
</span>
                                <div className="cl-mod-par">Наши преподаватели
 — с многолетним опытом
 торговли</div>

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
                </section>
                <Footer/>
            </div>
        )
    }
}
export default School;
