import React from 'react';
function Hero() {
    let styles = {
        marginRight: '16px',
        fontSize: '18px',
        fontWeight: '300',
        fontSize: '20px',

    };
    return ( 
        <section className='container-flud' id='supportHero'>
            
            <div className='p-5 mt-5' id='supportWrapper'>
                <h3>Support Portal</h3>
                <a href='' className='mx-5'>Track tickets</a>
            </div>

            <div className='row px-5 mx-5' id='inputSupport'>

                <div className='col-7 pb-4' style={{paddingLeft: '100px'}}>
                    <h3 className='mb-5'>Search for an answer or browse help topics to create a ticket</h3>
                    <input className='mb-4' placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'/>

                    <a href='' style={styles}>Track account opening</a>
                    <a href='' style={styles}> Track segment activation</a>
                    <a href='' style={styles}> Intraday margins</a><br/><br/>
                    <a href='' style={styles}>Kite user manual</a>
                </div>
                <div className='col-5 pt-3' style={{paddingLeft: '100px'}}>
                    <h3>Featured</h3>
                    <ol>
                        <li className='mb-3'><a href=''style={styles}>Exclusion of F&O contracts on 8 securities from<br/> August 29, 2025</a></li>
                        <li><a href=''style={styles}>Revision in expiry day of Index and Stock<br/> derivatives contracts</a></li>
                    </ol>
                </div>

            </div>
        </section>
    );
}

export default Hero;