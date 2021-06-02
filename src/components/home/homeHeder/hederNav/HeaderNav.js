import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {
    const history = useHistory();
    const handleSignIn = ()=> {
          history.push('/login')
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <h3 className='logo'>Aircnc</h3>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav ">
                        <li class="nav-item mr-4">
                        <Link class="nav-link" aria-current="page" >Host your home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link mr-4" >Host your experience</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link mr-4" >Help</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link mr-4" to="/login" >Log in</Link>
                        </li>
                        <li class="nav-item">
                        <button type="button" onClick={handleSignIn} class="btn btn-success">Sign up</button>
                        </li>
                    </ul>
                    
                    </div>
                </div>
        </nav>
    );
};

export default HeaderNav;