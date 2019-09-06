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



export class Aggressive extends Component {
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
                                src={require('../../img/home-office-336377_1920.jpg')}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-strong"  />
                            </MDBView>
                            <MDBCarouselCaption className="texts-car analitic-car">
                                <span className="titlecarousel">Агрессивный портфель</span>
                                <div className="pcarousel">Приумножение капитала на длительном сроке</div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Инвестировать </span></Link>/<Link to="/investing/structural-products"><span> Структурные продукты </span></Link>/<span className="active"> Агрессивный портфель </span></div></div>
                    <hr/>
                  
                   
                    <div data-aos="zoom-in"  className="ourClient">
                        <h2 className="client-title">Агрессивный портфель</h2>
                        <div className="cl-mod-par">Основная задача агрессивного портфеля — приумножение капитала на длительном сроке в инструментах с высоким потенциалом доходности. Агрессивный портфель хорошо подходит инвесторам со сроком инвестирования от 10 лет и психологически устойчивым к сильным колебаниям стоимости портфеля</div>

                         <div className="charts" >
                         <Chart
                            height={window.innerHeight*0.7}
                            data={dv}
                            scale={scale}
                            filter={[
                                [
                                "country",
                                val => {
                                    return val !== "UK";
                                }
                                ]
                            ]}
                            forceFit
                            >
                            <Coord type="theta" innerRadius={0.2} radius={0.7} />
                            <Tooltip
                                showTitle={false}
                                itemTpl="<li data-index={index}><span style=&quot;color:{color}&quot;>{name}:</span>{value}</li>"
                            />
                            <Legend
                                useHtml={true}
                                position="bottom"
                                containerTpl="<div style=&quot;margin-bottom:100px;&quot; class=&quot;g2-legend&quot;><table class=&quot;g2-legend-list&quot; style=&quot;list-style-type:none;margin:10px;padding:10px;&quot;></table></div>"
                                itemTpl={(value, color, checked, index) => {
                                const obj = dv.rows[index];
                                checked = checked ? "checked" : "unChecked";
                                return (
                                    '<tr class="g2-legend-list-item item-' +
                                    index +
                                    " " +
                                    checked +
                                    '" data-value="' +
                                    value +
                                    '" data-color=' +
                                    color +
                                    ' style="cursor: pointer;font-size: 14px;">' +
                                    '<td width=150 style="border: none;padding:0;"><i class="g2-legend-marker" style="width:10px;height:10px;display:inline-block;margin-right:10px;background-color:' +
                                    color +
                                    ';"></i>' +
                                    '<span class="g2-legend-text">' +
                                    value +
                                    "</span></td>" +
                                    '<td style="text-align: right;border: none;padding:0;">' +
                                    obj.litres +
                                    "</td>" +
                                    "</tr>"
                                );
                                }}
                                offsetX={15}
                                g2-legend={{
                                }}
                                g2-legend-list={{
                                border: "none"
                                }}
                            />
                            <Geom
                                type="intervalStack"
                                position="percent"
                                color={[
                                "country",
                                [
                                    "#67b7dc",
                                    "#84b761",
                                    "#fdd400",
                                    "#cc4748",
                                    "#cd82ad",
                                    "#2f4074",
                                    "#448e4d",
                                    "#b7b83f",
                                    "#b9783f"
                                ]
                                ]}
                                style={{
                                lineWidth: 2,
                                stroke: "#fff"
                                }}
                            >
                                <Label
                                content="percent"
                                formatter={(val, item) => {
                                    return item.point.country + ": " + val;
                                }}
                                />
                            </Geom>
                            </Chart>
                         </div>
                    </div> 
                    <hr style={{margin:'80px 0px'}}/>
                    <div><h2 className="client-title">Так же можно отнести к агрессивному <br/> методу, это распределение капитала <br/> по ETF фондам</h2></div>
                        <div className="best-broker lolita">
                            <div className="best-broker-elem">
                                <img src={require('../../img/analytic.png')} alt=""/>
                                <span>5% PowerShares Zacks Micro Cap (PZI).</span>
                                <div className="cl-mod-par">Сравнительно молодой биржевой фонд, инвестирующий в компании с микрокапитализацией. (Прежде чем вкладывать средства в данный фонд, уточните показатели его доходности.)</div>

                            </div>
                           
                            <div className="best-broker-elem">
                                <img src={require('../../img/network.png')} alt=""/>
                                <span>5% iShares MSCI Canada Index (EWC). </span>
                                <div className="cl-mod-par">Будучи страной, богатой природными ресурсами, Канада в последнее время демонстрирует заметный экономический рост. Эта инвестиция, вероятно, покажется спекулятивной, принимая во внимание недавним подъем на канадском фондовом рынке, однако данный актив в долгосрочном периоде может оказаться весьма прибыльным.</div>
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
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Инвестировать </span></Link>/<Link to="/investing/structural-products"><span> Структурные продукты </span></Link>/<span className="active"> Агрессивный порфтель </span></div></div>
                    </section>
                <Footer/>
            </div>
        )
    }
}
export default Aggressive;
