import React from 'react';
function Hero() {
    return ( 
        <div className='container pt-5 border-bottom pb-5'>

            <div className='text-center mt-5 '>

                <h1 style={{fontWeight: "500", fontSize:'45px'}}>Zerodha Products</h1>
                <h4 style={{fontWeight: "300"}}  className='mt-3 text-muted'>Sleek, modern, and intuitive trading platforms</h4>
                <p className='mt-4 text-muted mb-5 pb-4'>Check out our <a href='' style={{textDecoration: 'none', color: "#428ae8"}}><b>investment offerings</b> <i class="fa-solid fa-arrow-right"></i></a>
                </p>

            </div>


        </div>
    );
}

export default Hero;