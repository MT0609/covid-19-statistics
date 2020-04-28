import React from 'react';
import './needtoknow.css'

const NeedtoKnow = () => {
    return(
        <div className='need-to-know'>
            <section>
                <h2>What is COVID-19</h2>  
                <p>Coronaviruses are a large family of viruses that cause respiratory infections. 
    These can range from the common cold to more serious diseases. COVID-19 is a disease caused by a new form of coronavirus. 
    It was first reported in December 2019 in Wuhan City in China.</p>
            </section>

            <section>
                <h2>What does it look like?</h2>  
                <p className='text-center'>These images are colorized and from electron microscropes</p>
                <div className="container">
                    <div className="row">
                        <div className='col-sm-12 col-md-6'> 
                            <img src={require('../../image/virus2.jpg')} />
                        </div>
                        <div className='col-sm-12 col-md-6'>                            
                            <img src={require('../../image/virus.jpg')} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='symptoms'>
                <h2>Symptoms</h2>
                <p>Symptoms of COVID-19 can range from mild illness to pneumonia. Some people will recover easily, and others may get very sick very quickly.</p>
                <div className="container">
                    <div className="row">
                        <div className='col-sm-12 col-md-4'>
                            <img src={require('../../image/fever.png')} />
                            <p>FEVER</p>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <img src={require('../../image/cough.png')} />
                            <p>COUGH</p>
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <img src={require('../../image/breathshortness.png')} />
                            <p>BREATH SHORTNESS</p>
                        </div>
                    </div>
                </div>
            </section> 

            <section>
                <h2>How it spreads</h2>
                <p>The virus can spread from person to person through:</p>
                <ul>
                    <li>close contact with an infectious person (including in the 24 hours before they hadsymptoms</li>
                    <li>contact with droplets from an infected person’s cough or sneeze</li>
                    <li>touching objects or surfaces (like doorknobs or tables) that have droplets from an infected person, and then touching your mouth or face</li>
                </ul>
            </section>

            <section>
                <h2>Treating COVID-19</h2>
                <p>There is no treatment for COVID-19. Medical care can treat most of the symptoms. Antibiotics do not work on viruses.</p>
                <p>Some reports suggest certain drugs, including hydroxychloroquine, can be used to treat COVID-19. No drugs have been approved by the Therapeutic Goods Administration for treating COVID-19.</p>
                <p>Many Australians need medication to manage health conditions. Medication shortages can threaten lives.</p>
                <p>To make sure everyone has access to the medications they need, pharmacies must limit sales of some prescription and over the counter medications.</p>
            </section>

        </div>
    )
}

export default NeedtoKnow;