import React, {Component } from 'react';

import Experience from './experience';

import Interests from './interests';
import Contact from './contact';
import About from './about';

class Home extends Component {
    constructor(props){
        super(props);
      
    }

    render() {
        return (
            <div className="row">
                <About selected= {this.props.selected}></About>
                <Interests selected={this.props.selected}></Interests>
                <Experience selected={this.props.selected}></Experience>
                <Contact selected={this.props.selected} ></Contact>
             </div>
                
       
        )
    }
}

export default Home;