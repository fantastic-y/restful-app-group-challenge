import './App.css';
import React, {Component} from 'react';
import Contacts from "./contacts";
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props);
    this.state ={
      contacts: []
    };
  }

  componentDidMount() {
    // fetch("http://jsonplaceholder.typicode.com/users")
    //   .then (res => res.json())
    //   .then ((data) => {
    //     this.setState({
    //       contacts: data
    //     })
    //   })
    //   .catch(console.log);
    axios.get("http://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        this.setState({contacts: res.data})
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }

  
}

export default App;
