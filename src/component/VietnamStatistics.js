import React from 'react';
import { Chart } from 'react-google-charts';


class VietNamStatistics extends React.Component{
    constructor(props){
        super(props);
        this.state={
            VietNamTotal: [],
            VietNamTimeline: []
        }
    }

    componentDidMount() {   
        fetch("https://corona.lmao.ninja/v2/countries/vietnam")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                VietNamTotal: result
              });
            })
        fetch("https://pomber.github.io/covid19/timeseries.json")
        .then(res => res.json())
        .then(
        (result) => {
            this.setState({
            VietNamTimeline: result['Vietnam']
            });
        })
    }



  VietnamTimelineChart = (dataset) => {
    var chart = null;

    var data = [];   // Format [day, infections, deaths, recovered]
    data.push(['Day', 'Infections', 'Deaths', 'Recovered']);
    dataset.map(day => {
      data.push([day.date, day.confirmed, day.deaths, day.recovered])
    });

    chart = <Chart
      width="90%"
      height="100%"
      chartType="LineChart"
      data={data}
      options={{
        colors: ['#2eafdb', '#fd5e5f', '#26c26c'],
        legendTextStyle: { color: '#FFF' },
        titleTextStyle: { color: '#FFF' },
        hAxis: {
          title: 'Day',
          textStyle: { color: 'white' },
          legendTextStyle: { color: '#FFF' },
          titleTextStyle: { color: '#FFF' },
        },
        vAxis: {
          title: 'Cases',
          textStyle: { color: 'white' },
          legendTextStyle: { color: '#FFF' },
          titleTextStyle: { color: '#FFF' },
        },
        series: {
          1: { curveType: 'function' },
        },
        backgroundColor: '#272d37',
      }}
      rootProps={{ 'data-testid': '2' }}
    />

    return chart;
  }


    render(){
        var {VietNamTotal,VietNamTimeline} = this.state;
        return(
            <div className="VietnamData">
                <div className="total">
                    <div id="cases" className="data">
                        <p>{VietNamTotal.cases}</p>
                        <p>total cases</p>
                    </div>
                    <div id="deaths" className="data">
                        <p>{VietNamTotal.deaths}</p>
                        <p>total deaths</p>
                    </div>
                    <div id="recovered" className="data">
                        <p>{VietNamTotal.recovered}</p>
                        <p>total recovered</p>
                    </div>
                </div>
                <div className="chart">{this.VietnamTimelineChart(VietNamTimeline)}</div>
                
            </div>
        )
    }
}

export default VietNamStatistics;