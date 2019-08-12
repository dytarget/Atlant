import React, { Component } from 'react';
import  './index.css';
import { zoomOutDown,zoomInUp } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {Link} from 'react-router-dom';
import Footer from '../Footer';


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
        };
    }
    
    
    componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 4800); 
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
                {/* <div className="divok" style={{textAlign:"center",marginTop:"200px"}}>{this.state.secondAdnim || 
                <div  style={{display:"flex",justifyContent:"center"}}>
                    <img className={this.state.rotateStart ? ("logotip_first cont-logo"):("logotip_first beforeRotate")} style={{width:"75px"}} src={require('./Logo_atlant_first.png')} alt="Logo"/>
                    <img className="logotip" src={require('./Logo_atlant_second.png')} alt="Logo"/>
                </div>}
               {this.state.secondAdnim && <div style={styles.bounce}><img  style={{width:"75px"}}  src={require('./Logo_atlant_first.png')} alt="Logo"/><img className="logotip"  src={require('./Logo_atlant_second.png')} alt="Logo"/></div>}
            </div>     */}
         <div id="bars">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
         </div>
        <div id="image">
            <img src={require('../../img/Logo_atlant_second.png')} alt=""/>
        </div>
            </StyleRoot>
) : (<StyleRoot>
            <div className="divok" style={styles.bounceUp}>
                <header className="headerMain">
                    <div>
                        <img className="logotip" src={require('../../img/Logo_atlant (1).png')} alt="Logo"/>
                        <div className="cover-wrap">
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                              <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                              <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
                            <div className="cover-elem"></div>
               
                        </div>
                    </div>
                    <Link className="kabinet">
                        <div>
                            Личный кабинет
                        </div>
                    </Link>
                </header>
                
                <section className="sectionMain">
                    <div className="leftMain">
                    </div>
                    <div className="rightMain">
                        <div>
                            <div className="title"><h4>Выберите раздел</h4></div>
                            <Link to="/private"><div className="lists"><i class="fas fa-user"></i> <span> Частный инвестор</span></div></Link> 
                            <Link to="/corporative"><div className="lists"> <i class="fas fa-users fa-1x"></i><span>Корпоративный инвестор</span></div></Link>
                            <Link> <div className="lists"><i class="fas fa-headset"></i><span> Консультации</span> </div></Link> 
                            <Link to="/school"><div className="lists"><i class="fas fa-graduation-cap"></i><span> Школа Атланта</span></div></Link> 
                        </div>
                    </div>
                </section>
               <Footer/>
            </div>
            </StyleRoot>
            )
        )
    }
}

export default MainPage;
