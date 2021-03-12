import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import module from './module

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  //this.methodName = this.methodName.bind(this)

  async componentDidMount() {
    try {
      //const name = (await axios.get('/api/name)).data
      //this.setState({})
    } catch (error) {
      console.log(error);
    }
  }

  /*
    methodNameMayBeAsync() {
        try{}
        catch(err){}
    }
    */
  render() {
    //const{ bring, from, state} = this.state
    return <div></div>;
  }
}
