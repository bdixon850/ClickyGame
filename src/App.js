import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import instruments from "./instruments.json";
import './App.css';

class App extends Component {
  // Setting this.state.instruments to the instruments json array
  state = {
    instruments,
    score: 0,
    highScore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score}, function() {
        console.log(this.state.highScore);
      });
    }
    this.state.instruments.forEach(card => {
      card.count = 0;
    });
    alert(`Game Has Ended! \nscore: ${ this.state.score}`);
    this.setState({ score: 0});
    return true;
  }

  clickCount = id => {
    this.state.instruments.find((o, i) => {
      if(o.id === id) {
        if(instruments[i].count === 0) {
          instruments[i].count = instruments[i].count + 1;
          this.setState({ score: this.state.score + 1}, function() {
            console.log(this.state.score);
          });
          this.state.instruments.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar 
          score={ this.state.score} 
          highScore={ this.state.highScore }
        />
        <Header/>
        <Wrapper>
          {this.state.instruments.map(card => ( 
            <Card
              clickCount={ this.clickCount }
              id={ card.id }
              key={ card.key }
              image={card.image}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
};

export default App;
