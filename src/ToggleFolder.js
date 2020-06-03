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
      <button onClick={this.toggle}> Home </button>
        {this.state.on && this.props.children}
      </div>
    )
  }
  //End of file
};

export defautl ToggleFolder;
