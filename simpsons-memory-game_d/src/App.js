import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./matches.json";

let correctGuesses = 0;
let bestScore = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      matches,
      correctGuesses,
      bestScore
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>The Simpsons Memory Game_D

        <div className="scoreSummary"> </div>

        <div className="scoreSummary card-header">
          Correct Guesses: {this.state.correctGuesses} 
        <br />
          Best Score: {this.state.bestScore} 
        </div>

        </Title>

        <div className="container">
          <div className="row">
            {this.state.matches.map(match => (
              <FriendCard
                id={match.id}
                key={match.id}
                image={match.image}
                />
              ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
