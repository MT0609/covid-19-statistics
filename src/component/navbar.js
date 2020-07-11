import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //   searchText: ""
        };
        // this.searchRef = React.createRef();
      }

    // changeSearchText = (e) => {
    //     this.setState({ searchText: e.target.value})
    // }

    // clearAndFocus = () => {
    //     this.searchRef.current.focus();
    // }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="/covid-19-statistics"><i className="fas fa-lungs-virus"></i> COVID-19</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ml-auto text-warning">
                            <Link to='/' style={{ textDecoration: 'none' }}>                    
                                <li className="nav-item active mr-5 p-2">STATISTICS</li>
                            </Link>
                            <Link to='/needtoknow' style={{ textDecoration: 'none' }}>
                                <li className="nav-item mr-5 p-2">NEED-TO-KNOW</li>
                            </Link>
                            <Link to='/advice' style={{ textDecoration: 'none' }}>
                                <li className="nav-item mr-5 p-2">ADVICE</li>
                            </Link>
                            <Link to='/map' style={{ textDecoration: 'none' }}>
                                <li className="nav-item p-2">MAP</li>
                            </Link>
                    </ul>
                    
                </div>
            </nav>
        )
    }
}

export default Navbar;
