import React from 'react';
function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className='container mt-5'>
            <div className='row p-5'>
                <div className='col-7' >
                    <img src={imageURL} alt=''/>
                </div>
                <div className='col-5 text-muted  mt-5 mr-0 p-5' >
                    <h1>{productName}</h1>
                    <p style={{lineHeight: '1.8', fontSize: '18px'}}>{productDescription}</p>

                    <div>
                        <a href={tryDemo} style={{textDecoration: 'none', marginRight: "70px", color: "#428ae8"}}><b>Try Demo</b> <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{textDecoration: 'none', color: "#428ae8"}}><b>Learn More</b> <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div className='mt-4'>
                        <a href={googlePlay} style={{marginRight: "20px"}}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore}><img src='media/images/appstoreBadge.svg'/></a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default LeftSection;