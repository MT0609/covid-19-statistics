import React from 'react';
import GlobalStatistics from './../../component/globalStatistics'
import VietnamStatistics from './../../component/VietnamStatistics'
import './statistics.css'

function Statistics(){
    return(
        <div className="App">
            <header>COVID-19 RECORD</header>
            <h1>Global Statistics</h1>
            <GlobalStatistics />
            <VietnamStatistics />
        </div>
    )
}
export default Statistics;