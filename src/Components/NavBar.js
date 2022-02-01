import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {

  render() {
    
    
    return <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <h5> Gaurav N V Responsive </h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 " style={{marginLeft:"auto"}}>
        <li className="nav-item">
          <Link to="/" className="nav-link active item">
            Home
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>;
  }
}

export default NavBar;
