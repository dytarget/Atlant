import React, { Component } from 'react';
import { LineChart, PieChart ,AreaChart} from 'react-chartkick';
import './index.css';
import { element } from 'prop-types';




export class Charts extends Component {
    state={
        active:1
    } 
    render() {
        var info=[{
            id:1,
            name:"Name 1",
            percentage:"10.94%",
            risk:"Высокий"
        },
        {
            id:2,
            name:"Name 2",
            percentage:"9.67%",
            risk:"Высокий"
        },{
            id:3,
            name:"Name 3",
            percentage:"11.26%",
            risk:"Высокий"
        }]
        var data=[{"2017-05-13": 2, "2017-05-14": 5,"2017-05-15": 7, "2017-05-16": 15,"2017-05-17": 23, "2017-05-18": 35,"2017-05-19": 42, "2017-05-20": 55},{
            "2017-02-19": 12, "2017-03-21": 3,"2017-03-29": 5.5, "2017-04-6": 43,"2017-04-17": 36, "2017-05-01": 33,"2017-05-19": 42, "2017-05-20": 55
        },{"2016-12-19": 22, "2017-03-11": 43,"2017-04-16": 34.5, "2017-04-6": 23,"2017-04-17": 16, "2017-05-01": 73,"2017-05-19": 82, "2017-05-20": 45
    }]
        return (
            <>
            <div className="chart-wrapper">
                <div className="chartname-list">
                    <div onClick={()=>{this.setState({active:1})}} className={this.state.active===1 ? "chartnames activeone":"chartnames"}>Портфель 1</div>
                    <div onClick={()=>{this.setState({active:2})}} className={this.state.active===2 ? "chartnames activeone":"chartnames"}>Портфель 2</div>
                    <div onClick={()=>{this.setState({active:3})}} className={this.state.active===3 ? "chartnames activeone":"chartnames"}>Портфель 3</div>
                </div>
                <div className="chart-part">
                    <div className="chart-details">
                        <div className="chart-detail-elem">
                            <h6>+10.06%</h6>
                            <p>Доходность</p>
                        </div>
                        <div className="chart-detail-elem">
                            <h6>Высокий</h6>    
                            <p>Риск</p>
                        </div>
                    </div>
                    <LineChart height="50%" colors={["#6b3354","#3c4673"]}  data={data[this.state.active-1]} />
                    <div className="chart-part-bot">
                        <button style={{opacity:0}} className="chart-part-bot-1" >Подробнее</button>
                        <button style={{opacity:0}}  className="chart-part-bot-2">Оставить заявку</button>
                    </div>
                </div>
            </div>
            <div className="mobile-chart">
                {
                    info.map(element=>{
                        return (
                        <div className="mobile-chart-elem">
                            <div className="mobile-chart-name">{element.name}</div>
                            <div className="mob-percentage">{element.percentage}</div>
                            <div className="mob-risk">{element.risk}</div>
                            <LineChart height="40%" colors={["#6b3354","#3c4673"]}  data={data[this.state.active-1]} />
                            <div className="chart-part-bot">
                                <button className="chart-part-bot-1" >Подробнее</button>
                                <button className="chart-part-bot-2">Оставить заявку</button>
                            </div>
                        </div>)
                    })
                }
            </div>
            </>
        )
    }
}

export default Charts;
