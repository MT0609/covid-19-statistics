import React from 'react';
import './advice.css';

const Advice = () => {
    return(
        <div className='advice'>
            <section>
                <h2>Protect yourself and others from getting sick</h2>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4'>
                            <img src={require('../../image/protect.png')} />
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <img src={require('../../image/protect2.png')} />
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <img src={require('../../image/protect3.png')} />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2>COVID-19 Home care</h2>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4'>
                            <img src={require('../../image/homecare.png')} />
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <img src={require('../../image/homecare2.png')} />
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <img src={require('../../image/homecare3.png')} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 col-md-4'>
                            <img src={require('../../image/homecare4.png')} />
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <img src={require('../../image/homecare5.png')} />
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <img src={require('../../image/homecare6.png')} />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2>How to cope with stress during 2019-nCoV outbreak</h2>
                <div className="container">
                    <div className="row">
                        <div className='col-12 col-lg-6'>
                            <img src={require('../../image/stress.jpg')} style={{width: "400px"}} />
                        </div>
                        <div className='col-12 col-lg-6'>
                            <img src={require('../../image/stress2.jpg')} style={{width: "400px"}} />
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Advice;