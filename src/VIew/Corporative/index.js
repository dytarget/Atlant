import React, { Component} from 'react';
import './AboutUs.css';
import ReactPageScroller from "react-page-scroller";
import {CSSTransition} from 'react-transition-group';
import {Link} from 'react-router-dom';
import Forms from '../Form/index';
import  Footer from '../Footer/index';



export class Corporative extends Component {
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
        window.scrollTo(0,0);
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
                <ReactPageScroller style={{maxHeight:'100vh',overflowX:'hidden'}}  blockScrollUp={showContent}  blockScrollDown={showContent} ref={c => this.reactPageScroller = c} pageOnChange={(info)=>{console.log(info);this.setState({which:info})}}>
                <div className="bottom-layer" >
                                {(showContent===false && this.state.which===1) &&
                                <CSSTransition in={this.state.which===1 && !showContent}  timeout={2900} classNames="animtext">
                                    <h1 className="text">Оптимизация бизнес процессов</h1>
                                </CSSTransition>
                                }
                                {(this.state.which===1 && !showContent )&&
                                <> <div className="gb" onClick={this.goBack}>
                                <h1>
                                    <i class="fas fa-arrow-circle-left"></i>
                                </h1></div>
                                    <div className="numbers">
                                        <div style={{color:"#812b47",opacity:"1"}}>01</div>
                                        <div onClick={()=>{this.goToPage(1)}}>02</div>
                                        <div onClick={()=>{this.goToPage(2)}}>03</div>
                                        <div onClick={()=>{this.goToPage(3)}}>04</div>
                                        <div onClick={()=>{this.goToPage(4)}}>05</div>
                                        <div onClick={()=>{this.goToPage(5)}}>06</div>
                                    </div ></>
                                }   <div style={showContent===1 ? {position:'absolute',width:'100%',top:0,zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===1}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(1)}} className="abt-button" style={showContent===1 ? {width:'100%',backgroundColor:"#812b47",marginTop:0}:{backgroundColor:"#812b47"}}>{showContent===1 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===1 &&
                                        <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
                                            <div className="pathroute"><div><Link><span> Корпоративный инвестор </span></Link>/<span className="active"> Оптимизация бизнес процессов </span></div></div>
                                            <hr/>
                                            <div>
                                                <div><h2 className="client-title">Оптимизация бизнес процессов</h2></div>
                                                <div className="cl-mod-par">Совершенствование существующих бизнес-процессов наших корпоративных клиентов такими
методами,</div>                  
                                                <div className="best-broker lolita">
                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/book.png')} alt=""/>
                                                        <span>SWOT-анализ</span>
                                                    </div>
                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/birdhouse.png')} alt=""/>
                                                        <span>Бенчмаркинг</span>       
                                                    </div>
                                                
                                                
                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/planet.png')} alt=""/>
                                                        <span>Анализ проблем процесса</span>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="cl-mod-par">Оптимизации, как правило, подлежат ключевые бизнес-процессы, так как оптимизация именно
этих процессов дает наибольший эффект. Нашей задачей в этом деле является работа над
усовершенствованием действий, осуществляемых в определенной последовательности.</div>                  
                                                <div className="best-broker lolita">
                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/book.png')} alt=""/>
                                                        <span>Увеличим контроль в отношении некоторых аспектов деятельности.</span>
                                                    </div>
                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/birdhouse.png')} alt=""/>
                                                        <span>Оптимизируем временные и трудовые затраты.</span>       
                                                    </div>
                                                
                                                
                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/planet.png')} alt=""/>
                                                        <span>Построим системы отчетных балансов.</span>
                                                    </div>

                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/planet.png')} alt=""/>
                                                        <span>Рассчитаем аналитические коэффициентов.</span>
                                                    </div>

                                                    <div className="best-broker-elem">
                                                        <img src={require('../../img/planet.png')} alt=""/>
                                                        <span>Вертикальный и горизонтальный анализ отчетности.</span>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div><h2 className="client-title">Есть вопросы?</h2></div>
                                                <Forms/>
                                                <hr/>
                                            <div className="pathroute"><div><Link><span>Корпоративный инвестор </span></Link>/<span className="active"> Оптимизация бизнес процессов </span></div></div>
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
                                        <h1 className="text">Управление корпоративным капиталом</h1>
                                    </CSSTransition>
                                }
                                {(this.state.which===2 && !showContent )&&
                                <> <div className="gb" onClick={this.goBack}>
                                <h1>
                                    <i class="fas fa-arrow-circle-left"></i>
                                </h1></div>
                                    <div className="numbers">
                                        <div onClick={()=>{this.goToPage(0)}} >01</div>
                                        <div style={{color:" #763251",opacity:"1"}} >02</div>
                                        <div onClick={()=>{this.goToPage(2)}}>03</div>
                                        <div onClick={()=>{this.goToPage(3)}}>04</div>
                                        <div onClick={()=>{this.goToPage(4)}}>05</div>
                                        <div onClick={()=>{this.goToPage(5)}}>06</div>

                                    </div ></>
                                }   <div style={showContent===2 ? {position:'absolute',width:'100%',top:"100vh",zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===2}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(2)}} className="abt-button" style={showContent===2 ? {width:'100%',backgroundColor:"#763251",marginTop:0}:{backgroundColor:"#763251"}}>{showContent===2 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===2 &&
                                        <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
                                            <div className="pathroute"><div><Link><span> Корпоративный инвестор </span></Link>/<span className="active"> Управление корпоративным капиталом. </span></div></div>
                                            <hr/>
                                            <div>
                                                <div><h2 className="client-title">Управление корпоративным капиталом.</h2></div>
                                                <div className="cl-mod-par">На протяжение всего времени существования, всегда в экономике мы наблюдали конкурентную борьбу. И на
данный момент один из решающих факторов, позволяющий многим компаниям оказаться победителем в
этой борьбе, финансовое положение компании</div>                  
                                                <div className="best-broker lolita">
                                                    <div className="best-broker-elem2">
                                                        <img src="https://open-broker.ru/static/icons/20years.svg" alt=""/>
                                                        <div className="cl-mod-par">Управление активами, валютные операции, операции с ценными бумагами мы предложим комплексное
решение для этих и многих других задач. Для каждого корпоративного клиента мы предлагаем
индивидуальный подход и сервис. Мы поможем подобрать наиболее оптимальное решение с учетом
юридических, налоговых и других особенностей клиента и его бизнеса.</div>
                                                    </div>
                                                    <div className="best-broker-elem2">
                                                        <img src="https://open-broker.ru/static/icons/rating-aaa.svg" alt=""/>
                                                        <div className="cl-mod-par">У множества предприятий образуется свободный денежный кэш, который они нерационально используют, в
аналогии пользуются банковскими вкладами, а то и дело просто накапливают на балансе. При этом всегда
есть множество оптимальных решений, и наша команда может их предложить!</div>       
                                                    </div>
                                                    <div className="best-broker-elem2">
                                                        <img src="https://open-broker.ru/static/icons/100000clients.svg" alt=""/>
                                                        <div className="cl-mod-par">В нашей линейке представлены разнообразные стратегии доверительного управления для разных типов
клиентов, исходя из их риск-профиля, финансовых возможностей, сроков инвестирования и иных факторов.
Это позволяет оптимизировать общий портфель, как по валютам, так и по регионам инвестирования. </div>    
                                                    </div>
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
                                <CSSTransition in={this.state.which===2 && showContent===false } timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#763251",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>

                       
                        <div className="bottom-layer" >
                        {(!showContent && this.state.which===3) &&
                                    <CSSTransition in={this.state.which===3 && !showContent}  timeout={2900} classNames="animtext">
                                        <h1 className="text">Наши текущие портфели</h1>
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
                                        <div onClick={()=>{this.goToPage(5)}}>06</div>

                                    </div ></>
                                }   <div style={showContent===3 ? {position:'absolute',width:'100%',top:"200vh",zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===3}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(3)}} className="abt-button" style={showContent===3 ? {width:'100%',backgroundColor:"#534169",marginTop:0}:{backgroundColor:"#534169"}}>{showContent===3 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===3 &&
                                        <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
                                            <div className="pathroute"><div><Link><span> Корпоративный инвестор </span></Link>/<span className="active"> Наши текущие портфели </span></div></div>
                                            <hr/>
                                            <div>
                                                <div><h2 className="client-title">Инвестиционный портфель</h2></div>
                                                <div className="cl-mod-par">это совокупность ценных бумаг и других активов, собранных
вместе для достижения определенных целей. Составляющими нашего инвестиционного
портфеля выступают различные активы, Акции, ETF, Облигации, Валюты, Опционы. Нашей
основной задачей является создать качественный и надежный портфель.
                                                </div>

                                                <div><h2 className="client-title">Главная причина необходимости создания своего инвестиционного портфеля — диверсификация.</h2></div>
                                                <div className="cl-mod-par">Принцип инвестиционного портфеля прост: не ставить все деньги на кон, защитить себя от потерь
и «не класть все яйца в одну корзину». Для этого надо вкладывать в различные, взаимо-обратные
инструменты, чтоб минимизировать риск и сохранить доходность.
                                                </div>


                                                <div className="ourClient">
                            <div className="modal-zb">
                                <div className="modal-left" onClick={()=>{this.setState({activeclient:"defense"});window.scrollTo(0,window.scrollY+1)}} style={this.state.activeclient==="defense" ? {backgroundColor:"#F3F5F6",color:"#73808D",width:"36.5vw"}:{width:"36.5vw"}}>Консервативный</div>
                                <div className="modal-center" onClick={()=>{this.setState({activeclient:"kupon"});window.scrollTo(0,window.scrollY+1)}} style={this.state.activeclient==="kupon" ? {background:"#F3F5F6",color:"#73808D",width:"27.5vw"}:{width:"27.5vw"}}>Умеренный</div>
                                <div className="modal-right" onClick={()=>{this.setState({activeclient:"dohod"});window.scrollTo(0,window.scrollY+1)}} style={this.state.activeclient==="dohod" ? {background:"#F3F5F6",color:"#73808D",width:"29.5vw"}:{width:"29.5vw"}}>Агрессивный</div>
                            </div>
                        <div className="cl-mod-title">{this.state.activeclient==="defense" ? "Консервативный (защитный)" : (this.state.activeclient==="kupon" ? "Умеренный (стабильность)":"Агрессивный (доходный)")}</div>
                        
                        <div className="cl-mod-par">{this.state.activeclient==="defense" ? "инвестиционный портфель состоит из государственных ценных бумаг,акций «голубых фишек», золота и обеспечивает высокую защищенность составляющих и портфеля в целом, а доходность инвестиционного портфеля сохраняется на необходимом инвестору уровне." : (
                            this.state.activeclient==="kupon" ? "Оптимизация по доходности и степени риска — характерная черта умеренного инвестиционного портфеля. В таком портфеле находятся как высокодоходные бумаги с высокой степенью риска, так и низкодоходные надежные бумаги.": 
                            "Агрессивный инвестиционный портфель укомплектован высокодоходными ценными бумагами, включая их дериваты. Эти ценные бумаги имеют достаточно высокую степень риска.")}</div>
                         <div >
                                {this.state.activeclient==="defense" ? (
                                           <div className="modal-element">
                                                <div style={{backgroundImage:"url("+require('../../img/kevin-bhagat-zNRITe8NPqY-unsplash.jpg')+")"}}  className="modal-elem-list"> 
                                                    <span className="modal-el-title">Консервативный (защитный)</span> 
                                                    <div className="hovered-card card1">
                                                        <span>
                                                            <p className="hovered-title">Срок инвестиций</p>
                                                            <p className="hovered-text">от 1 года</p>
                                                            <p className="hovered-title">Доходность</p>
                                                            <p className="hovered-text">36% в иностранной валюте</p>
                                                            <p className="hovered-title">Защита капитала</p>
                                                            <p className="hovered-text">100%</p>
                                                        </span>
                                                    </div>
                                                </div>

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

                                                <div  className="best-broker">
                                                    <div className="best-broker-elem">
                                                        <img src="https://open-broker.ru/static/icons/rocket.svg" alt=""/>
                                                        <span>Быстрый <br/> старт</span>
                                                        <div className="cl-mod-par">Открытие счёта онлайн и доступ к торгам уже сегодня</div>
                                                    </div>
                                                    <div className="best-broker-elem">
                                                        <img src="https://open-broker.ru/static/icons/input-output.svg" alt=""/>
                                                        <span>Оперативный ввод-вывод денег</span>
                                                        <div className="cl-mod-par">Простота и оперативность зачислений, переводов и выводов денежных средств</div>
                                                    </div>
                                                    <div className="best-broker-elem">
                                                        <img src="https://open-broker.ru/static/icons/wallet.svg" alt=""/>
                                                        <span>Отсутствие скрытых комиссий</span>
                                                        <div className="cl-mod-par">Комиссия брокера взимается только при совершении сделок. Нет сделок — нет комиссии брокера</div>
                                                    </div>
                                                </div>                    
                                ):(

                                        //   <div  className="modal-element">

                                        //     <div style={{backgroundImage:"url("+require('../../img/alvaro-reyes-4eTnTQle0Ks-unsplash.jpg')+")"}}  className="modal-elem-list"> 
                                        //         <span className="modal-el-title">Структурные продукты</span> 
                                        //         <div className="hovered-card card1">
                                        //                 <span>
                                        //                     <p className="hovered-title">Структурные продукты</p>
                                        //                     <p className="hovered-text">Вы можете инвестировать средства с условием защиты вложенного капитала или получения фиксированной выплаты, а также дополнительно заработать на акциях, которыми владеете, в случае их роста</p>
                                        //                 </span>
                                        //                 <button className="hovered-button">Узнать больше</button>
                                        //             </div>
                                                   
                                        //     </div>

                                        //     <div style={{backgroundImage:"url("+require('../../img/denny-muller-XNTC5G1W3Xs-unsplash.jpg')+")"}}  className="modal-elem-list">
                                        //     <span className="modal-el-title">Индивидуальный торговый счет</span>
                                        //     <div className="hovered-card card2">
                                        //                 <span>
                                        //                     <p className="hovered-title">Индивидуальный торговый счет</p>
                                        //                     <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                        //                 </span>
                                        //                 <button className="hovered-button">Узнать больше</button>
                                        //             </div>
                                                   
                                        //     </div>

                                        //     <div style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}}  className="modal-elem-list">
                                        //     <span className="modal-el-title">Доверительное управление проект</span>
                                        //     <div className="hovered-card card3">
                                        //                 <span>
                                        //                     <p className="hovered-title">Доверительное управление проект</p>
                                        //                     <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                        //                 </span>
                                        //                 <button className="hovered-button">Узнать больше</button>
                                        //             </div>
                                                   
                                        //     </div>
                                        // </div>
                                        // // </CSSTransition>
                                        <></>

                                ))}
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
                                        <h1 className="text">Методы защиты капитала</h1>
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
                                        <div onClick={()=>{this.goToPage(5)}}>06</div>

                                    </div ></>
                                }   <div style={showContent===4 ? {position:'absolute',width:'100%',top:"300vh",zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===4}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(4)}} className="abt-button" style={showContent===4 ? {width:'100%',backgroundColor:"#394674",marginTop:0}:{backgroundColor:"#394674"}}>{showContent===4 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===4 &&
                                        <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
                                            <div className="pathroute"><div><Link><span> Корпоративный инвестор </span></Link>/<span className="active"> Методы защиты капитала </span></div></div>
                                            <hr/>
                                            <div>
                                                <div><h2 className="client-title">Методы защиты капитала</h2></div>
                                                <div className="cl-mod-par">Для того чтобы сохранить свой капитал применяются различные методы и стратегии, которые
предусматривают применение специальных видов активов. Например, как диверсификация риска
путем создания портфеля, состоящего из различного рода ценных бумаг, применения методов
хеджирования на основе производных инструментов, реальных опционов и т.п.
список успеха.</div>                  
                                              
                                                <hr/>
                                                    <div><h2 className="client-title">К безопасным активам, <br/> в первую очередь, <br/> относят следующие группы</h2></div>
                                                    
                                                    <div className="modal-element">
                                                <div style={{backgroundImage:"url("+require('../../img/kevin-bhagat-zNRITe8NPqY-unsplash.jpg')+")"}}  className="modal-elem-list"> 
                                                    <span className="modal-el-title">Драгоценные металлы</span> 
                                                    <div className="hovered-card card1">
                                                        <span>
                                                            <p className="hovered-title">Способы</p>
                                                            <p className="hovered-text">1)приобретение фьючерсов</p>
                                                            <p className="hovered-text">2)приобретение акций золотодобывающих компаний</p>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div style={{backgroundImage:"url("+require('../../img/helloquence-5fNmWej4tAA-unsplash.jpg')+")"}}  className="modal-elem-list">
                                                <span className="modal-el-title">Приобретение «защитных» акций и облигаций.</span>
                                                <div className="hovered-card card2">
                                                        <span>
                                                            <p className="hovered-title">К «защитным акциям» относят обыкновенные привилегированные акции и ряд других, которые
