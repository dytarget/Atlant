import React, { Component} from 'react';
import './AboutUs.css';
import ReactPageScroller from "react-page-scroller";
import {CSSTransition} from 'react-transition-group';
import Footer from '../Footer';
import {Link} from 'react-router-dom';
import Forms from '../Form';



export class AboutUs extends Component {
    constructor() {
        super();
        this.state = { 
            isLoading: true ,
            which:1,
            showContent:false,
            show1:false,
            show2:false,
            show3:false,
            show4:false,
            show5:false
        }
    }
    
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ isLoading: false }), 1500); 
        if(this.props.match.params.page){
            if (this.props.match.params.page===1) {
                this.goToPage(this.props.match.params.page+2);
                this.goToPage(this.props.match.params.page);
            }
            else{
                this.goToPage(this.props.match.params.page-1);
                this.goToPage(this.props.match.params.page);
            }
        }
    }
    componentWillUnmount(){
        if (this.timerHandle) {
          clearTimeout(this.timerHandle);
          this.timerHandle = 0;
        }
      }
    

    goToPage = (pageNumber) => {
        this.reactPageScroller.goToPage(pageNumber);
    }
    
    goBack=()=>{
        this.props.history.goBack();
    }
    
    showContent=(which)=>{
        if (this.state.showContent) {
            this.setState({showContent:false})
        }
        else{
            this.setState({showContent:which});
        }
    }
    render() {
        var {showContent}=this.state;
        return (
                <div style={{maxWidth:"100%",overflowX:"hidden",height:'100vh',maxHeight:"100vh"}}>
                <ReactPageScroller blockScrollUp={showContent}  blockScrollDown={showContent}ref={c => this.reactPageScroller = c} pageOnChange={(info)=>{console.log(info);this.setState({which:info})}}>
                        <div className="bottom-layer" >
                                {(showContent===false && this.state.which===1) &&
                                <CSSTransition in={this.state.which===1 && !showContent}  timeout={2900} classNames="animtext">
                                    <h1 className="text">Пресс-Центр</h1>
                                </CSSTransition>
                                }
                                {(this.state.which===1 && !showContent )&&
                                    <>
                                    <div className="gb" onClick={this.goBack}>
                                            <h1>
                                                <i class="fas fa-arrow-circle-left"></i>
                                            </h1></div>
                                    <div className="numbers">
                                        <div style={{color:"#812b47",opacity:"1"}}>01</div>
                                        <div onClick={()=>{this.goToPage(1)}}>02</div>
                                        <div onClick={()=>{this.goToPage(2)}}>03</div>
                                        <div onClick={()=>{this.goToPage(3)}}>04</div>
                                        <div onClick={()=>{this.goToPage(4)}}>05</div>
                                    </div >
                                    </>
                                }   <div style={showContent===1 ? {position:'absolute',width:'100%',top:0,zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===1}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(1)}} className="abt-button" style={showContent===1 ? {width:'100%',backgroundColor:"#812b47",marginTop:0}:{backgroundColor:"#812b47"}}>{showContent===1 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===1 &&
                                        <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
                                            <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> Пресс-центр </span></div></div>
                                            <hr/>
                                            <div>
                                                <div><h2 className="client-title">Пресс-центр <br/>Atlant Finance</h2></div>
                                                <div className="cl-mod-par">Чем мы можем быть вам полезны?</div>                  
                                                <div className="best-broker lolita">
                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/book.png')} alt=""/>
                                                        <span>Комментарии и прогнозы</span>
                                                    </div>
                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/birdhouse.png')} alt=""/>
                                                        <span>Аналитика и исследования</span>       
                                                    </div>
                                                
                                                
                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/planet.png')} alt=""/>
                                                        <span>Информация о компании</span>
                                                    </div>
                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/atm.png')} alt=""/>
                                                        <span>Мнение об отрасли</span>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div><h2 className="client-title">Есть вопросы?</h2></div>
                                                <Forms/>
                                                <hr/>
                                            <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> Пресс-центр </span></div></div>
                                            </div>
                                            <Footer/>
                                    </div>
                                    }
                                    </div>
                                <CSSTransition in={this.state.which===1 && !showContent } timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#812b47",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>

            
                        <div className="bottom-layer" >
                                {(!showContent && this.state.which===2) &&
                                    <CSSTransition in={this.state.which===2 && !showContent}  timeout={2900} classNames="animtext">
                                        <h1 className="text">О Нас</h1>
                                    </CSSTransition>
                                }
                                {(this.state.which===2 && !showContent )&&
                                <>
                                 <div className="gb" onClick={this.goBack}>
                                 <h1>
                                     <i class="fas fa-arrow-circle-left"></i>
                                 </h1></div>
                                    <div className="numbers">
                                        <div onClick={()=>{this.goToPage(0)}} >01</div>
                                        <div style={{color:" #763251",opacity:"1"}} >02</div>
                                        <div onClick={()=>{this.goToPage(2)}}>03</div>
                                        <div onClick={()=>{this.goToPage(3)}}>04</div>
                                        <div onClick={()=>{this.goToPage(4)}}>05</div>
                                    </div ></>
                                }   <div style={showContent===2 ? {position:'absolute',width:'100%',top:"100vh",zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===2}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(2)}} className="abt-button" style={showContent===2 ? {width:'100%',backgroundColor:"#763251",marginTop:0}:{backgroundColor:"#763251"}}>{showContent===2 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===2 &&
                                        <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
                                            <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> О нас </span></div></div>
                                            <hr/>
                                            <div>
                                                <div><h2 className="client-title">Главное о нас</h2></div>
                                                <div className="cl-mod-par">ЧAtlant Finance LTD - это инвестиционно-управляющая компания, задача которой является привлечение
и управление инвестиционным капиталом. Компания была основана в апреле 2018 года, место
регистрации - Сент Винсент и Гренадины. Так как компания зарегистрирована в офшоре, это позволяет
решать множество задач для наших клиентов.</div>                  
                                                <div className="best-broker lolita">
                                                    <div className="best-broker-elem2">
                                                        <img src="https://open-broker.ru/static/icons/20years.svg" alt=""/>
                                                        <span>Atlant Finance LTD не имеет головного офиса и  опыт которых 10 лет.</span>
                                                    </div>
                                                    <div className="best-broker-elem2">
                                                        <img src="https://open-broker.ru/static/icons/rating-aaa.svg" alt=""/>
                                                        <span>Очень высокая степень надежности «АА.iv»</span>       
                                                    </div>
                                                    <div className="best-broker-elem2">
                                                        <img src="https://open-broker.ru/static/icons/100000clients.svg" alt=""/>
                                                        <span>Нас выбрали более 130000 инвесторов</span>
                                                    </div>
                                                </div>
                                                <div className="cl-mod-par">Мы не стремимся к быстрым заработкам, но к стабильности в
заработке, как для наших клиентов, так и для компании. Привлеченный инвестиционный капитал
инвестируется в разного рода активы, из которых большинство составляют ценные бумаги и
высоколиквидные инструменты денежного рынка. Также компания всегда находится в поиске
привлекательных проектов для инвестирования клиентского капитала и не только. В конкурентной
среде мы не ищем слабостей, а создаем преимущества, что помогает компании стать титаном в
индустрии инвестиций. Одним из таких преимуществ является защита инвестиционного капитала от
потерь, путем создания многоуровневой системы оценки рисков и предотвращения ошибок
&quot;человеческого фактора&quot;, а так же механических и когнитивных ошибок.</div>  
<hr/>
                                                <div><h2 className="client-title">Есть вопросы?</h2></div>
                                                <Forms/>              
                                                <hr/>
                                            <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> О нас </span></div></div>
                                            </div>
                                            <Footer/>
                                    </div>
                                    }
                                    </div>
                                <CSSTransition in={this.state.which===2 && showContent===false } timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#763251",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>
                        <div className="bottom-layer" >
                        {(!showContent && this.state.which===3) &&
                                    <CSSTransition in={this.state.which===3 && !showContent}  timeout={2900} classNames="animtext">
                                        <h1 className="text">Партнеры компании</h1>
                                    </CSSTransition>
                                }
                                {(this.state.which===3 && !showContent )&&
                                 <> <div className="gb" onClick={this.goBack}>
                                 <h1>
                                     <i class="fas fa-arrow-circle-left"></i>
                                 </h1></div>
                                    <div className="numbers">
                                        <div onClick={()=>{this.goToPage(0)}} >01</div>
                                        <div onClick={()=>{this.goToPage(1)}}   >02</div>
                                        <div style={{color:" #534169",opacity:"1"}} onClick={()=>{this.goToPage(2)}}>03</div>
                                        <div onClick={()=>{this.goToPage(3)}}>04</div>
                                        <div onClick={()=>{this.goToPage(4)}}>05</div>
                                    </div ></>
                                }   <div style={showContent===3 ? {position:'absolute',width:'100%',top:"200vh",zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===3}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(3)}} className="abt-button" style={showContent===3 ? {width:'100%',backgroundColor:"#534169",marginTop:0}:{backgroundColor:"#534169"}}>{showContent===3 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===3 &&
                                        <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
                                            <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active">Партнеры компании</span></div></div>
                                            <hr/>
                                            <div>
                                                <div><h2 className="client-title">Партнеры компании</h2></div>
                                                        
                                                <div className="best-broker lolita">
                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/bank.png')} alt=""/>
                                                        <span>ArmSwissBank</span>
                                                        <div className="cl-mod-par">банк-держатель клиентских счетов.
Данный банк является частным инвестиционным банком. Банк не имеет кредитного портфеля и тем
самым обеспечивает свою устойчивость и надежность сохранности денежных средств на своих счетах.</div>
                                                    </div>
                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/bank.png')} alt=""/>
                                                        <span>Exante</span>    
                                                        <div className="cl-mod-par">брокер нового поколения. Компания Exante, помогает нам оперировать
на международных финансовых рынках и позволяет проводить сложные торговые операции с
минимальными затратами. В партнерстве с компанией Exante мы создаем одно из наших конкурентных
преимуществ, таких как участие в IPO без lock up и за минимальные комиссии.</div>   
                                                    </div>
                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/bank.png')} alt=""/>
                                                        <span>Swissquote Bank</span>
                                                        <div className="cl-mod-par">
                                                        швейцарский банк и лидер в Швейцарии по
предоставлению финансовых и торговых онлайн услуг. Swissquote Bank открывает для нашей
компании доступ к денежному рынку и рынку капитала, что дает нам возможность добиться
максимальной доходности на изменении курсов иностранных валют.
                                                        </div>
                                                    </div>

                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/bank.png')} alt=""/>
                                                        <span>Utip Technologies</span>
                                                        <div className="cl-mod-par">
                                                        наш партнер, чье программное обеспечение помогает нашим
клиентам перейти на новый уровень трейдинга и инвестирования.
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div><h2 className="client-title">Есть вопросы?</h2></div>
                                                <Forms/>
                                                <hr/>
                                            <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> Партнеры компании </span></div></div>
                                            </div>
                                            <Footer/>
                                    </div>
                                    }
                                    </div>
                                <CSSTransition in={this.state.which===3 && showContent===false } timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#534169",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>
                        
                       
                        <div className="bottom-layer" >
                                {(!showContent && this.state.which===4) &&
                                    <CSSTransition in={this.state.which===4 && !showContent}  timeout={2900} classNames="animtext">
                                        <h1 className="text">Что мы делаем</h1>
                                    </CSSTransition>
                                }
                                {(this.state.which===4 && !showContent )&&
                                <> <div className="gb" onClick={this.goBack}>
                                <h1>
                                    <i class="fas fa-arrow-circle-left"></i>
                                </h1></div>
                                    <div className="numbers">
                                        <div onClick={()=>{this.goToPage(0)}} >01</div>
                                        <div onClick={()=>{this.goToPage(1)}}>02</div>
                                        <div onClick={()=>{this.goToPage(2)}}>03</div>
                                        <div style={{color:" #394674",opacity:"1"}}>04</div>
                                        <div onClick={()=>{this.goToPage(4)}}>05</div>
                                    </div ></>
                                }   <div style={showContent===4 ? {position:'absolute',width:'100%',top:"300vh",zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===4}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(4)}} className="abt-button" style={showContent===4 ? {width:'100%',backgroundColor:"#394674",marginTop:0}:{backgroundColor:"#394674"}}>{showContent===4 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===4 &&
                                        <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
                                            <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> Что мы делаем </span></div></div>
                                            <hr/>
                                            <div>
                                                <div><h2 className="client-title">Что мы делаем</h2></div>
                                                <div className="cl-mod-par">Atlant Finance сосредоточена на понимании того, как работает мир. Благодаря глубокому пониманию
мировой экономики и финансовых рынков и воплощению этого понимания в больших портфелях и
стратегических партнерствах с институциональными клиентами, мы создали отчетливый послужной
список успеха.</div>                  
                                                <div className="best-broker lolita">
                                                    <div className="best-broker-elem2">
                                                        <img src="https://open-broker.ru/static/icons/20years.svg" alt=""/>
                                                        <span>Наша миссия состоит в том, чтобы обеспечить нашим инвесторам наивысшую отдачу</span>
                                                    </div>
                                                    <div className="best-broker-elem2">
                                                        <img src="https://open-broker.ru/static/icons/rating-aaa.svg" alt=""/>
                                                        <span>Поддерживать приверженность нашим принципам целостности, дисциплины и
превосходства.</span>       
                                                    </div>
                                                    <div className="best-broker-elem2">
                                                        <img src="https://open-broker.ru/static/icons/100000clients.svg" alt=""/>
                                                        <span>Мы предоставляем нашим торговым командам возможность самостоятельно сосредоточиться на
конкретных возможностях и стратегиях</span>
                                                    </div>
                                                </div>          
                                                <hr/>
                                                    <div><h2 className="client-title">Инвестиционный подход</h2></div>
                                                    <div className="cl-mod-par">
                                                            Мы используем глобальный мультистратегический инвестиционный подход,
                                                            оппортунистически участвуя в широком спектре торговых и инвестиционных стратегий через широкую
                                                            группу диверсифицированных менеджеров. Atlant Finance отличается от других компаний по
                                                            управлению альтернативными инвестициями своей способностью последовательно приносить нашим
                                                            инвесторам высококачественную прибыль.
                                                        </div>
                                                        <hr/>
                                                <div><h2 className="client-title">Есть вопросы?</h2></div>
                                                <Forms/>
                                                <hr/>
                                            <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> О нас </span></div></div>
                                            </div>
                                            <Footer/>
                                    </div>
                                    }
                                    </div>
                                <CSSTransition in={this.state.which===4 && showContent===false } timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#394674",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>

                        <div className="bottom-layer" >
                                {(!showContent && this.state.which===5) &&
                                    <CSSTransition in={this.state.which===5 && !showContent}  timeout={2900} classNames="animtext">
                                        <h1 className="text">Возможности карьеры</h1>
                                    </CSSTransition>
                                }
                                {(this.state.which===5 && !showContent )&&
                                <> <div className="gb" onClick={this.goBack}>
                                <h1>
                                    <i class="fas fa-arrow-circle-left"></i>
                                </h1></div>
                                    <div className="numbers">
                                        <div onClick={()=>{this.goToPage(0)}} >01</div>
                                        <div onClick={()=>{this.goToPage(1)}}>02</div>
                                        <div onClick={()=>{this.goToPage(2)}}>03</div>
                                        <div onClick={()=>{this.goToPage(3)}} >04</div>
                                        <div style={{color:" #763251",opacity:"1"}} >05</div>
                                    </div ></>
                                }   <div style={showContent===5 ? {position:'absolute',width:'100%',top:"400vh",zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===5}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(5)}} className="abt-button" style={showContent===5 ? {width:'100%',backgroundColor:"#763251",marginTop:0}:{backgroundColor:"#763251"}}>{showContent===5 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===5 &&
                                        <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
                                            <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> Вакансии </span></div></div>
                                            <hr/>
                                            <div>
                                                <div><h2 className="client-title">Кто мы и что предлагаем?</h2></div>
                                                <div className="cl-mod-par">Atlant Finance LTD - это инвестиционно-управляющая компания, задача которой является привлечение
и управление инвестиционным капиталом. Компания была основана в апреле 2018 года, место
регистрации - Сент Винсент и Гренадины.</div>                  
                                                <div className="best-broker lolita">
                                                    <div className="best-broker-elem2">
                                                        <img src="https://open-broker.ru/static/icons/partners-perspective-icon.svg" alt=""/>
                                                        <span>Перспективная
и развивающая отрасль</span>
                                                    </div>
                                                    <div className="best-broker-elem2">
                                                        <img src="https://open-broker.ru/static/icons/partners-faststart-icon.svg" alt=""/>
                                                        <span>Крупная
и технологичная компания</span>       
                                                    </div>
                                                    <div className="best-broker-elem2">
                                                        <img src="https://open-broker.ru/static/icons/partners-search-icon.svg" alt=""/>
                                                        <span>Профессиональная
команда и соцпакет</span>
                                                    </div>
                                                </div>          
                                                <hr/>
                                                    <div><h2 className="client-title">Возможности карьеры</h2></div>
                                                    <div className="cl-mod-par">
                                                    Наша компания использует предпринимательский драйв наших людей, который имеет решающее
значение для успеха организации. Мы стремимся привлечь, развить и сохранить лучшие таланты в
отрасли. Это позволяет нам постоянно совершенствовать нашу повседневную деятельность и, в
конечном счете, компанию в целом.
                                                        </div>
                                                        <hr/>
                                                <div><h2 className="client-title">Хотите к нам?</h2></div>
                                                <div className="cl-mod-par"> Вы любите трудные проблемы. Те, которые расширяют ваше понимание. Вы интеллектуально
любопытны? Вы любите, чтобы ваши коллеги бросали вам
вызов. Работать бок о бок с людьми, у которых можно многому научиться, и решить эти проблемы
вместе, чтобы увидеть реальные результаты. Это похоже на тебя? Если да и вы заинтересованы в том,
чтобы быть рассмотренным по возможным вакансиям, пишите и отправляйте нам свое резюме на:
info@atlantfinance.com</div>
                                                <Forms/>
                                                <hr/>
                                                
                                            <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> Вакансии </span></div></div>
                                            </div>
                                            <Footer/>
                                    </div>
                                    }
                                    </div>
                                <CSSTransition in={this.state.which===5 && showContent===false } timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#763251",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>
                
                    

                </ReactPageScroller>
                   
                </div>
        )
    }
}


export default AboutUs;
