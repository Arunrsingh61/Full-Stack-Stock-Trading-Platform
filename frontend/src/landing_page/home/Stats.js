import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3 pb-0'>
            <div className='row p-5'>
                <div className='col-5 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted mb-5' style={{lineHeight: '1.8'}}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted mb-5' style={{lineHeight: '1.8'}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href= ''style={{textDecoration: 'none'}}>Our philosophies.</a></p>

                    
                    
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted mb-5' style={{lineHeight: '1.8'}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted mb-5' style={{lineHeight: '1.8'}}>With initiatives like <a href= ''style={{textDecoration: 'none'}}>Nudge</a> and <a href= ''style={{textDecoration: 'none'}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7 pt-5 mt-3'>
                    <img src='media/images/ecosystem.png' alt='Ecosystem' style={{width: '96%'}}></img>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration: 'none'}}><b>Explore our products</b> <i class="fa-solid fa-arrow-right"></i></a>
                        <a href= ''style={{textDecoration: 'none'}}><b>Try Kite demo</b> <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;