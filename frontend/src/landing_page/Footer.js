import React from 'react';

function Footer() {
    let style1 = {
        textDecoration: 'none',
         color: "#428ae8"
    };
    return (
        <footer style={{backgroundColor: '#fbfbfb'}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/logo.svg' style={{ width: '60%' }}></img>
                    <p className='mt-3 fs-6 mb-4'>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
                    <div className='social-media '>
                        <i class="fa-brands fa-x-twitter fs-4 text-muted mx-2"></i>
                        <i class="fa-brands fa-facebook fs-4 text-muted mx-2"></i>
                        <i class="fa-brands fa-instagram fs-4 text-muted mx-2"></i>
                        <i class="fa-brands fa-linkedin-in fs-4 text-muted mx-2"></i>
                        <hr></hr>
                        
                        <i class="fa-brands fa-youtube fs-4 text-muted mx-2"></i>
                        <i class="fa-brands fa-whatsapp fs-4 text-muted mx-2"></i>
                        <i class="fa-brands fa-telegram fs-4 text-muted mx-2"></i>
                    </div>
                </div>
                <div className='col'>
                    <p className='fs-5' style={{fontWeight: '450'}}>Account</p>
                    <a href='' className='footer-links text-muted'>Open demat account</a><br />
                    <a href='' className='footer-links text-muted'>Minor demat account</a><br />
                    <a href='' className='footer-links text-muted'>NRI demat account</a><br />
                    <a href='' className='footer-links text-muted'>Commodity</a><br />
                    <a href='' className='footer-links text-muted'>Dematerialisation</a><br />
                    <a href='' className='footer-links text-muted'>Fund transfer</a><br />
                    <a href='' className='footer-links text-muted'>MTF</a><br />
                    <a href='' className='footer-links text-muted'>Referral program</a><br />
                </div>
                <div className='col'>
                    <p className='fs-5' style={{fontWeight: '450'}}>Support</p>
                    <a href='' className='footer-links text-muted'>Contact us</a><br />
                    <a href='' className='footer-links text-muted'>Support portal</a><br />
                    <a href='' className='footer-links text-muted'>How to file a complaint?</a><br />
                    <a href='' className='footer-links text-muted'>Status of your complaints</a><br />
                    <a href='' className='footer-links text-muted'>Bulletin</a><br />
                    <a href='' className='footer-links text-muted'>Circular</a><br />
                    <a href='' className='footer-links text-muted'>Z-Connect blog</a><br />
                    <a href='' className='footer-links text-muted'>Downloads</a><br />
                </div>
                <div className='col'>
                    <p className='fs-5' style={{fontWeight: '450'}}>Company</p>
                    <a href='' className='footer-links text-muted'>About</a><br />
                    <a href='' className='footer-links text-muted'>Philosophy</a><br />
                    <a href='' className='footer-links text-muted'>Press & media</a><br />
                    <a href='' className='footer-links text-muted'>Careers</a><br />
                    <a href='' className='footer-links text-muted'>Zerodha Cares (CSR)</a><br />
                    <a href='' className='footer-links text-muted'>Zerodha.tech</a><br />
                    <a href='' className='footer-links text-muted'>Open source</a><br />
                </div>
                <div className='col'>
                    <p className='fs-5' style={{fontWeight: '450'}}>Quick links</p>
                    <a href='' className='footer-links text-muted'>Upcoming IPOs</a><br />
                    <a href='' className='footer-links text-muted'>Brokerage charges</a><br />
                    <a href='' className='footer-links text-muted'>Market holidays</a><br />
                    <a href='' className='footer-links text-muted'>Economic calendar</a><br />
                    <a href='' className='footer-links text-muted'>Calculators</a><br />
                    <a href='' className='footer-links text-muted'>Markets</a><br />
                    <a href='' className='footer-links text-muted'>Sectors</a><br />
                </div>
            </div>

            <div className='mt-5 text-muted' style={{fontSize: '14px'}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='#' style={style1}>complaints@zerodha.com</a>, for DP related to <a href='#' style={style1}>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p>Procedure to file a complaint on <a href='#' style={style1}>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p><a href='#' style={style1}>Smart Online Dispute Resolution</a> | <a href='#' style={style1}>Grievances Redressal Mechanism</a></p>

            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='#' style={style1}>create a ticket here.</a></p>
            </div>

            <div className='text-center'>
                <a href='' className='footer-links text-muted mx-3 pb-2 pt-2'>NSE </a>
                <a href='' className='footer-links text-muted mx-3 pb-2 pt-2'>BSE </a>
                <a href='' className='footer-links text-muted mx-3 pb-2 pt-2'>MCX </a>
                <a href='' className='footer-links text-muted mx-3 pb-2 pt-2'>Terms & conditions </a>
                <a href='' className='footer-links text-muted mx-3 pb-2 pt-2'>Policies & procedures </a>
                <a href='' className='footer-links text-muted mx-3 pb-2 pt-2'>Privacy policy </a>
                <a href='' className='footer-links text-muted mx-3 pb-2 pt-2'>Disclosure </a>
                <a href='' className='footer-links text-muted mx-3 pb-2 pt-2'>For investor's attention </a>
                <a href='' className='footer-links text-muted mx-3 pb-2 pt-2'>Investor charter</a>
            </div>

        </div>
        </footer>
    );
}

export default Footer;
