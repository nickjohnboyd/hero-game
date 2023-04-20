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
import samuelImage from './images/samuel.jpeg'
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
      maxHero: 10,
      user: {}
    };
  }

  newHero = () => {
    let randomNum = Math.floor(Math.random() * this.state.maxHero)
    // No Duplicates
    if (randomNum == this.state.currHeroId) {
      randomNum = Math.floor(Math.random() * this.state.maxHero)
    }
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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    let target = event.target

    this.setState(
      {
        user: {
          name: target.name.value,
          age: target.age.value,
          height: target.height.value,
          gender: target.gender.value,
        }
      }
    );
  }

  render() {
    return (
      <div className="App">
        <p>Welcome to Hero Game!</p>
        <p>It's simple: submit name, age, height, gender, and get your hero!</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label>
            <input name="name" placeholder="name"></input>
          </div>
          <div>
            <label>Age: </label>
            <input name="age" placeholder="age" type="number"></input>
          </div>
          <div>
            <label>Height (In): </label>
            <input name="height" placeholder="height" type="number"></input>
          </div>
          <div>
            <label>Gender: </label>
            <input type="radio" name="gender" value="male"></input>
            <label>Male </label>
            <input type="radio" name="gender" value="female"></input>
            <label>Female </label>
          </div>
          <input type="submit" value="Submit"></input>
        </form>
        <div>
          <img src={this.state.hero.img} className="hero-img"></img>
        </div>
        <h4>{this.state.hero.name}</h4>
        <p>Current Hero: {this.state.currHeroId}</p>
        <button onClick={this.newHero}>Click Me</button>
      </div>
    );
  }
}

export default App;
