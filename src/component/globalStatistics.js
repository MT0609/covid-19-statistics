import React from 'react'
import CountryBox from './Box';

class GlobalStatistics extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchText: "",         // input text
            world:[],               // total cases, total deaths,...
            countries:[],           // all countries information 
            query: "",              // query string in input when submit for searching countries
            countriesName:[]      //unchange since didMount
        }
    }

    async getCountriesName() {
        let res = await fetch("https://disease.sh/v3/covid-19/countries/");
        let data = await res.json();
        let arr = [];
        data.forEach(item => arr.push(item.country));
        return arr;
    }

    async componentDidMount() {
        let res = await fetch("https://disease.sh/v3/covid-19/all");
        let data = await res.json();
        this.setState({ world: data});

        res = await fetch("https://disease.sh/v3/covid-19/countries/");
        data = await res.json();
        this.setState({ countries: data});
        let countriesName1 = await this.getCountriesName();
        this.setState({ countriesName: countriesName1 });
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query) {
            let queryArray = (this.state.countriesName).filter(item => item.toLowerCase().indexOf(this.state.query.toLowerCase()) > -1);
            let res = await fetch("https://disease.sh/v3/covid-19/countries/" + queryArray);
            let data = await res.json();
            if ((data instanceof Array) === false) {
                let arr = [];
                arr.push(data);
                this.setState({ countries: arr});
            }
            else
                this.setState({ countries: data});
        }
    }

    changeSearchText = (e) => {
        this.setState({searchText: e.target.value});
    }
    getSearchText = (e) => {
        e.preventDefault();
        this.setState({
            query: this.state.searchText, 
            searchText: ""
        });
    }

    render(){
        var {world,countries,searchText} = this.state;
        var countriesName = this.getCountriesName();
        return( 
            <div className='global'>
                <h1>Global Statistics</h1>
                <form className="form-inline my-2 my-lg-0">
                        <input list="inputCountries" name="country" className="form-control mr-sm-2" value={searchText}
                            onChange={this.changeSearchText}
                            type="text" placeholder="Enter something..." aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.getSearchText}>Search</button>
                </form>
                <datalist id="inputCountries">
                    {this.state.countriesName.map((item, key) => <option key={key} value={item} />)}
                </datalist>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="col-12 col-md-9">
                            <div className="countries">
                                {countries.map((item,key) => <CountryBox key={key} flag={item.countryInfo.flag} country={item.country} cases={item.cases} recovered={item.recovered}
                                deaths={item.deaths} todayCases={item.todayCases} todayDeaths={item.todayDeaths}/>)}
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-3">
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