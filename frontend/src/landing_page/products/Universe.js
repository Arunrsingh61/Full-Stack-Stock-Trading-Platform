import React from 'react';

function Universe() {
    return (
        <div className='container p-5'>

            <div className='row text-center'>
                <h4 className='text-muted'>Want to know more about our technology stack? Check out the <a href='#' style={{textDecoration: 'none', color: "#428ae8"}}>Zerodha.tech</a> blog</h4>
                <h1 className='mt-5 pt-5 mb-4 '>The Zerodha Universe</h1>
                <h5 className='text-muted mt-2'>Extend your trading and investment experience even further with our partner platforms</h5>
            </div>

            <div className='row '>
                    <div className='col-4 p-5 mt-5 text-center'>
                    <img src='media/images/zerodhaFundhouse.png'style={{
                    width: '60%',
                }}></img>
                    <p className='text-small  text-center text-muted mt-4 '>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                    </div>
                <div className='col-4 p-5 mt-5 text-center'>
                    <img src='media/images/sensibullLogo.svg'style={{
                    width: '55%',
                }}></img>
                    <p className='text-small  text-center text-muted mt-4 '>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col-4 p-5 mt-5 text-center'>
                    <img src='media/images/tijori.svg'style={{
                    width: '45%',
                }}></img>
                    <p className='text-small  text-center text-muted mt-4 '>Investment research platform
                        that offers<br/> detailed insights on stocks,
                        sectors, supply chains, and more.</p>
                </div>
            </div> 

                
            <div className='row'>
                <div className='col-4 p-2 mt-2 text-center'>
                    <img src='media/images/streakLogo.png' style={{
                    width: '45%',
                }}></img>
                    <p className='text-small  text-center text-muted mt-4 '>Systematic trading platform
                        that allows<br/> you to create and backtest
                        strategies<br/> without coding.</p>
                </div>
                <div className='col-4 p-2 mt-2 text-center'>
                    <img src='media/images/smallcaseLogo.png'style={{
                    width: '55%',
                }}></img>
                    <p className='text-small  text-center text-muted mt-4 '>Thematic investing platform
                        that helps<br/> you invest in diversified
                        baskets<br/> of stocks on ETFs.
                    </p>
                </div>
                <div className='col-4 p-2 mt-2 text-center'>
                    <img src='media/images/dittoLogo.png'style={{
                    width: '39%',
                }}></img>
                    <p className='text-small text-center text-muted mt-4 '>Personalized advice on life
                        and health<br/> insurance. No spam
                        and<br/> no mis-selling.
                    </p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mt-5' style={{width: "20%", margin: "0 auto"}}><b>Sign up for free</b></button>
            </div>            

        </div>
    );
}

export default Universe;