import React from 'react'
import CountryBox from './Box';

class GlobalStatistics extends React.Component{
    constructor(props){
        super(props);
        this.state={
            world:[], 
            country:[]
        }
    }

    componentDidMount() {   
        fetch("https://corona.lmao.ninja/v2/all")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                world: result
              });
            })
        fetch("https://corona.lmao.ninja/v2/countries")
        .then(res => res.json())
        .then(
        (result) => {
            this.setState({
            country: result
            });
        })
    }


    render(){
        var {world,country} = this.state;
        return(
            <div className='global'>
                <div className="countries">
                    {country.map((item,key) => <CountryBox key={key} flag={item.countryInfo.flag} country={item.country} cases={item.cases} recovered={item.recovered}
                    deaths={item.deaths} todayCases={item.todayCases} todayDeaths={item.todayDeaths}/>)}
                </div>
                
                <div className="total">
                    <div id="cases" className="data">
                        <p>{world.cases}</p>
                        <p>total cases</p>
                    </div>
                    <div id="deaths" className="data">
                        <p>{world.deaths}</p>
                        <p>total deaths</p>
                    </div>
                    <div id="recovered" className="data">
                        <p>{world.recovered}</p>
                        <p>total recovered</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GlobalStatistics;