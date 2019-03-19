import React from 'react'
import { Route, NavLink, BrowserRouter } from 'react-router-dom';

import Home from './home';
import Nav from './nav';
import Header from './header.js';

import './css/style.css';

class Main extends React.Component {
    constructor(props){
        super(props);

        this.changeStyle = this.changeStyle.bind(this);
        this.state = {
            selected: 'about'
        }
    }

    changeStyle(value) {

        this.setState({
            selected : value
        });

    }

    render() {
        return (
                <div>
                    <Header></Header>
                    <BrowserRouter>
                        <Home selected={this.state.selected}></Home>
                        <Nav onChange = {this.changeStyle}></Nav>
                    </BrowserRouter>
                    
                </div>           
        )
    }
}

export default Main;