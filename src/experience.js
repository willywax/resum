import React from 'react';


class Experience extends React.Component {
    render () {
        let new_style = (this.props.selected === "experience") ? "col-md-6 selected ": " col-md-6 ";
        return (
          <div id="experience" className={new_style}>
          <div className="jumbotron jumbotron-fluid">
              <h1 className="display-5">What Has He Done ?</h1>

          <ol>
              <li>Completed degree in Information and  Computer Science</li>
              <li>Developed custom marketing Application</li>
              <li>More than 2 years experience with Azure, Aws, Google Cloud deploying cloud Application</li>
              <li>Networking and Camera Installation experience</li>
          </ol>
          </div>

      </div>
        )
    }
}

export default Experience;