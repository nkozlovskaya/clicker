import React, {Component} from "react";

import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
    count:0
    }
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }
    
  render() {
    return (
      <div className="App"> 
        
        <h1>Clicker</h1>

        <h1>
          {this.state.count}
        </h1>
        <button 
          style={{marginRight:'1rem'}}
          // type="button" 
          className="btn btn-success"
          onClick={this.increment}>
            Increment
        </button>
        <button 
          // type="button" 
          className="btn btn-danger"
          onClick={this.decrement}>
            Decrement
        </button>   
      </div>
    );
   }
  }




export default App;
