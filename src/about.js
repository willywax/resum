import React from 'react';

class About extends React.Component {
    constructor(props){
        super(props);
        
        this.date = new Date().getFullYear() - 1996;
        this.state = {
            age : this.date
        }
    }
        

    
    render() {
        let new_style = (this.props.selected === "about") ? "col-md-6 selected ": " col-md-6 ";
        return (
          <div id="about" className={new_style}>
          <div className="jumbotron jumbotron-fluid ">
              <h1 className="display-5">Who's This ?</h1>
              <strong> <u>Names</u> :</strong> William Vedastus <br />
              <strong><u>Age</u> :</strong> {this.state.age} <br />
              <strong><u>Summary</u> :</strong>
              <p className="lead">Likes keeping things clean and simple enjoys debugging </p>
          </div>
      </div>
        )
    }
}

export default About;