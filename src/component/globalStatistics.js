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
                <h1>Global Statistics</h1>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className="col-9">
                             <div className="countries">
                                {country.map((item,key) => <CountryBox key={key} flag={item.countryInfo.flag} country={item.country} cases={item.cases} recovered={item.recovered}
                                deaths={item.deaths} todayCases={item.todayCases} todayDeaths={item.todayDeaths}/>)}
                            </div>
                        </div>
                        
                        <div className="col-3">
                            <div className="total">
                                <div id="cases" className="data">
                                    <span>{world.cases}</span>
                                    <span>total cases</span>
                                </div>
                                <div id="deaths" className="data">
                                    <span>{world.deaths}</span>
                                    <span>total deaths</span>
                                </div>
                                <div id="recovered" className="data">
                                    <span>{world.recovered}</span>
                                    <span>total recovered</span>
                                </div>
                                <div className="data">
                                    <span>{world.affectedCountries}</span>
                                    <span>affected countries</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
                
                
            </div>
        )
    }
}

export default GlobalStatistics;