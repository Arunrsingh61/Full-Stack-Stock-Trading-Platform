import React from 'react';
function CreateTicket() {
    return ( 
        <div className='container mt-5'>
            <h3 className='text-muted' style={{marginLeft: "50px", fontWeight: "400"}}>To create a ticket, select a relevant topic</h3>
            <div className='row p-5'>

                <div className='col'>
                    <p className='fs-5' style={{fontWeight: '450'}}><i class="fa-solid fa-circle-plus"></i> Account Opening</p>
                    <a href='' className='footer-links' style={{marginLeft: "25px", marginTop: "10px"}}>Resident individual</a><br />
                    <a href='' className='footer-links' style={{marginLeft: "25px"}}>Minor</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Non Resident Indian (NRI)</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Company, Partnership, HUF and LLP</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Glossary</a><br />
                    
                </div>

                <div className='col'>
                    <p className='fs-5' style={{fontWeight: '450'}}><i class="fa-regular fa-user"></i> Your Zerodha Account</p>
                    <a href='' className='footer-links' style={{marginLeft: "25px", marginTop: "10px"}}>Your Profile</a><br />
                    <a href='' className='footer-links' style={{marginLeft: "25px"}}>Account modification</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Nomination</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Transfer and conversion of securities</a><br />
                </div>

                <div className='col'>
                    <p className='fs-5' style={{fontWeight: '450'}}><i class="fa-solid fa-chart-simple"></i> Kite</p>
                    <a href='' className='footer-links' style={{marginLeft: "25px", marginTop: "10px"}}>IPO</a><br />
                    <a href='' className='footer-links' style={{marginLeft: "25px"}}>Trading FAQs</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Margin Trading Facility (MTF) and Margins</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Charts and orders</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Alerts and Nudges</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>General</a><br />
                </div>
                
            </div>

            
            <div className='row p-5'>
                <div className='col'>
                    <p className='fs-5' style={{fontWeight: '450'}}><i class="fa-regular fa-credit-card"></i> Funds</p>
                    <a href='' className='footer-links' style={{marginLeft: "25px", marginTop: "10px"}}>Add money</a><br />
                    <a href='' className='footer-links' style={{marginLeft: "25px"}}>Withdraw money</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Add bank accounts</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>eMandates</a><br />
                </div>

                <div className='col'>
                    <p className='fs-5' style={{fontWeight: '450'}}><i class="fa-solid fa-terminal"></i> Console</p>
                    <a href='' className='footer-links' style={{marginLeft: "25px", marginTop: "10px"}}>Portfolio</a><br />
                    <a href='' className='footer-links' style={{marginLeft: "25px"}}>Corporate actions</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Funds statement</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Reports</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Profile</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Segments</a><br />
                </div>

                <div className='col'>
                    <p className='fs-5' style={{fontWeight: '450'}}><i class="fa-solid fa-coins"></i> Coin</p>
                    <a href='' className='footer-links' style={{marginLeft: "25px", marginTop: "10px"}}>Mutual funds</a><br />
                    <a href='' className='footer-links' style={{marginLeft: "25px"}}>National Pension Scheme (NPS)</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Features on Coin</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>Payments and Orders</a><br />
                    <a href='' className='footer-links ' style={{marginLeft: "25px"}}>General</a><br />
                </div>
                
            </div>
            </div>
    );
}

export default CreateTicket;