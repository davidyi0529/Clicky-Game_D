import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends
  };
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>The Simpsons Memory Game_D

        <div className="scoreSummary"> </div>

        <div className="scoreSummary card-header">
          Correct Guesses: 
        <br />
          Best Score:  
        </div>

        </Title>

        <div className="container">
          <div className="row">
            {this.state.friends.map(match => (
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
