import React from 'react';
import logo from './logo.JPG';

class Header extends React.Component {
    

    render() {
       
        return (
          <div id="header" className="row">
          <div className="col-md-2 offset-md-2">
          <img src={logo} className="round" alt="logo" />
          </div>
           <div className="col-md- justify-content-center align-self-center">
                <h1 className="header-text"> HIS SIMPLE RESUME </h1>
             </div>
          </div>
        )
           
        
    }
}

export default Header;