import React from 'react';
import GlobalStatistics from './../../component/globalStatistics'
import VietnamStatistics from './../../component/VietnamStatistics'
import './statistics.css'

function Statistics(){
    return(
        <div className='statistics'>
            <header>COVID-19 RECORD</header>
            <GlobalStatistics />
            <VietnamStatistics />
        </div>
    )
}
export default Statistics;