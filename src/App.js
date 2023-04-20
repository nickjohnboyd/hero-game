import './App.css';
import React from 'react';
import abinadiImage from './images/abinadi.jpg'
import almaImage from './images/alma-old.jpg'
import almaYoungImage from './images/alma-young.jpg'
import ammonImage from './images/ammon.jpg'
import broJaredImage from './images/bro-jared.jpg'
import lehiImage from './images/lehi.jpg'
import mormonImage from './images/mormon.jpg'
import nephiImage from './images/nephi.jpg'
import samuelImage from './images/samuel.jpg'
import sonsMosiahImage from './images/sons-mosiah.jpg'

class App extends React.Component {
  heroes = [
    {
      name: "Abinadi",
      id: 0,
      img: abinadiImage
    },
    {
      name: "Alma",
      id: 1,
      img: almaImage
    },
    {
      name: "Alma the Younger",
      id: 2,
      img: almaYoungImage
    },
    {
      name: "Ammon",
      id: 3,
      img: ammonImage
    },
    {
      name: "The Brother of Jared",
      id: 4,
      img: broJaredImage
    },
    {
      name: "Lehi",
      id: 5,
      img: lehiImage
    },
    {
      name: "Mormon",
      id: 6,
      img: mormonImage
    },
    {
      name: "Nephi",
      id: 7,
      img: nephiImage
    },
    {
      name: "Samuel the Lamanite",
      id: 8,
      img: samuelImage
    },
    {
      name: "The Sons of Mosiah",
      id: 9,
      img: sonsMosiahImage
    }
  ];
  constructor(props) {
    super(props);
    this.state = {
      currHeroId: 0,
      hero: this.heroes[0],
      maxHero: 4
    };
  }
  newHero = () => {
    let randomNum = Math.floor(Math.random() * this.state.maxHero)
    this.setState(
      {
        currHeroId: randomNum,
        hero: this.heroes[randomNum]
      }
    );
  }
  componentDidUpdate() {
    console.log("New Hero:", this.state.currHeroId);
  }

  render() {
    return (
      <div className="App">
        <p>Welcome to Hero Game!</p>
        {/* <img src={this.state.hero.img}></img> */}
        <p>Current Hero: {this.state.currHeroId}</p>
        <button onClick={this.newHero}>Click Me</button>
      </div>
    );
  }
}

export default App;
