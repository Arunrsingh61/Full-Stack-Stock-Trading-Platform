import React from 'react';
function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='container ' style={{marginBottom: "-90px"}}>
            <div className='row pr-5 pl-5'>
                <div className='col-5 text-muted mt-5  pt-5' >
                    <h1><br/><br/><br/>{productName}</h1>
                    <p style={{lineHeight: '1.8', fontSize: '18px'}}>{productDescription}</p>

                    <div>
                        <a href={learnMore[0]} style={{textDecoration: 'none', color: "#428ae8"}}><b>{learnMore[1]}</b> <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    
                </div>
                
                <div className='col-7 mt-0' style={{paddingLeft: '60px', paddingBottom: '-400px'}}>
                    <img src={imageURL} alt='' style={{
                    width: '100%',
                }}/>
                    </div>
            </div>
        </div>
    );
}

export default RightSection;