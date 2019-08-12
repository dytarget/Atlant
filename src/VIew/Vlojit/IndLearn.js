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



export class IndLearn extends Component {
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
                                <span className="titlecarousel">Индивидуальное обучение</span>
                                <div className="pcarousel">Расскажите нам, что вы хотите изучить и мы составим для вас индивидуальную программу, учитывая ваши знания и опыт. Мы не перегружаем наши занятия ненужным, лишним материалом.</div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Научиться </span></Link>/<span className="active"> Индивидуальное обучение</span></div></div>
                    <hr/>
                    <div className="numbers-all-mobile-invisible">
                    <div data-aos="zoom-in" ><h2 className="client-title">Обучение по индивидуальной программе</h2></div>
                    <div data-aos="zoom-in" style={{marginBottom:10}}  className="cl-mod-par">Запишитесь и мы составим индивидуальную программу, учитывающую ваши знания и опыт.
                    </div>
                    <div className="best-broker lolita">
                            <div className="best-broker-elem">
                                <img src={require('../../img/dollar.png')} alt=""/>
                                <span>Индивидуальная программа
 время!</span>
                                <div className="cl-mod-par">Мы предложим индивидуальную, оптимальную программу исходя из вашего уровня знаний и с учетом ваших пожеланий по обучению.</div>

                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/savings.png')} alt=""/>
                                <span>Полезные знания и навыки</span> 
                               <div className="cl-mod-par">Вы изучите базовые понятия и нюансы торговли, о которых редко упоминают на групповых занятиях.</div>
                            </div>
                           
                           
                            <div className="best-broker-elem">
                                <img src={require('../../img/id-card.png')} alt=""/>
                                <span>Гибкое расписание занятий

</span>
                                <div className="cl-mod-par">Удобное время занятий позволит вам не менять привычный образ жизни. Наши преподаватели всегда пойдут вам навстречу.</div>

                            </div>
                        </div>
                    </div>
                    <hr style={{margin:'40px 0'}}/>                 
                   

                    <div data-aos="zoom-in"  className="ourClient">
                        <h2 className="client-title">Выберите какой курс</h2>
                        <div  style={{marginBottom:40}} className="cl-mod-par" >
                        </div>
                            <div className="modal-zb">
                                <div className="modal-left" onClick={()=>{this.setState({activeclient:"defense"});window.scrollTo(0,window.scrollY+1)}} style={this.state.activeclient==="defense" ? {backgroundColor:"#F3F5F6",color:"#73808D",width:'22vw'}:{width:'22vw'}}>1 курс</div>
                                <div className="modal-center" onClick={()=>{this.setState({activeclient:"kupon"});window.scrollTo(0,window.scrollY+1)}} style={this.state.activeclient==="kupon" ? {background:"#F3F5F6",color:"#73808D",width:'22vw'}:{width:'22vw'}}>2 курс</div>
                                <div className="modal-right" onClick={()=>{this.setState({activeclient:"kurs"});window.scrollTo(0,window.scrollY+1)}} style={this.state.activeclient==="kurs" ? {background:"#F3F5F6",color:"#73808D",width:'22vw'}:{width:'22vw'}}>3 курс</div>

                            </div>


                         <div >
                         {this.state.activeclient==="defense" ? (
                                    <h2 className="client-title">1 курс</h2>
                                ):( 
                                    this.state.activeclient==="kupon" ? (
                                        <h2 className="client-title">2 курс</h2>
                                    ):( 
                                        <h2 className="client-title">3 курс</h2> 
                                    )
                                )}

                                {this.state.activeclient==="defense" ? (
                                     <div  style={{marginBottom:20}} className="cl-mod-par" >Вы узнаете, как устроены и как функционируют финансовые рынки и для чего oни нужны.
                                     Увидите различия и возможности каждого из рынков в практической плоскости. Покажем
                                     вам сложную финансовую отчетность компании в простой и доступной форме. Ключевые
                                     навыки: 1.будете знать о всех инвестиционных альтернативах. 2.вы осознаете, что
                                     недвижимость и предпринимательство одни из самых рисковых занятий; 3.как чужие идеи
                                     могут принести прибыль
                                     </div>
                                ):( 
                                    this.state.activeclient==="kupon" ? (
                                        <div  style={{marginBottom:20}} className="cl-mod-par" >В этом курсе мы углубимся в детали анализа финансовой отчетности компании, в которой
будем изучать ключевые ньюансы, дающие понимание о текущем состоянии компании.
Мы обязательно попробуем применить на практической торговле выход финансовых
отчетов той или иной компании. 
                                     </div>
                                    ):( 
                                        <div  style={{marginBottom:20}} className="cl-mod-par" >Мы расскажем вам про азбуку графического анализа, которая поможет вам научиться
                                        читать график ценовой динамики. Каждое число имеет значение, которое при правильном
                                        использовании приведет вас к положительному результату. Ключевые навыки: 1.сможете
                                        определять тенденции; 2.сможете делать первичный анализ и прогноз возможного
                                        развития движения цен.</div> 
                                    )
                                )}
                                

