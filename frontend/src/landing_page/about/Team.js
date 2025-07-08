import React from 'react';


function Team() {
    return (
        <div className='container'>
            <div className='row text-center p-5'>
                <h1 className='mt-2 '>
                    People
                </h1>
            </div>
            <div className='row p-5 text-muted pt-0' style={{lineHeight: '1.8', fontSize: '16px'}}>

                <div className='col-6 p-3 text-center'>
                    <img src="media/images/nithinKamath.jpg" alt="CEO Image" style={{borderRadius: '50%', width: '50%'}}/>
                    <h4 className='mt-4'>Nithin Kamath</h4>
                    <h6 className='mt-3'>Founder, CEO</h6>
                </div>

                <div className='col-6 p-3 mt-4 ml-0' >
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href="#" style={{color: "#428ae8"}}> Homepage </a>/
                    <a href="#" style={{ color: "#428ae8"}}> TradingQnA </a>/
                    <a href="#" style={{ color: "#428ae8"}}> Twitter </a>
                    
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Team;