import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow,MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Footer.css';


export class Footer extends Component {
    render() {
        return (
            <div>
                   <MDBFooter color="mdb-color" className="font-small pt-4">
                    <MDBContainer className="text-center text-md-left">
                    <MDBRow className="d-flex align-items-center">
                        <MDBCol md="8" lg="8">
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
                        <MDBCol md="2" lg="2" xl="2"  className="mx-auto mt-3 cols">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Продукты</h6>
                            <p>
                            <a href="/private">Частный инвестор</a>
                            </p>
                            <p>
                            <a href="/corporative">Корпоративный инвестор</a>
                            </p>
                            <p>
                            <a href="/corporative/3">Портфель Atlant Finance</a>
                            </p>
                            <p>
                            <a href="/school">Школа Atlant</a>
                            </p>
                        </MDBCol>
                        <hr className="w-100 clearfix d-md-none" />
                        <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3 cols">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                            О Компании
                            </h6>
                            <p>
                            <a href="/aboutus/2">О нас</a>
                            </p>
                            <p>
                            <a href="/aboutus">Пресс- центр</a>
                            </p>
                            <p>
                            <a href="/aboutus/4">Что мы делаем</a>
                            </p>
                            <p>
                            <a href="/aboutus/3">Наши партнеры</a>
                            </p>
                        </MDBCol>
                        <hr className="w-100 clearfix d-md-none" />
                        <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3 cols">
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
                        </MDBRow>
                    </MDBContainer>
                </MDBFooter>
            </div>
        )
    }
}

export default Footer;
