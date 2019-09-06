import React, { Component} from 'react';
import './AboutUs.css';
import ReactPageScroller from "react-page-scroller";
import {CSSTransition} from 'react-transition-group';
import Footer from '../Footer';
import {Link} from 'react-router-dom';
import Forms from '../Form';



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
                                    <h1 className="text">Оптимизация бизнес процессов</h1>
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
                                        {/* <div onClick={()=>{this.goToPage(4)}}>05</div> */}
                                    </div >
                                    </>
                                }   <div style={showContent===1 ? {position:'absolute',width:'100%',top:0,zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===1}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(1)}} className="abt-button" style={showContent===1 ? {width:'100%',backgroundColor:"#812b47",marginTop:0}:{backgroundColor:"#812b47"}}>{showContent===1 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===1 &&


                                        <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white', overflowX:'hidden',overflowY:'scroll'}} className="show-background-wrap">

                                            <div style={{padding:'20vh 80px',textAlign:'center',backgroundImage:"url("+require('../../img/workplace-2303853_1920.jpg')+")"}}  className="background-elem">
                                                <h1 className="background-title">Совершенствование <br/> существующих </h1>
                                                <p  className="background-text">Бизнес-процессов наших корпоративных <br/> клиентов осуществляется следующими методами</p>
                                                {/* <button className="background-button">Посмотреть</button> */}
                                            </div>

                                            <div style={{textAlign:'left',backgroundImage:"url("+require('../../img/laptop-3076957_1920.jpg')+")"}}  className="background-elem">
                                                <h1  className="background-title">SWOT - анализ</h1>
                                                <p className="background-text">SWOT-анализ - один из самых распространенных <br/> методов, оценивающих в комплексе внутренние <br/>и внешние факторы, влияющие на  <br/> развитие компании. Это анализ сильных <br/> и слабых сторон организации, а также возможностей <br/> и угроз со стороны внешней окружающей среды.</p>
                                            </div>      

                                            <div style={{textAlign:'left'}}  className="background-elem-video">
                                                <div className="video-background">
                                                    <video autoPlay loop muted src={require('../../img/Vietnam - 25171.mp4')}></video>
                                                </div>
                                                <div className="video-content">
                                                    <h1  className="background-title">Бенчмаркинг</h1>
                                                    <p className="background-text">Бенчмаркинг может рассматриваться как процесс, <br/> деятельность по долгосрочному обдумыванию <br/>стратегии предпринимательства, основывающиеся  <br/> на лучшем опыте партнеров и конкурентов на <br/>отраслевом, межотраслевом, национальном и межнациональном уровнях. </p>
                                                </div>
                                            </div>  

                                            <div style={{textAlign:'right',backgroundImage:"url("+require('../../img/laptop-3174729_1920.jpg')+")"}}  className="background-elem">
                                                <h1  className="background-title">Анализ финансовой <br/> отчетности</h1>
                                                <p className="background-text">Анализ финансовой отчетности — это процесс, <br/> при помощи которого мы оцениваем прошлое и <br/>текущее финансовое положение и результаты <br/> деятельности организации.</p>
                                            </div>  



                                            <div style={{textAlign:'left',backgroundImage:"url("+require('../../img/rupee-4395499_1920.jpg')+")"}}  className="background-elem">
                                                    <h1  className="background-title">Оптимизации, как правило</h1>
                                                    <p className="background-text">подлежат ключевые бизнес-процессы, так как оптимизация именно <br/>этих процессов дает наибольший эффект. Нашей задачей в этом деле является работа над<br/>усовершенствованием действий, осуществляемых в определенной последовательности. <br/>
                                                    1) Увеличим контроль в отношении некоторых аспектов деятельности. <br/>
                                                    2) Оптимизируем временные и трудовые затраты. <br/>
                                                    3) Построим системы отчетных балансов. <br/>
                                                    4) Рассчитаем аналитические коэффициенты. <br/>
                                                    5) Вертикальный и горизонтальный анализ отчетности. <br/>
                                                    6) Анализ DCF.</p>
                                                </div>  



   
                                         
                                        </div>


                                    //     <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
                                    //         <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> Пресс-центр </span></div></div>
                                    //         <hr/>
                                    //         <div>
                                    //             <div><h2 className="client-title">Пресс-центр <br/>Atlant Finance</h2></div>
                                    //             <div className="cl-mod-par">Чем мы можем быть вам полезны?</div>                  
                                    //             <div className="best-broker lolita">
                                    //                 <div className="best-broker-elem">
                                    //                     <img src={require('../../img/book.png')} alt=""/>
                                    //                     <span>Комментарии и прогнозы</span>
                                    //                 </div>
                                    //                 <div className="best-broker-elem">
                                    //                     <img src={require('../../img/birdhouse.png')} alt=""/>
                                    //                     <span>Аналитика и исследования</span>       
                                    //                 </div>
                                                
                                                
                                    //                 <div className="best-broker-elem">
                                    //                     <img src={require('../../img/planet.png')} alt=""/>
                                    //                     <span>Информация о компании</span>
                                    //                 </div>
                                    //                 <div className="best-broker-elem">
                                    //                     <img src={require('../../img/atm.png')} alt=""/>
                                    //                     <span>Мнение об отрасли</span>
                                    //                 </div>
                                    //             </div>
                                    //             <hr/>
                                    //             <div><h2 className="client-title">Есть вопросы?</h2></div>
                                    //             <Forms/>
                                    //             <hr/>
                                    //         <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> Пресс-центр </span></div></div>
                                    //         </div>
                                    //         <Footer/>
                                    // </div>
                                    }
                                    </div>
                                <CSSTransition in={this.state.which===1 && !showContent } timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#812b47",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>

            
                        <div className="bottom-layer" >
                                {(!showContent && this.state.which===2) &&
                                    <CSSTransition in={this.state.which===2 && !showContent}  timeout={2900} classNames="animtext">
                                        <h1 className="text">Наши текущие портфели</h1>
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
                                        {/* <div onClick={()=>{this.goToPage(4)}}>05</div> */}
                                    </div ></>
                                }   <div style={showContent===2 ? {position:'absolute',width:'100%',top:"100vh",zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===2}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{window.open('/portfels')}} className="abt-button" style={{backgroundColor:"#763251"}}>{showContent===2 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===2 &&
                                                <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white', overflowX:'hidden',overflowY:'scroll'}} className="show-background-wrap">

                                                <div style={{textAlign:'center',backgroundImage:"url("+require('../../img/drawing-pad-1209779_1920.jpg')+")"}}  className="background-elem">
                                                    <h1 className="background-title">Мы сосредоточены на </h1>
                                                    <p  className="background-text">Понимании того, как работает вся <br/> мировая экономика, мы следим за тем <br/> куда перетекает капитал. Мы контролируем <br/> все информационные потоки. <br/>  Мы оперируем  большими объемами свободной ликвидности. <br/> Мы мигрируем по рынкам в поисках наилучшей доходности. </p>
                                                    {/* <button className="background-button">Посмотреть</button>  */}
                                                </div>

                                                <div style={{textAlign:'right',backgroundImage:"url("+require('../../img/office-3126597_1920.jpg')+")"}}  className="background-elem">
                                                    <h1  className="background-title">Вследствие этого <br/> премия за риск</h1>
                                                    <p className="background-text">Ликвидность и дюрацию искусственно <br/> занижается, а бум финансового <br/> инжиниринга, то есть, предложение  <br/> широкому кругу инвесторов продуктов <br/> с закамуфлированным высоким левериджем, лишь <br/> приносит наивысшие результаты.</p>
                                                </div>  


                                                <div style={{textAlign:'left'}}  className="background-elem-video">
                                                    <div className="video-background">
                                                        <video autoPlay loop muted src={require('../../img/Whiteboard - 2303.mp4')}></video>
                                                    </div>
                                                    <div className="video-content">
                                                        <h1  className="background-title">Наша миссия <br/> состоит в том</h1>
                                                        <p className="background-text">Чтобы обеспечить нашим инвесторам <br/> наивысшую отдачу Поддерживать приверженность <br/> нашим принципам целостности, дисциплины <br/> и превосходства.</p>
                                                        {/* <button  className="background-button">Посмотреть</button> */}
                                                    </div>
                                                </div>  


                                                <div style={{textAlign:'left',backgroundImage:"url("+require('../../img/girl-2618562_1920.jpg')+")"}}  className="background-elem">
                                                    <h1  className="background-title">Мы используем </h1>
                                                    <p className="background-text">Глобальный мультистратегический инвестиционный подход, <br/> оппортунистически участвуя в широком спектре <br/> торговых и инвестиционных стратегий через широкую <br/> группу диверсифицированных менеджеров. Atlant Finance  <br/> отличается от других компаний по управлению альтернативными <br/> инвестициями своей способностью последовательно <br/> приносить нашим инвесторам высококачественную прибыль.</p>
                                                </div>      
                                                </div>



//                                         <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
//                                             <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> О нас </span></div></div>
//                                             <hr/>
//                                             <div>
//                                                 <div><h2 className="client-title">Главное о нас</h2></div>
//                                                 <div className="cl-mod-par">ЧAtlant Finance LTD - это инвестиционно-управляющая компания, задача которой является привлечение
// и управление инвестиционным капиталом. Компания была основана в апреле 2018 года, место
// регистрации - Сент Винсент и Гренадины. Так как компания зарегистрирована в офшоре, это позволяет
// решать множество задач для наших клиентов.</div>                  
//                                                 <div className="best-broker lolita">
//                                                     <div className="best-broker-elem2">
//                                                         <img src="https://open-broker.ru/static/icons/20years.svg" alt=""/>
//                                                         <span>Atlant Finance LTD не имеет головного офиса и  опыт которых 10 лет.</span>
//                                                     </div>
//                                                     <div className="best-broker-elem2">
//                                                         <img src="https://open-broker.ru/static/icons/rating-aaa.svg" alt=""/>
//                                                         <span>Очень высокая степень надежности «АА.iv»</span>       
//                                                     </div>
//                                                     <div className="best-broker-elem2">
//                                                         <img src="https://open-broker.ru/static/icons/100000clients.svg" alt=""/>
//                                                         <span>Нас выбрали более 130000 инвесторов</span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="cl-mod-par">Мы не стремимся к быстрым заработкам, но к стабильности в
// заработке, как для наших клиентов, так и для компании. Привлеченный инвестиционный капитал
// инвестируется в разного рода активы, из которых большинство составляют ценные бумаги и
// высоколиквидные инструменты денежного рынка. Также компания всегда находится в поиске
// привлекательных проектов для инвестирования клиентского капитала и не только. В конкурентной
// среде мы не ищем слабостей, а создаем преимущества, что помогает компании стать титаном в
// индустрии инвестиций. Одним из таких преимуществ является защита инвестиционного капитала от
// потерь, путем создания многоуровневой системы оценки рисков и предотвращения ошибок
// &quot;человеческого фактора&quot;, а так же механических и когнитивных ошибок.</div>  
// <hr/>
//                                                 <div><h2 className="client-title">Есть вопросы?</h2></div>
//                                                 <Forms/>              
//                                                 <hr/>
//                                             <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> О нас </span></div></div>
//                                             </div>
//                                             <Footer/>
//                                     </div>
                                    }
                                    </div>
                                <CSSTransition in={this.state.which===2 && showContent===false } timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#763251",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>
                        <div className="bottom-layer" >
                        {(!showContent && this.state.which===3) &&
                                    <CSSTransition in={this.state.which===3 && !showContent}  timeout={2900} classNames="animtext">
                                        <h1 className="text">Методы защиты капитала</h1>
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
                                        {/* <div onClick={()=>{this.goToPage(4)}}>05</div> */}
                                    </div ></>
                                }   <div style={showContent===3 ? {position:'absolute',width:'100%',top:"200vh",zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===3}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(3)}} className="abt-button" style={showContent===3 ? {width:'100%',backgroundColor:"#534169",marginTop:0}:{backgroundColor:"#534169"}}>{showContent===3 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===3 &&


                                            <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white', overflowX:'hidden',overflowY:'scroll'}} className="show-background-wrap">

                                            <div style={{padding:'16vh 80px',textAlign:'center',backgroundImage:"url("+require('../../img/background-1747784_1280.jpg')+")"}}  className="background-elem">
                                                <h1 className="background-title">Защита капитала</h1>
                                                <p  className="background-text">Для того чтобы сохранить свой капитал применяются <br/> различные методы и стратегии, которые 
предусматривают <br/> применение специальных видов активов. Например, <br/> как диверсификация риска
путем создания портфеля, состоящего <br/> из различного рода ценных бумаг, применения методов
хеджирования <br/> на основе производных инструментов, <br/> реальных опционов и т.д. К безопасным активам, в первую очередь, <br/> относят следующие группы:</p>
                                            </div>

                                            <div style={{textAlign:'right',backgroundImage:"url("+require('../../img/desktop-3335728_1920.jpg')+")"}}  className="background-elem">
                                                <h1  className="background-title">Драгоценные металлы</h1>
                                                <p className="background-text">Традиционно золото во всей истории человечества <br/> считалось и считается до сих пор
единственным <br/> эквивалентом стоимости, который может <br/> спасти в самые «лихие времена».</p>
                                                <button onClick={()=>{window.open("/corporative/defending/expensive-metals")}}  className="background-button">Посмотреть</button>
                                            </div>  


                                            <div style={{color:'white',textAlign:'left'}}  className="background-elem-video">
                                                <div className="video-background">
                                                    <video autoPlay loop muted src={require('../../img/Turntable - 8437.mp4')}></video>
                                                </div>
                                                <div className="video-content">
                                                    <h1  className="background-title">Приобретение «защитных» акций</h1>
                                                    <p className="background-text">Защитные акции обычно растут хуже на бычьем <br/> рынке и меньше падают на медвежьем, их <br/>
главный признак – стабильность. <br/> Такие бумаги, как правило, неинтересны спекулянтам.</p>
                                                    <button onClick={()=>{window.open('/corporative/defending/defensive-sales')}}  className="background-button">Посмотреть</button>
                                                </div>
                                            </div>  


                                            <div style={{textAlign:'right',backgroundImage:"url("+require('../../img/rupee-4398439_1920.jpg')+")"}}  className="background-elem">
                                                <h1  className="background-title">Валюта</h1>
                                                <p className="background-text">Валютная диверсификация активов, <br/> а также финансовая подушка безопасности в твердой валюте <br/>
– часть стратегии риск-менеджмента. </p>
                                                <button  onClick={()=>{window.open('/corporative/defending/currency')}}  className="background-button">Посмотреть</button>
                                            </div>      

                                            <div style={{textAlign:'right',backgroundImage:"url("+require('../../img/planner-3820633_1920.jpg')+")"}}  className="background-elem">
                                                <h1  className="background-title">Облигации</h1>
                                                <p className="background-text">В приоритете – короткие бумаги (до 3 лет). <br/> Длинные облигации, как правило, более <br/>
чувствительны к любым изменениям на рынке. <br/> Желательно привязывать дюрацию к своему <br/>
горизонту инвестирования.</p>
                                                <button onClick={()=>{window.open('/corporative/defending/obligation')}}  className="background-button">Посмотреть</button>
                                            </div>     
                                            </div>
//                                         <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
//                                             <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active">Партнеры компании</span></div></div>
//                                             <hr/>
//                                             <div>
//                                                 <div><h2 className="client-title">Партнеры компании</h2></div>
                                                        
//                                                 <div className="best-broker lolita">
//                                                     <div className="best-broker-elem">
//                                                         <img src={require('../../img/bank.png')} alt=""/>
//                                                         <span>ArmSwissBank</span>
//                                                         <div className="cl-mod-par">банк-держатель клиентских счетов.
// Данный банк является частным инвестиционным банком. Банк не имеет кредитного портфеля и тем
// самым обеспечивает свою устойчивость и надежность сохранности денежных средств на своих счетах.</div>
//                                                     </div>
//                                                     <div className="best-broker-elem">
//                                                         <img src={require('../../img/bank.png')} alt=""/>
//                                                         <span>Exante</span>    
//                                                         <div className="cl-mod-par">брокер нового поколения. Компания Exante, помогает нам оперировать
// на международных финансовых рынках и позволяет проводить сложные торговые операции с
// минимальными затратами. В партнерстве с компанией Exante мы создаем одно из наших конкурентных
// преимуществ, таких как участие в IPO без lock up и за минимальные комиссии.</div>   
//                                                     </div>
//                                                     <div className="best-broker-elem">
//                                                         <img src={require('../../img/bank.png')} alt=""/>
//                                                         <span>Swissquote Bank</span>
//                                                         <div className="cl-mod-par">
//                                                         швейцарский банк и лидер в Швейцарии по
// предоставлению финансовых и торговых онлайн услуг. Swissquote Bank открывает для нашей
// компании доступ к денежному рынку и рынку капитала, что дает нам возможность добиться
// максимальной доходности на изменении курсов иностранных валют.
//                                                         </div>
//                                                     </div>

//                                                     <div className="best-broker-elem">
//                                                         <img src={require('../../img/bank.png')} alt=""/>
//                                                         <span>Utip Technologies</span>
//                                                         <div className="cl-mod-par">
//                                                         наш партнер, чье программное обеспечение помогает нашим
// клиентам перейти на новый уровень трейдинга и инвестирования.
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <hr/>
//                                                 <div><h2 className="client-title">Есть вопросы?</h2></div>
//                                                 <Forms/>
//                                                 <hr/>
//                                             <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> Партнеры компании </span></div></div>
//                                             </div>
//                                             <Footer/>
//                                     </div>
                                    }
                                    </div>
                                <CSSTransition in={this.state.which===3 && showContent===false } timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#534169",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>
                        
                       
                        <div className="bottom-layer" >
                                {(!showContent && this.state.which===4) &&
                                    <CSSTransition in={this.state.which===4 && !showContent}  timeout={2900} classNames="animtext">
                                        <h1 className="text">Брокерское обслуживание</h1>
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
                                        {/* <div onClick={()=>{this.goToPage(4)}}>05</div> */}
                                    </div ></>
                                }   <div style={showContent===4 ? {position:'absolute',width:'100%',top:"300vh",zIndex:10000}:null}>
                                        <CSSTransition in={this.state.which===4}  timeout={2900} classNames="animbutton">
                                            <button onClick={()=>{this.showContent(4)}} className="abt-button" style={showContent===4 ? {width:'100%',backgroundColor:"#394674",marginTop:0}:{backgroundColor:"#394674"}}>{showContent===4 ? ('Закрыть'):('Читать')}</button>
                                        </CSSTransition>
                                        {showContent===4 &&

                                            <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white', overflowX:'hidden',overflowY:'scroll'}} className="show-background-wrap">

                                            <div style={{padding:'16vh 80px',textAlign:'center',backgroundImage:"url("+require('../../img/magazine-3680550_1920.jpg')+")"}}  className="background-elem">
                                                <h1 className="background-title">Брокерское обслуживание </h1>
                                                <p  className="background-text">Сущность брокерских операций состоит <br/> в установлении через посредника-брокера контакта <br/>
между продавцом и покупателем. Независимо <br/> от того, какой конкретной деятельностью брокер <br/>
занимается или кого представляет, <br/> он всегда выступает как посредник в узком юридическом <br/>
смысле, совершая только фактические действия.</p>
                                                {/* <button className="background-button">Посмотреть</button> */}
                                            </div>

                                            <div style={{textAlign:'left',backgroundImage:"url("+require('../../img/robot-2937861_1920.jpg')+")"}}  className="background-elem">
                                                <h1  className="background-title">Клиенты могут <br/> воспользоваться следующими <br/> преимуществами</h1>
                                                <p className="background-text"> Клиенты нашей компании могут торговать <br/> акциями, облигациями, валютой, инвестиционными <br/>
паями ETP, биржевыми фондами ETF, <br/> различными биржевыми индексными нотами ETN, <br/>
товарами, производными финансовыми <br/> инструментами, в том числе и внебиржевыми <br/>
деривативами.</p>
                                                {/* <button  className="background-button">Посмотреть</button> */}
                                            </div>  


                                            <div style={{textAlign:'right'}}  className="background-elem-video">
                                                <div className="video-background">
                                                    <video autoPlay loop muted src={require('../../img/Waterfall - 24517.mp4')}></video>
                                                </div>
                                                <div className="video-content">
                                                    <h1  className="background-title">Бесплатное открытие и обслуживание счета</h1>
                                                    <button onClick={()=>{window.open("http://my.atlantfinance.com/registration?language=en")}}  className="background-button">Посмотреть</button>
                                                </div>
                                            </div>  


                                            <div style={{textAlign:'center',backgroundImage:"url("+require('../../img/desktop-3820634_1920.jpg')+")"}}  className="background-elem">
                                                <h1  className="background-title">Брокерские услуги</h1>
                                                <button onClick={()=>{window.open("/corporative/defending/broker-uslugi")}}  className="background-button">Посмотреть</button>
                                            </div>     

                                               <div style={{textAlign:'left',backgroundImage:"url("+require('../../img/composition-3326183_1920.jpg')+")"}}  className="background-elem">
                                                <h1  className="background-title">Участие в IPO, SPO, DPO</h1>
                                                <button onClick={()=>{window.open("/corporative/defending/ipospodpo")}}  className="background-button">Посмотреть</button>
                                            </div>     
</div>



//                                         <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
//                                             <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> Что мы делаем </span></div></div>
//                                             <hr/>
//                                             <div>
//                                                 <div><h2 className="client-title">Что мы делаем</h2></div>
//                                                 <div className="cl-mod-par">Atlant Finance сосредоточена на понимании того, как работает мир. Благодаря глубокому пониманию
// мировой экономики и финансовых рынков и воплощению этого понимания в больших портфелях и
// стратегических партнерствах с институциональными клиентами, мы создали отчетливый послужной
// список успеха.</div>                  
//                                                 <div className="best-broker lolita">
//                                                     <div className="best-broker-elem2">
//                                                         <img src="https://open-broker.ru/static/icons/20years.svg" alt=""/>
//                                                         <span>Наша миссия состоит в том, чтобы обеспечить нашим инвесторам наивысшую отдачу</span>
//                                                     </div>
//                                                     <div className="best-broker-elem2">
//                                                         <img src="https://open-broker.ru/static/icons/rating-aaa.svg" alt=""/>
//                                                         <span>Поддерживать приверженность нашим принципам целостности, дисциплины и
// превосходства.</span>       
//                                                     </div>
//                                                     <div className="best-broker-elem2">
//                                                         <img src="https://open-broker.ru/static/icons/100000clients.svg" alt=""/>
//                                                         <span>Мы предоставляем нашим торговым командам возможность самостоятельно сосредоточиться на
// конкретных возможностях и стратегиях</span>
//                                                     </div>
//                                                 </div>          
//                                                 <hr/>
//                                                     <div><h2 className="client-title">Инвестиционный подход</h2></div>
//                                                     <div className="cl-mod-par">
//                                                             Мы используем глобальный мультистратегический инвестиционный подход,
//                                                             оппортунистически участвуя в широком спектре торговых и инвестиционных стратегий через широкую
//                                                             группу диверсифицированных менеджеров. Atlant Finance отличается от других компаний по
//                                                             управлению альтернативными инвестициями своей способностью последовательно приносить нашим
//                                                             инвесторам высококачественную прибыль.
//                                                         </div>
//                                                         <hr/>
//                                                 <div><h2 className="client-title">Есть вопросы?</h2></div>
//                                                 <Forms/>
//                                                 <hr/>
//                                             <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> О нас </span></div></div>
//                                             </div>
//                                             <Footer/>
//                                     </div>
                                    }
                                    </div>
                                <CSSTransition in={this.state.which===4 && showContent===false } timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#394674",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>

                        {/* <div className="bottom-layer" >
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


                                                <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white', overflowX:'hidden',overflowY:'scroll'}} className="show-background-wrap">

                                                <div style={{padding:'16vh 80px',textAlign:'center',backgroundImage:"url("+require('../../img/whitespace-3435350_1920.jpg')+")"}}  className="background-elem">
                                                    <h1 className="background-title">Removing the barriers <br/> to investing.</h1>
                                                    <p  className="background-text">Our broad range of iShares ETFs <br/> provide an efficient way to gain exposure to global <br/> markets and a full spectrum of asset classes, making <br/> investing  accessible for more and more people</p>
                                                    <button className="background-button">Посмотреть</button>
                                                </div>

                                                <div style={{textAlign:'right',backgroundImage:"url("+require('../../img/busy-1972166_1920.jpg')+")"}}  className="background-elem">
                                                    <h1  className="background-title">Removing  the barriers <br/> to investing.</h1>
                                                    <p className="background-text">Our broad range of iShares ETFs <br/> provide an efficient way to gain <br/> exposure to global markets and <br/> a full spectrum of asset classes, <br/> making investing accessible for more and more people</p>
                                                    <button  className="background-button">Посмотреть</button>
                                                </div>  


                                                <div style={{textAlign:'left'}}  className="background-elem-video">
                                                    <div className="video-background">
                                                        <video autoPlay loop muted src={require('../../img/Meeting - 2340.mp4')}></video>
                                                    </div>
                                                    <div className="video-content">
                                                        <h1  className="background-title">Removing  the barriers <br/> to investing.</h1>
                                                        <p className="background-text">Our broad range of iShares ETFs <br/> provide an efficient way to gain <br/> exposure to global markets and <br/> a full spectrum of asset classes, <br/> making investing accessible for more and more people</p>
                                                        <button  className="background-button">Посмотреть</button>
                                                    </div>
                                                </div>  


                                                <div style={{textAlign:'left',backgroundImage:"url("+require('../../img/composition-3326183_1920.jpg')+")"}}  className="background-elem">
                                                    <h1  className="background-title">Removing  the barriers <br/> to investing.</h1>
                                                    <p className="background-text">Our broad range of iShares ETFs <br/> provide an efficient way to gain <br/> exposure to global markets and <br/> a full spectrum of asset classes, <br/> making investing accessible for more and more people</p>
                                                    <button  className="background-button">Посмотреть</button>
                                                </div>      
                                                </div>





//                                         <div style={{width:'100%',height:'calc(100vh - (45px + 1.5rem))',backgroundColor:'white',color:'black',overflowY:'scroll'}}>
//                                             <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> Вакансии </span></div></div>
//                                             <hr/>
//                                             <div>
//                                                 <div><h2 className="client-title">Кто мы и что предлагаем?</h2></div>
//                                                 <div className="cl-mod-par">Atlant Finance LTD - это инвестиционно-управляющая компания, задача которой является привлечение
// и управление инвестиционным капиталом. Компания была основана в апреле 2018 года, место
// регистрации - Сент Винсент и Гренадины.</div>                  
//                                                 <div className="best-broker lolita">
//                                                     <div className="best-broker-elem2">
//                                                         <img src="https://open-broker.ru/static/icons/partners-perspective-icon.svg" alt=""/>
//                                                         <span>Перспективная
// и развивающая отрасль</span>
//                                                     </div>
//                                                     <div className="best-broker-elem2">
//                                                         <img src="https://open-broker.ru/static/icons/partners-faststart-icon.svg" alt=""/>
//                                                         <span>Крупная
// и технологичная компания</span>       
//                                                     </div>
//                                                     <div className="best-broker-elem2">
//                                                         <img src="https://open-broker.ru/static/icons/partners-search-icon.svg" alt=""/>
//                                                         <span>Профессиональная
// команда и соцпакет</span>
//                                                     </div>  
//                                                 </div>          
//                                                 <hr/>
//                                                     <div><h2 className="client-title">Возможности карьеры</h2></div>
//                                                     <div className="cl-mod-par">
//                                                     Наша компания использует предпринимательский драйв наших людей, который имеет решающее
// значение для успеха организации. Мы стремимся привлечь, развить и сохранить лучшие таланты в
// отрасли. Это позволяет нам постоянно совершенствовать нашу повседневную деятельность и, в
// конечном счете, компанию в целом.
//                                                         </div>
//                                                         <hr/>
//                                                 <div><h2 className="client-title">Хотите к нам?</h2></div>
//                                                 <div className="cl-mod-par"> Вы любите трудные проблемы. Те, которые расширяют ваше понимание. Вы интеллектуально
// любопытны? Вы любите, чтобы ваши коллеги бросали вам
// вызов. Работать бок о бок с людьми, у которых можно многому научиться, и решить эти проблемы
// вместе, чтобы увидеть реальные результаты. Это похоже на тебя? Если да и вы заинтересованы в том,
// чтобы быть рассмотренным по возможным вакансиям, пишите и отправляйте нам свое резюме на:
// info@atlantfinance.com</div>
//                                                 <Forms/>
//                                                 <hr/>
                                                
//                                             <div className="pathroute"><div><Link><span>О Компании</span></Link>/<span className="active"> Вакансии </span></div></div>
//                                             </div>
//                                             <Footer/>
//                                     </div>
                                    }
                                    </div>
                                <CSSTransition in={this.state.which===5 && showContent===false } timeout={2900} classNames="alert">
                                    <div className="animated" style={{backgroundColor:"#763251",maxWidth:"100%"}}></div>
                                </CSSTransition>
                        </div>
                 */}
                    

                </ReactPageScroller>
                   
                </div>
        )
    }
}


export default Corporative;
