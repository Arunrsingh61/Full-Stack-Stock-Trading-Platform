import React from 'react';
function Hero() {
    return ( 
            <div className='container pt-5 pb-5'>

            <div className='row text-center mt-5 pb-5'>

                <h1 style={{fontWeight: "500", fontSize:'45px'}}>Charges</h1>
                <h4 style={{fontWeight: "500"}}  className='mt-3 text-muted pb-5'>List of all charges and taxes</h4>
            </div>
            <div className='row text-center mt-5 pt-5 border-top'>
                <div className='col-4 p-4'>
                    <img src='media/images/pricingEquity.svg' style={{width: '70%', marginBottom: '25px'}}/>
                    <h2>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media/images/intradayTrades.svg' style={{width: '70%', marginBottom: '25px'}}/>
                    <h2>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media/images/pricingEquity.svg' style={{width: '70%', marginBottom: '25px'}}/>
                    <h2>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>


        </div>
    );
}

export default Hero;