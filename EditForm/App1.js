import React, { Component } from 'react';
import "./App.css";

class App extends Component {
constructor(props) {
super(props);
this.state = {
	  fName: this.props.fName,
	    lName: this.props.lName,
	      currState: this.props.currState
	};

this.showEdit = this.showEdit.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.handleCancel = this.handleCancel.bind(this);
    }
showEdit()
  {
this.setState({ currState: "editing" });
   }
  handleSubmit()
   {
	this.setState({currState: "default"});
  }
  handleCancel() 
  {
	this.setState({currState: "default"});
    }

    handleChangeFName = (event) => {
      this.setState({fName: event.target.value});
    }

    handleChangeLName = (event) => {
      this.setState({lName: event.target.value});
    }

    render() {
	if (this.state.currState === "default") {
	    return (
		    <div> 		    
		    First Name: {this.state.fName} <br/>
		    Last Name: {this.state.lName} <br/>
		    <button onMouseDown={this.showEdit}>Edit</button>
		    </div>
		    );
	}
	else {
	    return (
		    <div>
		    <input type="text" id="newFirst" onChange={this.handleChangeFName} value={this.state.fName} />
		    <input type="text" id="newLast" onChange={this.handleChangeLName} value={this.state.lName}/>

		    <button onMouseDown={this.handleSubmit}>Submit</button>
		    <button onMouseDown={this.handleCancel}>Cancel</button>		    
		    </div>
		    );
	}
    }
  }

export default App
