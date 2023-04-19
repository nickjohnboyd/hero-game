import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currHeroId: 0
    };
    this.newHero = this.newHero.bind(this);
  }
  newHero() {
    this.setState({currHeroId: this.state.currHeroId + 1});
    console.log("New Hero!: " + this.state.currHeroId);
  }

  render() {
    return (
      <div className="App">
        <p>Welcome to Hero Game!</p>
        <p>Current Hero: {this.state.currHeroId}</p>
        <button onClick={this.newHero}>Click Me</button>
      </div>
    );
  }
}

export default App;
