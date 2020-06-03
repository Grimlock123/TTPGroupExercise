import React, { Component } from "react";

class ToggleFolder extends Component{
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
  };
  //Method that toggles the Home button
  toggle = (state) => {
    this.setState({
      on : !this.state.on
    });
  };

  //Render Function
  render(){
    return(
      <div>
      //Add Home button to toggle the folders
      <button onClick={this.toggle}> Home </button>
      //Each time the user clicks on Home, the files are shown
        {this.state.on && this.props.children}
      </div>
    )
  }
  //End of file
};