                                {this.state.activeclient==="defense" ? (
                                    <div className="car-anal">
                                        <div  style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}} className="car-anal-elem">
                                            <div className="afterhas"></div>
                                            <p>Курс 1</p>
                                            <div>Узнаете суть Центральных Банков и как она отражается на повседневной жизни. Узнаете
почему экономическая статистика не только полезна, но и необходима. Ключевые
навыки: 1.понимание %ставки по кредитам и депозитам и как это можно использовать;
2.инфляция не всегда зло для кошелька, если правильно ее интерпретировать; 3.слухи и
статистика=прибыль.</div>
                                        </div>  
                                        <div className="car-anal-elem">
                                            <ul style={{fontSize:'1rem'}}>
                                                <li>Структура финансовых рынков.</li>
                                                <li>Основные понятия и особенности финансовых рынков. Фондовый, срочный, денежный, валютный и рынок капитала.</li>
                                                <li>Введение в основы инвестиционного анализа.</li>
                                                <li>Структура банковского сектора.</li>
                                                <li>Принципы технического анализа. Понятие графика. Тенденции.</li>
                                                <li>Изучение торговых платформ. Практическое применение сделок на рынке.</li>
                                                <li>Основы Риск Менеджмента.</li>
                                                <li>Аспекты микро-макро экономических терминов.</li>
                                                <li>Изучение экономических и политических событий, а также степень их влияния на цены.</li>
                                                <li>Информационные ресурсы. Фильтрация новостей. Оценка слухов.</li>
                                            </ul>
                                        </div>                 
                                    </div>
                                ):(this.state.activeclient==="kupon" ?
                                (
                                    <div className="car-anal">
                                    <div  style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}} className="car-anal-elem">
                                        <div className="afterhas"></div>
                                        <p>Курс 2</p>
                                        <div>Также в течении курса рассмотрим рынок облигаций и его
взаимосвязь с рынком акций и, как эта взаимосвязь может приносить прибыль. Ключевые
навыки: 1.принципиально расширить спектр инструментов для портфельного
инвестирования; 2.умение видеть тонкую взаимосвязь в несвязанных вещах; 3.умение
достигать стабильной доходности более 5%-7% годовых.</div>
                                    </div>  
                                    <div className="car-anal-elem">
                                        <ul style={{fontSize:'1rem'}}>
                                            <li>Детальный разбор фундаментального анализа.</li>
                                            <li>Изучение основ финансовой отчетности.</li>
                                            <li>Основы построения инвестиционных портфелей.</li>
                                            <li>Торговля на квартальной отчетности компаний.</li>
                                            <li>Изучения рынка облигаций (1 стадия).</li>
                                            <li>Инструменты хеджирования позиций..</li>
                                            <li>Разбор корпоративных секторов.</li>
                                            <li>Подготовка торговых стратегий.</li>
                                            <li>Основы рынка деривативов.</li>
                                            <li>Изучение фондовых индексов.</li>
                                        </ul>
                                    </div>                 
                                </div>
                                ):(
                                    <div className="car-anal">
                                        <div style={{backgroundImage:"url("+require('../../img/thomas-drouault-IBUcu_9vXJc-unsplash.jpg')+")"}} className="car-anal-elem">
                                            <div className="afterha"></div>
                                            <p>Курс 3</p>
                                            <div>В этом курсе мы углубимся в детали анализа финансовой отчетности компании, в которой
будем изучать ключевые ньюансы, дающие понимание о текущем состоянии компании.
Мы обязательно попробуем применить на практической торговле выход финансовых
отчетов той или иной компании. 
                              </div>
                                        </div>   
                                        <div className="car-anal-elem">
                                            <ul  style={{fontSize:'1rem'}}>
                                                <li>ETF, ETN фонды.</li>
                                                <li>Рынок опционов</li>
                                                <li>Расчет финансовых мультипликаторов.</li>
                                                <li>Методы прогнозирования доходности инвестиционных портфелей.</li>
                                                <li>Анализ DCF.</li>
                                                <li>Построение финансовых моделей.</li>
                                                <li>Арбитражная торговля.</li>
                                                <li>Чтение объемов рынка.</li>
                                                <li>Изучение цикличности поведения рынка.</li>
                                                <li>Инсайд.</li>
                                            </ul>
                                        </div>   
                                    </div>
                                )
                                )}
                               
                         </div>
                    </div> 
                    <div>
                        <div><h2 className="client-title">Форма обучения</h2></div>
                        <div className="best-broker lolita">
                            <div className="best-broker-elem">
                                <img src={require('../../img/book.png')} alt=""/>
                                <span>Очное обучение</span>
                                <div className="cl-mod-par">Очное обучение – это классика. Общайтесь лично с опытным трейдером, перенимайте накопленные знания и опыт вживую.</div>

                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/birdhouse.png')} alt=""/>
                                <span>У вас в офисе</span>       
                                <div className="cl-mod-par">Мы ценим ваше время и поэтому готовы провести очное обучение у вас в офисе</div>
                            </div>
                           
                           
                            <div className="best-broker-elem">
                                <img src={require('../../img/planet.png')} alt=""/>
                                <span>По телефону</span>
                                <div className="cl-mod-par">Отличный способ получить знания из любой точки страны, при этом, не сильно меняя привычный распорядок дня.</div>

                            </div>
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
                    <hr style={{marginTop:50}}/>
                    <div style={{marginBottom:20}} className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Научиться </span></Link>/<span className="active"> Индивидуальное обучение</span></div></div>
                </section>
                <Footer/>
            </div>
        )
    }
}
export default IndLearn;
