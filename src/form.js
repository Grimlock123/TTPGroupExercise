import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstName : "",
      lastName : "",
      editButton : false
    }
  }
  handleEdit = () =>{
    this.setState({ editButton : !this.state.editButton});
  };
  handleChangeForFirstName  = (event) => {
    this.setState({
      firstName : event.target.value,
    });
  };
  handleChangeForLastName  = (event) => {
    this.setState({
      lastName : event.target.value,
    });
  };
  handleSave = () =>{
    this.setState({editButton : !this.state.editButton});
  };
  handleCancel = () => {
    this.setState({...this.setState, editButton : !this.state.editButton});
  }
  render(){
    let display = this.state.editButton === false ? 
    (
      <div>
        First Name: {this.state.firstName}<br/>
        Last Name: {this.state.lastName}<br/>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    )
    : 
    (
      <div>
         First Name:<input type='text' name='first' onChange={this.handleChangeForFirstName}/>{" "}
         Last Name: <input type='text' name='last' onChange={this.handleChangeForLastName}/>{" "}
        <button onClick={this.handleSave}>Save</button>{" "}
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    )




    return <div>{display}</div>
  }
}

export default Form;