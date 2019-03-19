import React from 'react';


class Nav extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

   handleChange(e, value){
       
        this.props.onChange(value);
   }  
  
    render() {
        return (

          <ul className="nav nav-pills nav-justified" id="pills-tab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="pills-home-tab"  onClick={(e)=> this.handleChange(e, 'about')} name="about" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="pills-profile-tab" onClick={(e)=> this.handleChange(e, 'hobbies')}  data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Hobbies</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="pills-contact-tab"   onClick={(e)=> this.handleChange(e, 'experience')}  data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Experience</a>
            </li>
            <li className="nav-item">
                    <a className="nav-link" id="pills-contact-tab" onClick={(e)=> this.handleChange(e, 'contact')} data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact Us</a>
            </li>
            
          </ul>
        )
    }
}

export default Nav;