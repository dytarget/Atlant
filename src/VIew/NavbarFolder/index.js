import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';



export class Navbar extends Component {
    constructor(){
        super();
        this.state={
            showNavItems:false,
            showMenu:false,
            showDropdown:false,
            showTopMenu:false,
            fixed:false,
        };
    }
    
    componentDidMount(){
        window.addEventListener('scroll',(event)=>{
           if(window.scrollY>580){
               this.setState({showDropdown:true,fixed:true});
           }
           else{
                this.setState({showDropdown:false,fixed:false});
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
            <div>
                 <div style={this.state.showDropdown || this.state.showNavItems || this.state.showMenu ? {backgroundColor:"white",backgroundImage:"unset"}:null} className="top-nav">
                            <div className="topnav-elem" style={this.state.showDropdown ? {color:"#3c4673"}:null}><Link style={{color:"inherit"}} to="/private/business-ethics-and-honesty">Этика и Честность</Link></div>
                            <div className="topnav-elem" style={this.state.showDropdown ? {color:"#3c4673"}:null}><Link style={{color:"inherit"}} to="/aboutus">Контакты</Link></div>
                            <div className="topnav-elem" style={this.state.showDropdown ? {color:"#3c4673"}:null}><Link style={{color:"inherit"}} to="/aboutus/5">Вакансии</Link></div>
                            <div className="topnav-elem" style={this.state.showDropdown ? {color:"#3c4673"}:null}><Link style={{color:"inherit"}} to="/aboutus">О Компании</Link></div>
                        </div>
                    <nav style={this.state.fixed? {position:"fixed",top:"0",borderBottom:"1px solid grey",zIndex:100000}:null} className={this.state.showDropdown || this.state.fixed || this.state.showNavItems || this.state.showMenu ? 'opened navbars' : 'navbars'}>
                        <div className="attrs">
                            <div className="brand" ><Link to="/"><img className="log" src={require('../../img/Logo_atlant (1).png')} alt="Logo"/></Link>
</div>
                            <div className="zaebal-elem-out" onClick={()=>{this.showDrop("Вложить")}}><div className="zaebal-elem" style={this.state.active==="Вложить" ? {fontWeight:600,borderBottom:"3px solid #3c4673"}:null} >Вложить</div></div>
                            <div className="zaebal-elem-out"  onClick={()=>{this.showDrop("Торговать")}}><div className="zaebal-elem" style={this.state.active==="Торговать" ? {fontWeight:600,borderBottom:"3px solid #3c4673"}:null} >Торговать</div></div>
                            <div className="zaebal-elem-out"   onClick={()=>{this.showDrop("Научиться")}}><div className="zaebal-elem"  style={this.state.active==="Научиться" ? {fontWeight:600,borderBottom:"3px solid #3c4673"}:null} >Научиться</div></div>
                            <div className="zaebal-elem-out"><div className="zaebal-elem"><Link style={{color:'inherit'}} to="/find-idea">Найти идею</Link></div></div>
                        </div>
                            <div className="nav-right">
                            <button className="nav-knopka" style={this.state.showDropdown || this.state.fixed || this.state.showNavItems || this.state.showMenu ? {color:"#3c4673"}:null}><i style={this.state.showDropdown || this.state.fixed || this.state.showNavItems || this.state.showMenu ? {borderColor:"#3c4673"}:null} class="fas fa-phone ico"></i>8 777 413 69 70</button>
                            <button className="nav-knopka" style={this.state.showDropdown || this.state.fixed || this.state.showNavItems || this.state.showMenu ? {color:"#3c4673"}:null}><i style={this.state.showDropdown ||this.state.fixed || this.state.showNavItems || this.state.showMenu ? {borderColor:"#3c4673"}:null}  class="fas fa-user ico"></i></button>
                            <button onClick={this.showMenu}  className={this.state.showDropdown || this.state.fixed || this.state.showNavItems || this.state.showMenu ? 'menu-opened' : 'menu'}><i class={this.state.showMenu ? "fas fa-times" : "fas fa-bars"}></i>Меню</button>
                        </div>
                    </nav>
                    <CSSTransition in={this.state.showNavItems} timeout={1000} unmountOnExit classNames="dropdownanim">
                        <div style={window.scrollY>580 ? {position:"fixed",marginTop:"40px"}:null} className="dropdown">
                            <div className="left-dropdown">
                                <h5>Лучшие решения</h5>
                                {this.state.active==="Вложить" && 
                                <>
                                <div className="nav-element-dp">

                                       <Link to="/investing/structural-products"> 
                                       <div  style={{backgroundImage:"url("+require('../../img/alvaro-reyes-4eTnTQle0Ks-unsplash.jpg')+")"}}  className="left-dp-elem"> 
                                            <span>Структурные продукты</span> 
                                        </div>
                                        </Link>

                                    <Link to="/investing/individual"> 
                                    <div style={{backgroundImage:"url("+require('../../img/helloquence-5fNmWej4tAA-unsplash.jpg')+")"}}  className="left-dp-elem">
                                        <span>Индивидуальный торговый счет</span>
                                    </div></Link>

                                    <Link to="/investing/trusted-control"> 
                                    <div style={{backgroundImage:"url("+require('../../img/kevin-bhagat-zNRITe8NPqY-unsplash.jpg')+")"}}  className="left-dp-elem">
                                        <span>Доверительное управление проект</span>
                                    </div></Link>
                                </div>
                                <Link to="/investing"><button className="dp-go-button">Перейти в раздел</button></Link>
                                </>
                                }
                                 {this.state.active==="Торговать" && 
                                 <>
                                    <div className="nav-element-dp">
                                            <Link to="/investing/individual"> 
                                            <div style={{backgroundImage:"url("+require('../../img/helloquence-5fNmWej4tAA-unsplash.jpg')+")"}}  className="left-dp-elem"> 
                                                <span>Индивидуальный торговый счет</span> 
                                            </div></Link>
                                            
                                        <Link to="/trading/download-platform"> 
                                        <div style={{backgroundImage:"url("+require('../../img/m-b-m-ZzOa5G8hSPI-unsplash.jpg')+")"}}  className="left-dp-elem">
                                            <span>Скачать Торговую платформу</span>
                                        </div></Link>

                                        <Link to="/trading/your-financial-analyst"> 
                                        <div style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}}  className="left-dp-elem">
                                            <span>Ваш финансовый аналитик</span>
                                        </div></Link>
                                    </div>
                                    <Link to="/trading"><button className="dp-go-button">Перейти в раздел</button></Link>
                                    </>
                                    }
                                    {this.state.active==="Научиться" && 
                                    <>
                                    <div className="nav-element-dp">

                                     
                                    
                                        <Link to="/learn/individual-learn"> 
                                        <div style={{backgroundImage:"url("+require('../../img/PeFoBhoSwveAT1y5ahoAsZi8IRwxOyAxMXKtHQch.jpg')+")"}}  className="left-dp-elem">
                                            <span>Индивидуальное обучение</span>
                                        </div>
                                        </Link>
                                        <Link style={{opacity:0}} > 
                                            <div style={{backgroundImage:"url("+require('../../img/tzZFR1abMqWaPy6MobI9kliHCHatL9ICRuEs6g9I.jpg')+")"}}  className="left-dp-elem"> 
                                                <span>Семинары</span> 
                                            </div>
                                            </Link>
                                    
                                        <Link style={{opacity:0}}> 
                                        <div style={{backgroundImage:"url("+require('../../img/V8C3oOuuicwZ5FkULcoFeWfqLMggBIs94zTW4tXj.jpg')+")"}}  className="left-dp-elem">
                                            <span>Вебинары</span>
                                        </div>
                                        </Link>
                                    </div>
                                    <Link to="/learn"><button className="dp-go-button">Перейти в раздел</button></Link>
                                    </>
                                    }
                            </div>
                            <div className="right-dropdown">
                                <div className="right-dp-container">
                                    <div className="cancel-button"><i onClick={()=>{this.setState({showDropdown:false,showNavItems:false,active:""})}} class="far fa-times-circle fa-1x"></i></div>

                                    {this.state.active==="Вложить" &&
                                    <>
                                        <div className="right-dp-elem"><Link>Сервисы для торговли</Link></div>
                                        <div className="right-dp-elem"> <Link>Дистрибутивы</Link></div>
                                        <div className="right-dp-elem"><Link>Учебный счёт</Link></div>
                                        <div className="right-dp-elem"><Link>Офисы продаж</Link></div>
                                        </>
                                    }
                                    {this.state.active==="Торговать" && 
                                    <>
                                      <div className="right-dp-elem"><Link>Скачать Торговую платформу</Link></div>
                                      <div className="right-dp-elem"><Link to="/trading">Сервисы для торговли</Link></div>
                                      <div className="right-dp-elem"><Link>Учебный счёт</Link></div>
                                      <div className="right-dp-elem"><Link>Офисы продаж</Link></div>
                                      </>
                                    }
                                     {this.state.active==="Научиться" && 
                                    <>
                                      <div className="right-dp-elem"><Link to="/learn/individual-learn">Индивидуальное обучение статьи</Link></div>
                                      </>
                                    }
                                </div>
                            </div>
                    </div>
                </CSSTransition>   
                <CSSTransition in={this.state.showMenu} unmountOnExit timeout={1000} classNames="menuanim">
                            <div  style={window.scrollY>580 ? {position:"fixed",marginTop:"40px"}:null} className="menu-dp">
                                <div className="wrapper">
                                    <div className="menu-elem">
                                        <p className="menu-tit"><Link to="/investing">Вложить</Link></p>
                                        <p className="menu-list"><Link to="/trading/your-financial-analyst">Ваш финансовый аналитик</Link></p>
                                        <p className="menu-list"><Link to="/investing/individual">Индивидуальный торговый счет</Link></p>
                                        <p className="menu-list"><Link to="/trading/download-platform">Скачать Торговую платформу</Link></p>
                                        <p className="menu-tit"><Link to="/trading">Торговать</Link></p>
                                        <p className="menu-list"><Link to="/investing/structural-products">Структурные продукты</Link></p>
                                        <p className="menu-list"><Link to="/investing/individual">Индивидуальный торговый счет</Link></p>
                                        <p className="menu-list"><Link to="/investing/trusted-control">Доверительное управление проект</Link></p>
                                        <p className="menu-tit"><Link to="/find-idea">Найти идею</Link></p>
                                    </div>
                                    <div className="menu-elem">
                                        <p className="menu-tit"><Link to="/learn">Научиться</Link></p>
                                        <p className="menu-list"><Link to="/learn/individual-learn">Индивидуальное обучение статьи</Link></p>
                                        <p className="menu-tit"><Link to="/aboutus">О Компании</Link></p>
                                        <p className="menu-list"><Link to="/aboutus">Пресс- центр</Link></p>
                                        <p className="menu-list"><Link to="/aboutus/2">О нас</Link></p>
                                        <p className="menu-list"><Link to="/aboutus/3">Что мы делаем</Link></p>
                                        <p className="menu-list"><Link to="/aboutus/4">Партнеры компании</Link></p>
                                        <p className="menu-list"><Link to="/aboutus/5">Возможности карьеры</Link></p>
                                    </div>
                                    <div className="menu-elem">
                                        <p className="menu-tit"><Link to="/corporative">Корпоративным лицам</Link></p>
                                        <p className="menu-list"><Link to="/corporative">Оптимизация бизнес процессов</Link></p>
                                        <p className="menu-list"><Link to="/corporative/2">Управление корпоративным капиталом</Link></p>
                                        <p className="menu-list"><Link to="/corporative/3">Наши текущие портфели</Link></p>
                                        <p className="menu-list"><Link to="/corporative/4">Инструменты защиты капитала</Link></p>
                                        <p className="menu-list"><Link to="/corporative/6">Брокерское обслуживание</Link></p>
                                        <p className="menu-list"><Link to="/corporative/5">Наши партнеры</Link></p>
                                        <p className="menu-list"><Link to="/trading/your-financial-analyst">Ваш финансовый аналитик</Link></p>
                                        <p className="menu-list"><Link to="/private/business-ethics-and-honesty">Этика и честность</Link></p>
                                    </div>
                                    <div className="menu-elem">
                                        <p className="menu-tit"><Link>Торговая платформа описание</Link></p>
                                        <p className="menu-tit"><Link to="/aboutus/3">Наши партнеры</Link></p>
                                        <p className="menu-tit"><Link to="/learn">Обучение трейдингу</Link></p>
                                        <p className="menu-tit"><Link to="/aboutus/5">Вакансии</Link></p>
                                        <p className="menu-tit"><Link to="/investing/structural-products">Отчетность по портфелям</Link></p>
                                    </div>
                                </div>
                            </div>
                </CSSTransition>
    
            </div>
        )
    }
}

export default Navbar;
