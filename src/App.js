import React,  {Component} from 'react';
import ToggleFolder from"./ToggleFolder.js"
import Form from './form';
import "./App.css"

class App extends Component {
  render() {
    return (
      <>
      < Form />
      <ToggleFolder>
        <ul>
        <li> File 1 </li>
        <li> File 2 </li>
        <li> File 3 </li>
        </ul>
      </ToggleFolder>
      </>
    );
  }
}

export default App;
