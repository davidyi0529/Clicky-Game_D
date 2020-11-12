import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import matches from "./matches.json";
import "./App.css";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      matches,
      correctGuesses,
      bestScore,
      clickMessage: "Click on an image to earn points, but don't click on any more than once!!",
  };

  setClicked = id => {
    const matches = this.state.matches;
    const clickedMatch = matches.filter(match => match.id === id);
    
    if (clickedMatch[0].clicked){
      correctGuesses = 0;
      clickMessage = "D'oh! You already clicked on this one. Better luck next time!!"

        for(let i = 0; i < matches.length; i++){
          matches[i].clicked = false;
        }
      
      this.setState({ clickMessage });
      this.setState({ correctGuesses });
      this.setState({ matches });

    } else if (correctGuesses < 11) {
      clickedMatch[0].clicked = true;
      correctGuesses++;

      clickMessage = "Hi Diddly Ho Neighborino! Keep it up!!";

        if (correctGuesses > bestScore){
          bestScore = correctGuesses;
          this.setState({ bestScore });
        }
        
        matches.sort(function(a, b){return 0.5 - Math.random()});

        this.setState({ matches });
        this.setState({ correctGuesses });
        this.setState({ clickMessage });

    } else {
      clickedMatch[0].clicked = true;
      correctGuesses = 0;
      clickMessage = "WOW!!! You got ALL of them!!! Now, let's see if you can do it again!";
      bestScore = 12;
      this.setState({ bestScore });
        for(let i = 0; i < matches.length; i++){
          matches[i].clicked = false;
        }

        matches.sort(function(a, b){return 0.5 - Math.random()});

        this.setState({ matches });
        this.setState({ correctGuesses });
        this.setState({ clickMessage });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title correctGuesses={this.state.correctGuesses} bestScore={this.state.bestScore} />
            {this.state.matches.map(match => (
              <MatchCard
                setClicked={this.setClicked}
                id={match.id}
                key={match.id}
                image={match.image}
                />
              ))}
        <Footer>{this.state.clickMessage}</Footer>
      </Wrapper> 
    );
  }
}

export default App;
