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



export class Conservative extends Component {
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
          country: "Фонд золота",
          litres: 7
        },
        {
          country: "Глобальный фонд недвижимости",
          litres: 5
        },
        {
          country: "Глобальный фонд государственных облигаций",
          litres: 15
        },
        {
          country: "Глобальный фонд облигаций",
          litres: 35
        },
        {
          country: "Фонд денежного рынка",
          litres: 10
        },
        {
          country: "Фонд акций курпных компании США",
          litres: 8
        },
        {
          country: "Фонд акций компаний мира",
          litres: 15
        },
        {
          country: "Фонд облигаций номинированных в Евро",
          litres: 5
        }
      ];
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
                                src={require('../../img/laptop-2838921_1920.jpg')}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-strong"  />
                            </MDBView>
                            <MDBCarouselCaption className="texts-car analitic-car">
                                <span className="titlecarousel">Консервативный порфтель</span>
                                <div className="pcarousel">Сохранение капитала и получение стабильного текущего дохода</div>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                    </MDBContainer>
                    </div>
                </header>
                <section className="sectionVilojit">
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Инвестировать </span></Link>/<Link to="/investing/structural-products"><span> Структурные продукты </span></Link>/<span className="active"> Консервативный порфтель </span></div></div>
                    <hr/>
                  
                   
                    <div data-aos="zoom-in"  className="ourClient">
                        <h2 className="client-title">Консервативный порфтель</h2>
                        <div className="cl-mod-par">Сохранение капитала и получение стабильного текущего дохода является основной задачей консервативного портфеля. Такой портфель хорошо подходит инвесторам с небольшим сроком инвестирования до 3 лет или инвесторам, нацеленным на получение стабильного пассивного дохода.</div>

                         <div className="charts2" style={{margin:'50px 0px'}}>
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
                                containerTpl="<div style=&quot;margin-bottom:100px;&quot; class=&quot;g2-legend&quot;><table class=&quot;g2-legend-list&quot; style=&quot;list-style-type:none;margin:50px;padding:50px;&quot;></table></div>"
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
                                marginLeft: "100px",
                                marginTop: "-107px"
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
                    <div><h2 className="client-title">Так же можно отнести к консервативному <br/> методу, это распределение капитала <br/> по ETF фондам</h2></div>
                        <div className="best-broker lolita">
                            <div className="best-broker-elem">
                                <img src={require('../../img/analytic.png')} alt=""/>
                                <span>10% SPDRS.</span>
                                <div className="cl-mod-par">В портфелях этих биржевых фондов, копирующих динамику цены индекса Standard & Poor's 500, представлены наиболее крупные и известные корпорации США. Индекс Standard & Poor's 500 менее волатилен по сравнению с большинством сегментов рынка. </div>

                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/speech.png')} alt=""/>
                                <span>5% iShares Russell 2000 Value (IWN).</span> 
                                <div className="cl-mod-par">Представляет сегмент недооцененных акций компаний с низкой капитализацией.</div>
                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/network.png')} alt=""/>
                                <span>10% SPDR Energy (XLE).</span>
                                <div className="cl-mod-par">Энергетика и природные ресурсы.</div>
                            </div>
                            <div className="best-broker-elem">
                                <img src={require('../../img/breakfast.png')} alt=""/>
                                <span>15% iShares Lehman 7-10 Yr Treasury Bond (IEF).</span>
                                <div className="cl-mod-par">Большинству инвесторов необходимо иметь в своем портфеле облигации именно с таким сроком погашения (7-10 лет).</div>
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
                    <div className="pathroute"><div><Link to="/private"><span>Частный инвестор </span></Link>/<Link to="/investing"><span> Инвестировать </span></Link>/<Link to="/investing/structural-products"><span> Структурные продукты </span></Link>/<span className="active"> Консервативный порфтель </span></div></div>
                    </section>
                <Footer/>
            </div>
        )
    }
}
export default Conservative;
