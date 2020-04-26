import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a class="navbar-brand" href="/"><i class="fas fa-lungs-virus"></i> COVID-19</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto ml-auto">
                    <li class="nav-item active mr-5">
                        <Link to='/'>STATISTICS</Link>
                    </li>
                    <li class="nav-item mr-5">
                        <Link to='/needtoknow'>NEED-TO-KNOW</Link>
                    </li>
                    <li class="nav-item mr-5">
                        <Link to='/advice'>ADVICE</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/map'>MAP</Link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;