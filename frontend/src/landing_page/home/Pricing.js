import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-1 mb-5'>
            <div className='row mx-5 px-4'>

                <div className='col-4 '>
                    <h1 className='fs-2 mb-5'>Unbeatable pricing</h1>
                    <p className='fs-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration: 'none'}}><b>See pricing</b> <i class="fa-solid fa-arrow-right"></i></a>
                </div>

                <div className='col-2'></div>
                <div className='col-6'>

                    <div className='row text-center'>

                        <div className='col p-3 border'>
                            <h1>$0</h1>
                            <p>Free equity delivery and direct <br></br>mutual funds</p>
                        </div>
                        
                        <div className='col p-3 border'>
                            <h1>$20</h1>
                            <p>Intraday and F&O</p>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
}

export default Pricing;