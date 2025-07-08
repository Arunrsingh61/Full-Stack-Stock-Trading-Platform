import React from 'react';

function RightSection1({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='container mt-4'style={{marginBottom: "-90px"}}>
            <div className='row p-5'>
                <div className='col-5 text-muted mt-5  pt-5' >
                    <h1>{productName}</h1>
                    <p style={{lineHeight: '1.8', fontSize: '18px'}}>{productDescription}</p>

                    <div>
                        <a href={learnMore[0]} style={{textDecoration: 'none', color: "#428ae8"}}><b>{learnMore[1]}</b> <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    
                </div>
                
                <div className='col-7 mt-0' style={{paddingLeft: '60px', marginTop: '0'}}>
                    <img src={imageURL} alt='' style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    marginLeft: '70px'
                }}/>
                    </div>
            </div>
        </div>
    );
}

export default RightSection1;