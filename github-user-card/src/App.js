import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      user: []
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/ashoffmann90')
    .then(response => {
      console.log(response.data)
      this.setState({
        user: response.data.message
      })
    })
  }

  render(){
    return (
    <div className="App">
      <h1> GitHub User Info</h1>
    </div>
  );
  }
}

export default App;
