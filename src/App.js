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
      <div className="App flex flex-col items-center h-screen">
        <div className="bg-blue-900 text-white w-full mb-6 p-2">
          <h1 className="text-lg font-bold">
            Welcome to 
            <div className="text-xl">Book of Mormon Hero Game!</div>
          </h1>
        </div>
        <p className="w-64 mb-6">
          <span className="font-bold italic">It's simple: </span>
          submit your name, age, gender, and get your hero!
        </p>

        <form className="border-2 rounded-md border-gray-400 p-4" onSubmit={this.handleSubmit}>
          <div>
            <label className="font-bold">Name: </label>
            <input className="border mb-2 rounded ml-1" name="name" placeholder="Moroni Jones"></input>
          </div>
          <div>
            <label className="font-bold">Age: </label>
            <input className="border mb-2 rounded ml-1" name="age" placeholder="23" type="number"></input>
          </div>
          <div>
            <label className="font-bold">Gender: </label>
            <input className="ml-1" type="radio" name="gender" value="male"></input>
            <label className="ml-1">Male </label>
            <input className="ml-1" type="radio" name="gender" value="female"></input>
            <label className="ml-1">Female </label>
          </div>
          <input className="mt-2 border border-gray-300 rounded px-1" type="submit" value="Submit"></input>
        </form>

        <Hero
          hero={this.state.hero}
          currHeroId={this.state.currHeroId}
          user={this.state.user}
        />

        <button
          className="mt-6 border border-gray-300 rounded px-1 text-blue-900" 
          onClick={() => {window.location.reload(true);}}
        >
          Reset / Play Again
        </button>

        <div className="text-sm fixed bottom-0 mb-3 italic">&copy; Nick Boyd 2023</div>

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
