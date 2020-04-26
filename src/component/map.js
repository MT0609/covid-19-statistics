import React from 'react';
import {Chart} from 'react-google-charts';

class Map extends React.Component {
    constructor(props){
        super(props);
        this.state={
            countries:[]
        }
    }

    componentDidMount() {   
        fetch("https://corona.lmao.ninja/v2/countries")
        .then(res => res.json())
        .then(
        (result) => {
            this.setState({
                countries: result
            });
        })
    }

    renderMap(countries) {

        var result = null;
        var data = [];
        data.push(['Country', 'Cases']);

        result = countries.map((country) => {
          let item = [country.country, country.cases];
          data.push(item);
        })
    
    
        result = <Chart
          height="80vh"
          chartType="GeoChart"
          data={data}
          rootProps={{ 'data-testid': '0' }}
          options={{ 
              colors: ['#d9ffcc', '#1be90a', '#fdde55', '#fad232', '#fad232', '#fc9b33', '#fd850b', '#fe6030', '#fe3502', '#da3004'], 
              backgroundColor: '#272d37', 
            }}
        />
    
        return result;
      } 


    render(){
        var {countries} = this.state;
        return(
            <div>
                {this.renderMap(countries)};
            </div>
        )
    }
}

export default Map;