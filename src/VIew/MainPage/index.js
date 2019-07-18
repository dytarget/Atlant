import React, { Component } from 'react';
import  './index.css';
import { zoomOutDown,zoomInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {Link} from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const styles = {
    bounce: {
      animation: 'x 1.5s',
      animationName: Radium.keyframes(zoomOutDown, 'zoomOutDown')
    },
    bounceUp: {
        animation: 'x 1.5s',
        animationName: Radium.keyframes(zoomInUp, 'zoomInUp')
      }
}

export class MainPage extends Component {

    constructor(){
        super();
        this.state={
            isLoading: true ,
            secondAdnim:false,
            rotateStart:false
        };
    }
    
    
    componentDidMount() {
        setTimeout(() => this.setState({ rotateStart: true }), 700); 
        setTimeout(() => this.setState({ secondAdnim: true }), 1399); 
        setTimeout(() => this.setState({ isLoading: false }), 2899); 
    }
    componentWillUnmount(){
        if (this.timerHandle) {
          clearTimeout(this.timerHandle);
          this.timerHandle = 0;
        }
    }

    render() {
        return (
            this.state.isLoading ? (    
            <StyleRoot>
                <div className="divok" style={{textAlign:"center",marginTop:"200px"}}>{this.state.secondAdnim || 
                <div  style={{display:"flex",justifyContent:"center"}}>
                    <img className={this.state.rotateStart ? ("logotip_first cont-logo"):("logotip_first beforeRotate")} style={{width:"75px"}} src={require('./Logo_atlant_first.png')} alt="Logo"/>
                    <img className="logotip" src={require('./Logo_atlant_second.png')} alt="Logo"/>
                </div>}
               {this.state.secondAdnim && <div style={styles.bounce}><img  style={{width:"75px"}}  src={require('./Logo_atlant_first.png')} alt="Logo"/><img className="logotip"  src={require('./Logo_atlant_second.png')} alt="Logo"/></div>}
            </div>    
            </StyleRoot>
) : (<StyleRoot>
            <div className="divok" style={styles.bounceUp}>
                <header className="headerMain">
                    <img className="logotip" src={require('./Logo_atlant (1).png')} alt="Logo"/>
                </header>
                <section className="sectionMain">
                    <div className="leftMain">
                    </div>
                    <div className="rightMain">
                        <div>
                            <div className="title"><h4>Выберите раздел</h4></div>
                            <Link to="/private"><div className="lists"><i class="fas fa-user"></i> <span> Частный инвестор</span></div></Link> 
                            <Link><div className="lists"> <i class="fas fa-users fa-1x"></i><span>Корпоративный инвестор</span></div></Link>
                            <Link> <div className="lists"><i class="fas fa-headset"></i><span> Консультации</span> </div></Link> 
                            <Link><div className="lists"><i class="fas fa-graduation-cap"></i><span> Школа Атланта</span></div></Link> 
                            <Link> <div className="lists"><i class="fas fa-user-circle"></i><span> Личный кабинет</span> </div></Link>
                        </div>
                    </div>
                </section>
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
            </StyleRoot>
            )
        )
    }
}

export default MainPage;
