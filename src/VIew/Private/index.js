import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {  MDBContainer, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact";
import Forms from '../Form';
import Footer from '../Footer';
import Navbar from '../NavbarFolder';
import Axios from 'axios';

var counter=0;
var interval=null;


var url="http://89.219.32.117:5000/";

export class Private extends Component {
    constructor(){
        super();
        this.state={
            isLoading:true,
            activeclient:"torgovat",
            activeopp:"find",
            activenum:1,
            texts:[],
            sliders:[]
        };
    }
   
    componentDidMount(){
        Axios.get(url+"get_idea").then(res=>{
            console.log(res.data);
            console.log("hello");

            this.setState({texts:res.data});
        });
        Axios.get(url+"slider").then(res=>{
            this.setState({sliders:res.data});
        });
        setTimeout(() => this.setState({ isLoading: false }), 2000); 
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
            this.state.isLoading ? (
                <div id="bars" style={{left:"50%"}}>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            ):(
            <div className="all" >
                <header className="headerPrivate">
                    <div className="allhead">
                 <Navbar/>       
    
                <MDBContainer>
                    <MDBCarousel
                        activeItem={1}
                        length={this.state.sliders.length}
                        showControls={true}
                        showIndicators={true}
                        className="z-depth-1"
                        style={{position:"absolute",top:0,zIndex:0,maxWidth:"100%",height:"100%",left:0}}
                    >
                        <MDBCarouselInner>
                            {this.state.sliders.map((slider,index)=>{
                                return(
                                    <MDBCarouselItem className="car-item" itemId={index+1}>
                                        <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src={url+slider.image_path}
                                            alt="slider"
                                        />
                                        <MDBMask overlay="black-strong"  />
                                        </MDBView>
                                        <MDBCarouselCaption className="texts-car">
                                            <span className="titlecarousel">{slider.title}</span>
                                            <div className="pcarousel">{slider.description}</div>
                                            <button onClick={()=>{window.open(slider.link)}} className="btncarousel">Узнать больше</button>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                )
                            })}
                 
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section style={{position:"relative"}} className="sectionPrivate">
                    <div className="why-wrapper">
                        <div className="why-elem">
                            <div className="left-why">
                                <i class="far fa-thumbs-up"></i>
                            </div>
                            <div className="right-why">
                            Более 20 лет успешной деятельности на рынке
                            </div>
                        </div>
                        <div className="why-elem">
                                <div className="left-why">
                                    <i class="fas fa-lock"></i>
                                </div>
                                <div className="right-why">
                                    Очень высокая степень надежности «АА.iv»
                                </div>
                        </div>
                        <div className="why-elem">
                                <div className="left-why">
                                        <i class="far fa-handshake"></i>
                                </div>
                                <div className="right-why">
                                    Нас выбрали более 130000 инвесторов
                                </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="ourClient">
                        <h2 className="client-title">Наши клиенты выбирают</h2>
        
                        <div className="modal-zb">
                            <div className="modal-left" onClick={()=>{this.setState({activeclient:"torgovat"})}} style={this.state.activeclient==="vlojit" ? {backgroundColor:"#F3F5F6",color:"#73808D"}:null}>Торговать и заработать</div>
                            <div className="modal-right" onClick={()=>{this.setState({activeclient:"vlojit"})}} style={this.state.activeclient==="torgovat" ? {background:"#F3F5F6",color:"#73808D"}:null}>Вложить и приумножить</div>
                        </div>
                        <div className="cl-mod-title">{this.state.activeclient==="torgovat" ? "Вы решаете, как управлять своими деньгами" : "Вы решаете, как работают ваши деньги"}</div>
                        <div className="cl-mod-par">{this.state.activeclient==="torgovat" ? "Мы разработали множество решений и сервисов для комфортной работы на бирже. Они подойдут как профессиональным трейдерам и инвесторам, так и новичкам, делающим первые шаги на финансовых рынках."
                         : "Мы предлагаем различные инвестиционные решения, под разные цели, сроки и суммы, не требующие от вас опыта инвестирования и времени для управления."}</div>
                         <div className="modal-cards">
                                {this.state.activeclient==="torgovat" ? (
                                        <CSSTransition in={this.state.activeclient==="torgovat"} timeout={500} classNames="modalanim">
                                           <div className="modal-element">
                                                <div onClick={()=>{this.props.history.push('/investing/individual')}} style={{backgroundImage:"url("+require('../../img/kevin-bhagat-zNRITe8NPqY-unsplash.jpg')+")"}}  className="modal-elem-list"> 
                                                    <span className="modal-el-title">Индивидуальный торговый счет</span> 
                                                    <div className="hovered-card card1">
                                                        <span>
                                                            <p className="hovered-title">Индивидуальный торговый счет</p>
                                                            <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                </div>

                                                <div onClick={()=>{this.props.history.push('/trading/download-platform')}}  style={{backgroundImage:"url("+require('../../img/helloquence-5fNmWej4tAA-unsplash.jpg')+")"}}  className="modal-elem-list">
                                                <span className="modal-el-title">Скачать Торговую платформу</span>
                                                <div className="hovered-card card2">
                                                        <span>
                                                            <p className="hovered-title">Интернет трейдинг на международном рынке</p>
                                                            <p className="hovered-text">Торговая платформа (или как ее еще называют, торговый терминал) — это специальное
                                                            программное обеспечение, позволяющее трейдеру иметь доступ финансовому рынку в режиме
                                                            онлайн и совершать финансовые операции на ней.</p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                   
                                                </div>

                                                <div onClick={()=>{this.props.history.push('/trading/your-financial-analyst')}} style={{backgroundImage:"url("+require('../../img/m-b-m-ZzOa5G8hSPI-unsplash.jpg')+")"}}  className="modal-elem-list">
                                                <span className="modal-el-title">Ваш финансовый аналитик</span>
                                                <div className="hovered-card card3">
                                                        <span>
                                                            <p className="hovered-title">Ваш финансовый аналитик</p>
                                                            <p className="hovered-text">Этот продукт для вас, если вы хотите торговать самостоятельно, но при этом вам интересно получать актуальные инвестиционные идеи наших аналитиков </p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                </div>
                                            </div>
                                            </CSSTransition>
                                ):(
                                    <CSSTransition in={false} timeout={200} classNames="modalanim2">

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
                                )}
                         </div>
                         <Link to={this.state.activeclient==="torgovat" ? ("/trading"):("/investing")}><div className="modal-button">{this.state.activeclient==="torgovat" ? ("Торговать"):("Вложить")}</div></Link>
                    </div>
                    <hr/>
                    <div><div>
                        <div><h2 className="client-title">Лучший брокер <br/> для начинающих инвесторов</h2></div>
                        <div className="cl-mod-par">В конкурсе Московской биржи Invest Trial 2017 компания заняла первое место и завоевала золотой диплом в номинации «Лучший брокер для начинающих инвесторов 2017»</div>
                        <div className="best-broker">
                            <div className="best-broker-elem">
                                <img src={require('../../img/truck.png')} alt=""/>
                                <span>Быстрый <br/> старт</span>
                                <div className="cl-mod-par">Открытие счёта онлайн и доступ к торгам уже сегодня</div>
                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/cheque.png')} alt=""/>
                                <span>Оперативный ввод-вывод денег</span>
                                <div className="cl-mod-par">Простота и оперативность зачислений, переводов и выводов денежных средств</div>
                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/commerce.png')} alt=""/>
                                <span>Отсутствие скрытых комиссий</span>
                                <div className="cl-mod-par">Комиссия брокера взимается только при совершении сделок. Нет сделок — нет комиссии брокера</div>
                            </div>
                        </div>
                        <Link to="/aboutus"><div style={{margin:"0 auto",textAlign:"center",width:"300px"}} className="btncarousel">Подробнее о компании</div></Link>
                    </div>                      
                    </div>
                    <hr/>
                    <div className="ourClient">
                        <h2 className="client-title">Вы также можете</h2>
                        <div className="modal-zb">
                            <div className="modal-left" onClick={()=>{this.setState({activeopp:"find"})}} style={this.state.activeopp==="learn" ? {backgroundColor:"#F3F5F6",color:"#73808D"}:null}>Найти идею и инвестировать</div>
                            <div className="modal-right" onClick={()=>{this.setState({activeopp:"learn"})}} style={this.state.activeopp==="find" ? {background:"#F3F5F6",color:"#73808D"}:null}>Научиться и применять</div>
                        </div>
                        <div className="cl-mod-title">{this.state.activeopp==="find" ? "Вкладывайте в готовые решения" : "Вы решаете, что вам подходит"}</div>
                        <div className="cl-mod-par">{this.state.activeopp==="find" ? "Наша команда аналитиков выпускает обзоры и инвестидеи высочайшего качества. В 2017 году мы предложили 229 идей, 82% из которых были прибыльными, а 73% продемонстрировали результат лучше бенчмарка."
                         : "Шаг за шагом, от простого к сложному, мы научим вас инвестировать на финансовых рынках. Узнайте, как стать совладельцем крупнейших мировых компаний или зарабатывать на колебаниях курсов валют."}</div>
                         <div className="modal-cards">
                                {this.state.activeopp==="find" ? (
                                        <CSSTransition in={this.state.activeopp==="find"} timeout={500} classNames="modalanim">
                                            <>
                                            <div className="idea-wrap">
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
                                            </>
                                        </CSSTransition>
                                ):(
                                    <CSSTransition in={false} timeout={200} classNames="modalanim2">

                                        <div className="car-anal">
                                        <div  style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}} className="car-anal-elem">
                                            <div className="afterhas"></div>
                                            <p>Индивидуальное обучение</p>
                                            <div>Для тех кто хочет стать проффесионалом</div>
                                            <Link to="/learn/individual-learn"><button className="hovered-button">Посмотреть</button></Link>
                                        </div>  
                                        <div className="car-anal-elem">
                                            <ul>
                                                <li>Ваш план обучения</li>
                                                <li>Удобное для занятий время</li>
                                                <li>Практические домашние задания</li>
                                            </ul>
                                        </div>                 
                                    </div>
                                        </CSSTransition>
                                )}
                         </div>
                        <Link to={this.state.activeopp==="find" ? ("/find-idea"):("/learn")}><div className="modal-button">{this.state.activeopp==="find" ? ("Смотреть все идеи"):("Смотреть все решения")}</div></Link>
                    </div>
                </section>
                <hr/>
                <div><h2 className="client-title">Напишите нам</h2></div>
                <div style={{textAlign:"center",fontSize:"1.2rem"}}>Мы постараемся ответить вам как можно скорее</div>
                <Forms/>
               <Footer/>
            </div>
            )
        )
    }
}

export default Private;
