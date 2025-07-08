import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 py-5'>
            <div className='row mt-5 mx-5'>

                <div className='col-6'>
                    <img src='media/images/education.svg' alt='Education Section'></img>
                </div>


                <div className='col-6'>
                    <h1 className='fs-2 mb-5'>Free and open market education</h1>
                    <p className='fs-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration: 'none'}}><b>Varsity</b> <i class="fa-solid fa-arrow-right"></i></a>
                    
                    <p className='fs-5 mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration: 'none'}}><b>TradingQ&A </b> <i class="fa-solid fa-arrow-right"></i></a>
                </div>


            </div>
        </div>
    );
}

export default Education;