import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./matches.json";
import "./App.css";

let correctGuesses = 0;
let bestScore = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      matches,
      correctGuesses,
      bestScore
  };

  setClicked = id => {
    const matches = this.state.matches;
    const clickedMatch = matches.filter(match => match.id === id);
    
    if (clickedMatch[0].clicked){
      correctGuesses = 0;
        for(let i = 0; i < matches.length; i++){
          matches[i].clicked = false;
        }
      
      this.setState({ correctGuesses });
      this.setState({ matches });

    } else if (correctGuesses < 11) {
      clickedMatch[0].clicked = true;
      correctGuesses++;
        if (correctGuesses > bestScore){
          bestScore = correctGuesses;
          this.setState({ bestScore });
        }
        
        matches.sort(function(a, b){return 0.5 - Math.random()});

        this.setState({ matches });
        this.setState({ correctGuesses });

    } else {
      clickedMatch[0].clicked = true;
      correctGuesses = 0;
      bestScore = 12;
      this.setState({ bestScore });
        for(let i = 0; i < matches.length; i++){
          matches[i].clicked = false;
        }

        matches.sort(function(a, b){return 0.5 - Math.random()});

        this.setState({ matches });
        this.setState({ correctGuesses });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Title correctGuesses={this.state.correctGuesses} bestScore={this.state.bestScore} />
        <Wrapper>
        <div className="container">
          <div className="row">
            {this.state.matches.map(match => (
              <MatchCard
                setClicked={this.setClicked}
                id={match.id}
                key={match.id}
                image={match.image}
                />
              ))}
          </div>
        </div> 
      </Wrapper> 
      </div>
    );
  }
}

export default App;
