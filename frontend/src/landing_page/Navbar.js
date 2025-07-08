import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
            <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <div className='container p-2'>
                    <Link class="navbar-brand" to='/'>
                    <img src='media/images/logo.svg' style={{width:'25%'}}></img>
                    </Link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <form class="form-inline my-2 my-lg-0">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link class="nav-link active" to='/signup'>Signup <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to='/about'>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to='/product'>Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to='/pricing'>Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to='/Support'>Support</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to='link'><i class="fa-solid fa-bars"></i></Link>
                        </li>
                        
                    </ul>
                    </form>
                </div>
                </div>
                
            </nav>
    );
}

export default Navbar;