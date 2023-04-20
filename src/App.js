import './App.css';
import Hero from './components/Hero'
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
import sariahImage from './images/sariah.jpg'

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
    },
    {
      name: "Sariah",
      id: 10,
      img: sariahImage
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      hero: this.heroes[0],
      maxHero: 11,
      user: {}
    };
  }

  componentDidUpdate() {
    console.log("New Hero:", this.state.hero.id);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);

    let target = event.target;
    let currHero = this.state.hero;
    let hero = this.heroes;

    if (target.gender.value == "female") currHero = hero[10];
    else if (target.age.value >= 60) currHero = hero[1];
    else if (target.age.value >= 50) currHero = hero[5];
    else if (target.age.value >= 45) currHero = hero[6];
    else if (target.age.value >= 40) currHero = hero[0];
    else if (target.age.value >= 35) currHero = hero[8];
    else if (target.age.value >= 30) currHero = hero[4];
    else if (target.age.value >= 25) currHero = hero[3];
    else if (target.age.value >= 20) currHero = hero[7];
    else if (target.age.value >= 15) currHero = hero[9];
    else if (target.age.value < 15) currHero = hero[2];

    this.setState(
      {
        hero: currHero,
        user: {
          name: target.name.value,
          age: target.age.value,
          gender: target.gender.value,
        }
      }
    );
  }

  render() {
    return (
      <div className="App">

        <p>Welcome to Hero Game!</p>
        <p>It's simple: submit name, age, gender, and get your hero!</p>

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
            <label>Gender: </label>
            <input type="radio" name="gender" value="male"></input>
            <label>Male </label>
            <input type="radio" name="gender" value="female"></input>
            <label>Female </label>
          </div>
          <input type="submit" value="Submit"></input>
        </form>

        <Hero
          hero={this.state.hero}
          currHeroId={this.state.currHeroId}
          user={this.state.user}
        />

         {/* <p>Or, generate random hero: </p>
        <button onClick={this.randomHero}>Random Hero</button> */}
        
      </div>



      // randomHero = () => {
      //   let randomNum = Math.floor(Math.random() * this.state.maxHero)
      //   // No Duplicates
      //   if (randomNum == this.state.currHeroId) {
      //     randomNum = Math.floor(Math.random() * this.state.maxHero)
      //   }
      //   this.setState(
      //     {
      //       hero: this.heroes[randomNum]
      //     }
      //   );
      // }
    );
  }
}

export default App;
