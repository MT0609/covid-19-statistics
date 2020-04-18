import React from 'react';
import './Box.css'

function CountryBox(props) {
    return(
        <div className='country-box'>
            <span> <img src={props.flag} alt='flag' /> {props.country}</span>
            <span> {props.cases} _ <span className="recover">{props.recovered}</span> _ <span className="death">{props.deaths}</span> </span>
            <span> TODAY {props.todayCases} _ <span className="death">{props.todayDeaths}</span> </span>
        </div>
    )
}

export default CountryBox;