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
      width="100%"
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
              <h1>Vietnam Statistics</h1>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-12 col-md-3'>
                      <div className="total">
                        <div id="cases" className="data">
                            <span>{VietNamTotal.cases}</span>
                            <span>total cases</span>
                        </div>
                        <div id="deaths" className="data">
                            <span>{VietNamTotal.deaths}</span>
                            <span>total deaths</span>
                        </div>
                        <div id="recovered" className="data">
                            <span>{VietNamTotal.recovered}</span>
                            <span>total recovered</span>
                        </div>
                      </div>
                  </div>

                  <div className='col-12 col-md-9'>
                      <div className="chart">
                        {this.VietnamTimelineChart(VietNamTimeline)}
                      </div>
                  </div>
                </div>
              </div>  
            </div>
        )
    }
}

export default VietNamStatistics;