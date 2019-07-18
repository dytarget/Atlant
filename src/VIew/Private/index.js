import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {Carousel} from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Forms from '../Form';



export class Private extends Component {
    constructor(){
        super();
        this.state={
            showNavItems:false,
            showMenu:false,
            showDropdown:false,
            active:"",
            showTopMenu:false,
            index:1,
            direction:null,
            activeclient:"torgovat",
            activeopp:"find"
        };
    }
    handleSelect=(selectedIndex, e) =>{
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
    }
    componentDidMount(){
        if (window.scrollY<500) {
        }
        window.addEventListener('scroll',(event)=>{
           if(window.scrollY<500){
               console.log(window.scrollY);
               
           }
        });
    }
    showDrop=(active)=>{
        this.setState({showNavItems:true,showDropdown:true,active:active});
    }
    showMenu=()=>{
        if (this.state.showMenu) {
            this.setState({showMenu:false,showDropdown:false});
        }
        else{
            this.setState({showMenu:true,showDropdown:true});
        }
    }
    render() {
        return (
            <div className="all">
                <header className="headerPrivate">
                        <div style={this.state.showDropdown ? {backgroundColor:"white",backgroundImage:"unset"}:null} className="top-nav">
                            <div className="topnav-elem">Этика и Честность</div>
                            <div className="topnav-elem">Контакты</div>
                            <div className="topnav-elem">Вакансии</div>
                            <div className="topnav-elem">О Компании</div>
                        </div>
                    <nav className={this.state.showDropdown ? 'opened' : null}>
                        <div className="attrs">
                            <div className="brand" ><Link to="/"><img className="log" src={require('./Logo_atlant (1).png')} alt="Logo"/></Link>
</div>
                            <div className="nav-item-out" onClick={()=>{this.showDrop("Вложить")}}><div className="nav-item" style={this.state.active==="Вложить" ? {fontWeight:600,borderBottom:"3px solid #3c4673"}:null} >Вложить</div></div>
                            <div className="nav-item-out"  onClick={()=>{this.showDrop("Торговать")}}><div className="nav-item" style={this.state.active==="Торговать" ? {fontWeight:600,borderBottom:"3px solid #3c4673"}:null} >Торговать</div></div>
                            <div className="nav-item-out"   onClick={()=>{this.showDrop("Научиться")}}><div className="nav-item"  style={this.state.active==="Научиться" ? {fontWeight:600,borderBottom:"3px solid #3c4673"}:null} >Научиться</div></div>
                            <div className="nav-item-out"><div className="nav-item">Найти идею</div></div>
                        </div>
                            <div className="nav-right">
                            <button className="nav-btn" style={this.state.showDropdown ? {color:"#3c4673"}:null}><i style={this.state.showDropdown ? {borderColor:"#3c4673"}:null} class="fas fa-phone-alt ico"></i>8 777 413 69 70</button>
                            <button className="nav-btn" style={this.state.showDropdown ? {color:"#3c4673"}:null}><i style={this.state.showDropdown ? {borderColor:"#3c4673"}:null}  class="fas fa-user ico"></i></button>
                            <button onClick={this.showMenu}  className={this.state.showDropdown ? 'menu-opened' : 'menu'}><i class={this.state.showMenu ? "fas fa-times" : "fas fa-bars"}></i>Меню</button>
                        </div>
                    </nav>
                    <CSSTransition in={this.state.showNavItems} timeout={1000} unmountOnExit classNames="dropdownanim">
                        <div className="dropdown">
                            <div className="left-dropdown">
                                <h5>Лучшие решения</h5>
                                {this.state.active==="Вложить" && 
                                <div className="nav-element-dp">

                                        <div style={{backgroundImage:"url("+require('./alvaro-reyes-4eTnTQle0Ks-unsplash.jpg')+")"}}  className="left-dp-elem"> 
                                            <span>Структурные продукты</span> 
                                        </div>
                                  
                                    <div style={{backgroundImage:"url("+require('./helloquence-5fNmWej4tAA-unsplash.jpg')+")"}}  className="left-dp-elem">
                                        <span>Индивидуальный торговый счет</span>
                                    </div>
                                  
                                    <div style={{backgroundImage:"url("+require('./kevin-bhagat-zNRITe8NPqY-unsplash.jpg')+")"}}  className="left-dp-elem">
                                        <span>Доверительное управление проект</span>
                                    </div>
                                </div>
                                }
                                 {this.state.active==="Торговать" && 
                                    <div className="nav-element-dp">

                                            <div style={{backgroundImage:"url("+require('./helloquence-5fNmWej4tAA-unsplash.jpg')+")"}}  className="left-dp-elem"> 
                                                <span>Индивидуальный торговый счет</span> 
                                            </div>
                                    
                                        <div style={{backgroundImage:"url("+require('./m-b-m-ZzOa5G8hSPI-unsplash.jpg')+")"}}  className="left-dp-elem">
                                            <span>Интернет трейдинг на международном рынке</span>
                                        </div>
                                    
                                        <div style={{backgroundImage:"url("+require('./thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}}  className="left-dp-elem">
                                            <span>Ваш финансовый аналитик</span>
                                        </div>
                                    </div>
                                    }
                                    {this.state.active==="Научиться" && 
                                    <div className="nav-element-dp">

                                            <div style={{backgroundImage:"url("+require('./tzZFR1abMqWaPy6MobI9kliHCHatL9ICRuEs6g9I.jpg')+")"}}  className="left-dp-elem"> 
                                                <span>Семинары</span> 
                                            </div>
                                    
                                        <div style={{backgroundImage:"url("+require('./V8C3oOuuicwZ5FkULcoFeWfqLMggBIs94zTW4tXj.jpg')+")"}}  className="left-dp-elem">
                                            <span>Вебинары</span>
                                        </div>
                                    
                                        <div style={{backgroundImage:"url("+require('./PeFoBhoSwveAT1y5ahoAsZi8IRwxOyAxMXKtHQch.jpg')+")"}}  className="left-dp-elem">
                                            <span>Индивидуальное обучение</span>
                                        </div>
                                    </div>
                                    }
                                <button className="dp-go-button">Перейти в раздел</button>
                            </div>
                            <div className="right-dropdown">
                                <div className="right-dp-container">
                                    <div className="cancel-button"><i onClick={()=>{this.setState({showDropdown:false,showNavItems:false,active:""})}} class="far fa-times-circle fa-1x"></i></div>

                                    {this.state.active==="Вложить" &&
                                    <>
                                        <div className="right-dp-elem"><Link>Тарифные планы</Link></div>
                                        <div className="right-dp-elem"><Link>Сервисы для торговли</Link></div>
                                        <div className="right-dp-elem"> <Link>Дистрибутивы</Link></div>
                                        <div className="right-dp-elem"><Link>Учебный счёт</Link></div>
                                        <div className="right-dp-elem"><Link>Офисы продаж</Link></div>
                                        </>
                                    }
                                    {this.state.active==="Торговать" && 
                                    <>
                                      <div className="right-dp-elem"><Link>Скачать Торговую платформу</Link></div>
                                      <div className="right-dp-elem"><Link>Тарифные планы</Link></div>
                                      <div className="right-dp-elem"><Link>Сервисы для торговли</Link></div>
                                      <div className="right-dp-elem"><Link>Учебный счёт</Link></div>
                                      <div className="right-dp-elem"><Link>Офисы продаж</Link></div>
                                      </>
                                    }
                                     {this.state.active==="Научиться" && 
                                    <>
                                      <div className="right-dp-elem"><Link>Семинары</Link></div>
                                      <div className="right-dp-elem"><Link>Вебинары</Link></div>
                                      <div className="right-dp-elem"><Link>Тренер по трейдингу</Link></div>
                                      <div className="right-dp-elem"><Link>Индивидуальное обучение статьи</Link></div>
                                      </>
                                    }
                                </div>
                            </div>
                    </div>
                </CSSTransition>   
                <CSSTransition in={this.state.showMenu} unmountOnExit timeout={1000} classNames="menuanim">
                            <div className="menu-dp">
                                <div className="wrapper">
                                    <div className="menu-elem">
                                        <p className="menu-tit"><Link>Вложить</Link></p>
                                        <p className="menu-list"><Link>Ваш финансовый аналитик</Link></p>
                                        <p className="menu-list"><Link>Индивидуальный торговый счет</Link></p>
                                        <p className="menu-list"><Link>Скачать Торговую платформу</Link></p>
                                        <p className="menu-list"><Link>Интернет трейдинг на <br/> международном рынке</Link></p>
                                        <p className="menu-tit"><Link>Торговать</Link></p>
                                        <p className="menu-list"><Link>Структурные продукты</Link></p>
                                        <p className="menu-list"><Link>Индивидуальный торговый счет</Link></p>
                                        <p className="menu-list"><Link>Доверительное управление проект</Link></p>
                                        <p className="menu-tit"><Link>Найти идею</Link></p>
                                        <p className="menu-tit"><Link>Вакансии</Link></p>
                                    </div>
                                    <div className="menu-elem">
                                        <p className="menu-tit"><Link>Научиться</Link></p>
                                        <p className="menu-list"><Link>Семинары</Link></p>
                                        <p className="menu-list"><Link>Вебинары</Link></p>
                                        <p className="menu-list"><Link>Тренер по трейдингу</Link></p>
                                        <p className="menu-list"><Link>Индивидуальное обучение статьи</Link></p>
                                        <p className="menu-tit"><Link>О Компании</Link></p>
                                        <p className="menu-list"><Link>Пресс- центр</Link></p>
                                        <p className="menu-list"><Link>Лицензии</Link></p>
                                        <p className="menu-list"><Link>Реквизиты</Link></p>
                                        <p className="menu-list"><Link>Миссия и принципы</Link></p>
                                        <p className="menu-list"><Link>Контакты и местонахождение</Link></p>
                                    </div>
                                    <div className="menu-elem">
                                        <p className="menu-tit"><Link>Корпоративным лицам</Link></p>
                                        <p className="menu-list"><Link>Оптимизация бизнес процессов</Link></p>
                                        <p className="menu-list"><Link>Управление корпоративным капиталом</Link></p>
                                        <p className="menu-list"><Link>Наши текущие портфели</Link></p>
                                        <p className="menu-list"><Link>Инструменты защиты капитала</Link></p>
                                        <p className="menu-list"><Link>Стратегический и финансовый консалтинг</Link></p>
                                        <p className="menu-list"><Link>Брокерское обслуживание</Link></p>
                                        <p className="menu-list"><Link>Составление инвестиционных портфелей</Link></p>
                                        <p className="menu-list"><Link>Отчетность по портфелям</Link></p>
                                        <p className="menu-list"><Link>Наши партнеры</Link></p>
                                        <p className="menu-list"><Link>Ваш финансовый аналитик</Link></p>
                                        <p className="menu-list"><Link>Информация о запасах история дивидентов</Link></p>
                                        <p className="menu-list"><Link>Этика и честность</Link></p>
                                    </div>
                                    <div className="menu-elem">
                                        <p className="menu-tit"><Link>Продукты компании</Link></p>
                                        <p className="menu-tit"><Link>Составление финансового плана</Link></p>
                                        <p className="menu-tit"><Link>Торговая платформа описание</Link></p>
                                        <p className="menu-tit"><Link>Информация о нас</Link></p>
                                        <p className="menu-tit"><Link>Наши партнеры</Link></p>
                                        <p className="menu-tit"><Link>Основное направление бизнеса</Link></p>
                                        <p className="menu-tit"><Link>Наши достижения</Link></p>
                                        <p className="menu-tit"><Link>Обучение трейдингу</Link></p>
                                        <p className="menu-tit"><Link>Вакансии</Link></p>
                                        <p className="menu-tit"><Link>Отчетность по портфелям</Link></p>
                                    </div>
                                </div>
                            </div>
                </CSSTransition>
                <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} style={{position:"absolute",top:0,zIndex:0,maxWidth:"100%",height:"100vh"}}>
                    <Carousel.Item className="car-item" style={{backgroundImage:"url("+require('./back.jpg')+")"}}>
                        <Carousel.Caption className="innercontentcar">
                            <span className="titlecarousel">Ваш финансовый <br/> аналитик</span>
                            <div className="pcarousel">Вдохновляйтесь <br/> инветиционными идеями</div>
                            <button className="btncarousel">Узнать больше</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  className="car-item" style={{backgroundImage:"url("+require('./back2.jpg')+")"}}>
                        <Carousel.Caption className="innercontentcar">
                            <span className="titlecarousel">Ваш финансовый <br/> аналитик</span>
                            <div className="pcarousel">Вдохновляйтесь <br/> инвеcтиционными идеями</div>
                            <button className="btncarousel">Узнать больше</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  className="car-item" style={{backgroundImage:"url("+require('./back3.jpg')+")"}}>
                        <Carousel.Caption className="innercontentcar">
                            <span className="titlecarousel">Ваш финансовый <br/> аналитик</span>
                            <div className="pcarousel">Вдохновляйтесь <br/> инветиционными идеями</div>
                            <button className="btncarousel">Узнать больше</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </header>
                <section className="sectionPrivate">
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
                        <div className="modal">
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
                                                <div style={{backgroundImage:"url("+require('./kevin-bhagat-zNRITe8NPqY-unsplash.jpg')+")"}}  className="modal-elem-list"> 
                                                    <span className="modal-el-title">Индивидуальный торговый счет</span> 
                                                    <div className="hovered-card card1">
                                                        <span>
                                                            <p className="hovered-title">Индивидуальный торговый счет</p>
                                                            <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                </div>

                                                <div style={{backgroundImage:"url("+require('./helloquence-5fNmWej4tAA-unsplash.jpg')+")"}}  className="modal-elem-list">
                                                <span className="modal-el-title">Интернет трейдинг на международном рынке</span>
                                                <div className="hovered-card card2">
                                                        <span>
                                                            <p className="hovered-title">Интернет трейдинг на международном рынке</p>
                                                            <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                   
                                                </div>

                                                <div style={{backgroundImage:"url("+require('./m-b-m-ZzOa5G8hSPI-unsplash.jpg')+")"}}  className="modal-elem-list">
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

                                            <div style={{backgroundImage:"url("+require('./alvaro-reyes-4eTnTQle0Ks-unsplash.jpg')+")"}}  className="modal-elem-list"> 
                                                <span className="modal-el-title">Структурные продукты</span> 
                                                <div className="hovered-card card1">
                                                        <span>
                                                            <p className="hovered-title">Структурные продукты</p>
                                                            <p className="hovered-text">Вы можете инвестировать средства с условием защиты вложенного капитала или получения фиксированной выплаты, а также дополнительно заработать на акциях, которыми владеете, в случае их роста</p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                   
                                            </div>

                                            <div style={{backgroundImage:"url("+require('./denny-muller-XNTC5G1W3Xs-unsplash.jpg')+")"}}  className="modal-elem-list">
                                            <span className="modal-el-title">Индивидуальный торговый счет</span>
                                            <div className="hovered-card card2">
                                                        <span>
                                                            <p className="hovered-title">Индивидуальный торговый счет</p>
                                                            <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                   
                                            </div>

                                            <div style={{backgroundImage:"url("+require('./thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}}  className="modal-elem-list">
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
                         <div className="modal-button">{this.state.activeclient==="torgovat" ? ("Торговать"):("Вложить")}</div>
                    </div>
                    <hr/>
                    <div>
                        <div><h2 className="client-title">Лучший брокер <br/> для начинающих инвесторов</h2></div>
                        <div className="cl-mod-par">В конкурсе Московской биржи Invest Trial 2017 компания заняла первое место и завоевала золотой диплом в номинации «Лучший брокер для начинающих инвесторов 2017»</div>
                        <div className="best-broker">
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
                        <div style={{margin:"0 auto",textAlign:"center",width:"300px"}} className="btncarousel">Подробнее о компании</div>
                    </div>
                    <hr/>
                    <div className="ourClient">
                        <h2 className="client-title">Вы также можете</h2>
                        <div className="modal">
                            <div className="modal-left" onClick={()=>{this.setState({activeopp:"find"})}} style={this.state.activeopp==="learn" ? {backgroundColor:"#F3F5F6",color:"#73808D"}:null}>Найти идею и инвестировать</div>
                            <div className="modal-right" onClick={()=>{this.setState({activeopp:"learn"})}} style={this.state.activeopp==="find" ? {background:"#F3F5F6",color:"#73808D"}:null}>Научиться и применять</div>
                        </div>
                        <div className="cl-mod-title">{this.state.activeopp==="find" ? "Качественная аналитика" : "Вы решаете, что вам подходит"}</div>
                        <div className="cl-mod-par">{this.state.activeopp==="find" ? "Наша команда аналитиков выпускает обзоры и инвестидеи высочайшего качества. В 2017 году мы предложили 229 идей, 82% из которых были прибыльными, а 73% продемонстрировали результат лучше бенчмарка."
                         : "Шаг за шагом, от простого к сложному, мы научим вас инвестировать на финансовых рынках. Узнайте, как стать совладельцем крупнейших мировых компаний или зарабатывать на колебаниях курсов валют."}</div>
                         <div className="modal-cards">
                                {this.state.activeopp==="find" ? (
                                        <CSSTransition in={this.state.activeopp==="find"} timeout={500} classNames="modalanim">
                                           <div className="modal-element">
                                                <div style={{backgroundImage:"url("+require('./alvaro-reyes-4eTnTQle0Ks-unsplash.jpg')+")"}}  className="modal-elem-list"> 
                                                    <span className="modal-el-title">Индивидуальный торговый счет</span> 
                                                    <div className="hovered-card card1">
                                                        <span>
                                                            <p className="hovered-title">Индивидуальный торговый счет</p>
                                                            <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                </div>

                                                <div style={{backgroundImage:"url("+require('./helloquence-5fNmWej4tAA-unsplash.jpg')+")"}}  className="modal-elem-list">
                                                <span className="modal-el-title">Интернет трейдинг на международном рынке</span>
                                                <div className="hovered-card card2">
                                                        <span>
                                                            <p className="hovered-title">Интернет трейдинг на международном рынке</p>
                                                            <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                   
                                                </div>

                                                <div style={{backgroundImage:"url("+require('./m-b-m-ZzOa5G8hSPI-unsplash.jpg')+")"}}  className="modal-elem-list">
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

                                            <div style={{backgroundImage:"url("+require('./alvaro-reyes-4eTnTQle0Ks-unsplash.jpg')+")"}}  className="modal-elem-list"> 
                                                <span className="modal-el-title">Структурные продукты</span> 
                                                <div className="hovered-card card1">
                                                        <span>
                                                            <p className="hovered-title">Структурные продукты</p>
                                                            <p className="hovered-text">Вы можете инвестировать средства с условием защиты вложенного капитала или получения фиксированной выплаты, а также дополнительно заработать на акциях, которыми владеете, в случае их роста</p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                   
                                            </div>

                                            <div style={{backgroundImage:"url("+require('./PeFoBhoSwveAT1y5ahoAsZi8IRwxOyAxMXKtHQch.jpg')+")"}}  className="modal-elem-list">
                                            <span className="modal-el-title">Индивидуальный торговый счет</span>
                                            <div className="hovered-card card2">
                                                        <span>
                                                            <p className="hovered-title">Индивидуальный торговый счет</p>
                                                            <p className="hovered-text">Накапливайте средства, инвестируйте их на бирже и зарабатывайте, получая при этом налоговые вычеты-на взнос или на доход</p>
                                                        </span>
                                                        <button className="hovered-button">Узнать больше</button>
                                                    </div>
                                                   
                                            </div>

                                            <div style={{backgroundImage:"url("+require('./tzZFR1abMqWaPy6MobI9kliHCHatL9ICRuEs6g9I.jpg')+")"}}  className="modal-elem-list">
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
                         <div className="modal-button">{this.state.activeopp==="find" ? ("Смотреть все идеи"):("Смотреть все решения")}</div>
                    </div>
                </section>
                <hr/>
                <Forms/>
                <MDBFooter color="mdb-color" className="font-small pt-4 mt-4">
                    <MDBContainer className="text-center text-md-left">
                        <MDBRow className="text-center text-md-left mt-3 pb-3">
                        <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                            Atlant Finance
                            </h6>
                            <p>
                            Atlant Finance LTD - это инвестиционно-управляющая компания, задача которой является привлечение
                            и управление инвестиционным капиталом. 
                            </p>
                        </MDBCol>
                        <hr className="w-100 clearfix d-md-none" />
                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Продукты</h6>
                            <p>
                            <a href="#!">Частный инвестор</a>
                            </p>
                            <p>
                            <a href="#!">Корпоративный инвестор</a>
                            </p>
                            <p>
                            <a href="#!">Портфель Atlant Finance</a>
                            </p>
                            <p>
                            <a href="#!">Школа Atlant</a>
                            </p>
                        </MDBCol>
                        <hr className="w-100 clearfix d-md-none" />
                        <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                            О Компании
                            </h6>
                            <p>
                            <a href="#!">Миссия и принципы</a>
                            </p>
                            <p>
                            <a href="#!">Пресс- центр</a>
                            </p>
                            <p>
                            <a href="#!">Лицензии</a>
                            </p>
                            <p>
                            <a href="#!">Реквизиты</a>
                            </p>
                        </MDBCol>
                        <hr className="w-100 clearfix d-md-none" />
                        <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Контакты</h6>
                            <p>
                            <i className="fa fa-home mr-3" /> Нурлы Тау, Алматы 10012, KZ
                            </p>
                            <p>
                            <i className="fa fa-envelope mr-3" /> atlant@gmail.com
                            </p>
                            <p>
                            <i className="fa fa-phone mr-3" /> + 01 234 567 88
                            </p>
                            <p>
                            <i className="fa fa-print mr-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow className="d-flex align-items-center">
                        <MDBCol md="8" lg="8">
                            <p className="text-center text-md-left grey-text">
                            &copy; {new Date().getFullYear()} Copyright:{" "}
                            Atlant Finance
                            </p>
                        </MDBCol>
                        <MDBCol md="4" lg="4" className="ml-lg-0">
                            <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                    <i className="fab fa-twitter" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                    <i className="fab fa-google-plus" />
                                </a>
                                </li>
                                <li className="list-inline-item">
                                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                                </li>
                            </ul>
                            </div>
                        </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBFooter>
            </div>
        )
    }
}

export default Private;