имеют следующие общие черты:</p>
                                                            <p className="hovered-text">1. высокая дивидендная доходность (более 4–5 %);</p>
                                                            <p className="hovered-text">2.высокий уровень ликвидности</p>

                                                        </span>
                                                        </div> 
                                                   
                                                </div>

                                                <div style={{backgroundImage:"url("+require('../../img/m-b-m-ZzOa5G8hSPI-unsplash.jpg')+")"}}     className="modal-elem-list">
                                                 <span className="modal-el-title">Валюта и недвижимость</span>
                                                <div className="hovered-card card3">
                                                        <span>
                                                            <p className="hovered-title">Покупка валюты</p>
                                                            <p className="hovered-text">в качестве защитного инструмента способна застраховать часть инвестиций, для
чего правда потребуется более детальный анализ валютного рынка. </p>
                                                        </span>
                                                    </div> 
                                                </div>
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
                                        <h1 className="text">Партнеры компании</h1>
                                    </CSSTransition>
                                }
                                {(this.state.which===5 && !showContent )&&
                                <> <div className="gb" onClick={this.goBack}>
                                <h1>
                                    <i class="fas fa-arrow-circle-left"></i>
                                </h1></div>
                                    <div className="numbers">
                                        <div onClick={()=>{this.goToPage(0)}} >01</div>
                                        <div onClick={()=>{this.goToPage(1)}} >02</div>
                                        <div onClick={()=>{this.goToPage(2)}}>03</div>
                                        <div onClick={()=>{this.goToPage(3)}}>04</div>
                                        <div style={{color:" #534169",opacity:"1"}} >05</div>
                                        <div onClick={()=>{this.goToPage(5)}}>06</div>

                                    </div ></>
                                }   <div style={showContent===5 ? {position:'absolute',width:'100%',top:"400vh",zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===5}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(5)}} className="abt-button" style={showContent===5 ? {width:'100%',backgroundColor:"#534169",marginTop:0}:{backgroundColor:"#534169"}}>{showContent===5 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===5 &&
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
                                <CSSTransition in={this.state.which===5 && showContent===false } timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#534169",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div> 
                        <div className="bottom-layer" >
                                {(!showContent && this.state.which===6) &&
                                    <CSSTransition in={this.state.which===6 && !showContent}  timeout={2900} classNames="animtext">
                                        <h1 className="text">Брокерское обслуживание</h1>
                                    </CSSTransition>
                                }
                                {(this.state.which===6 && !showContent )&&
                                <> <div className="gb" onClick={this.goBack}>
                                <h1>
                                    <i class="fas fa-arrow-circle-left"></i>
                                </h1></div>
                                    <div className="numbers">
                                        <div onClick={()=>{this.goToPage(0)}} >01</div>
                                        <div onClick={()=>{this.goToPage(1)}}>02</div>
                                        <div onClick={()=>{this.goToPage(2)}}>03</div>
                                        <div onClick={()=>{this.goToPage(3)}} >04</div>
                                        <div onClick={()=>{this.goToPage(4)}}>05</div>
                                        <div style={{color:" #394674",opacity:"1"}} >06</div>

                                    </div ></>
                                }   <div style={showContent===6 ? {position:'absolute',width:'100%',top:"500vh",zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===6}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(6)}} className="abt-button" style={showContent===6 ? {width:'100%',backgroundColor:"#394674",marginTop:0}:{backgroundColor:"#394674"}}>{showContent===6 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===6 &&
                                        <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
                                            <div className="pathroute"><div><Link><span> Корпоративный инвестор </span></Link>/<span className="active"> Брокерское обслуживание </span></div></div>
                                            <hr/>
                                            <div>
                                                <div><h2 className="client-title">Брокерское обслуживание</h2></div>
                                                <div className="cl-mod-par">это комплекс продуктов и услуг, которые наша компания
предоставляет своим клиентам. Это также доступ на биржу, технологии интернет-трейдинга,
консультационное сопровождение клиентов на каждом этапе работы с ценными бумагами,
деривативами и инструментами валютного рынка.</div>  

<div className="cl-mod-par">Кроме того, это специальные предложения для корпоративных клиентов и для состоятельных
частных лиц: структурные продукты с защитой капитала, доверительное управление,
высокоскоростной доступ и торговые роботы.</div> 
                                              
                                                <hr/>
                                                    <div><h2 className="client-title">Клиенты могут воспользоваться <br/> следующими преимуществами:</h2></div>
                                                    <div className="cl-mod-par">Клиенты нашей компании могут торговать акциями, облигациями, валютой, инвестиционными
паями ETP, биржевыми фондами ETF, различными биржевыми индексными нотами ETN,
товарами, производными финансовыми инструментами, в том числе и внебиржевыми
деривативами.</div> >
                                                    
                                                    <div className="modal-element">
                                                <div style={{backgroundImage:"url("+require('../../img/kevin-bhagat-zNRITe8NPqY-unsplash.jpg')+")"}}  className="modal-elem-list"> 
                                                    <span className="modal-el-title">Бесплатное открытие и обслуживание счета</span> 
                                                    <div className="hovered-card card1">
                                                        <span>
                                                        <p className="hovered-title"></p>

                                                            <p className="hovered-text">Свободный доступ к торговой платформе AtlantFinStation, Thinkorswim и терминалам Swissquote
Bank.</p>
<p className="hovered-title"></p>
                                                            <p className="hovered-text">Самая реалистичная и надежная аналитика по Американским, Европейским и Азиатским рынкам.</p>

                                                             <p className="hovered-title"></p>
                                                            <p className="hovered-text">Особые условия для каждого инвестора</p> 
                                                            </span>
                                                    </div>
                                                </div>

                                                <div style={{backgroundImage:"url("+require('../../img/helloquence-5fNmWej4tAA-unsplash.jpg')+")"}}  className="modal-elem-list">
                                                <span className="modal-el-title">Рекомендации пр управлению риском</span>
                                                <div className="hovered-card card2">
                                                        <span>
                                                           
                                                        </span>
                                                        </div> 
                                                   
                                                </div>

                                                <div style={{backgroundImage:"url("+require('../../img/m-b-m-ZzOa5G8hSPI-unsplash.jpg')+")"}}     className="modal-elem-list">
                                                 <span className="modal-el-title">Регулярные отчеты о состоянии ваших активов</span>
                                                <div className="hovered-card card3">
                                                        <span>
                                                            <p className="hovered-title">Индивидуальное дистанционное обучение.</p>
                                                        </span>
                                                    </div> 
                                                </div>
                                            </div>
                                                        <hr/>
                                                <div><h2 className="client-title">Есть вопросы?</h2></div>
                                                <Forms/>
                                                <hr/>
                                                <div className="pathroute"><div><Link><span> Корпоративный инвестор </span></Link>/<span className="active"> Брокерское обслуживание </span></div></div>
                                            </div>
                                            <Footer/>
                                    </div>
                                    }
                                    </div>
                                <CSSTransition in={this.state.which===6 && showContent===false } timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#394674",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>

                </ReactPageScroller>
                   
                </div>
        )
    }
}


export default Corporative;
