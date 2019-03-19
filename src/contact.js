import React from 'react';

class Awards extends React.Component {
    

    render() {
        let new_style = (this.props.selected === "contact") ? "col-md-6 selected ": " col-md-6 ";
        return (
          <div id="contact" className={ new_style}>
          <div className="jumbotron jumbotron-fluid">

              <h1 className="display-6">Where Is He ?</h1>
              <address>
                  <strong>Example Inc.</strong><br />
                  1234 Example Street<br />
                  <strong>Git Hub</strong> <a href="https://github.com/willywax" target="_blank">WillyWax</a> <br />
                  <abbr title="Phone">P:</abbr> +255 746 304 713
                  </address>
                  
                  <address>
                  <strong>William Vedastus</strong><br />
                  <a href="mailto:#">williamtrans2011@mail.com</a>
              </address>
          </div>
      </div>
        )
           
        
    }
}

export default Awards;