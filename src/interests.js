import React from 'react';

class Interests extends React.Component {
    render() {
        let new_style = (this.props.selected === "hobbies") ? "col-md-6 selected ": " col-md-6 ";
        return (
          <div id="hobbies" className={new_style}>
          <div className="jumbotron jumbotron-fluid">
              <h1 className="display-6">What Does He Like ?</h1>
              <div className="row">
                  <div className="col-md-6">
                      <ul>
                          <li>Problem Solving</li>
                          <li>Playing Chess</li>
                          <li>Loves Soccer</li>
                          <li>Enjoy seeing people dance</li>
                      </ul>
                  </div>
                  <div className="col-md-6">
                      <ul>
                          <li>Good Company</li>
                          <li>Of Course PlayStation </li>
                         
                      </ul>
                  </div>
              </div>
              
              
          </div>

      </div>
        )
    }
}

export default Interests;