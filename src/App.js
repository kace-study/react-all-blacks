import React, { Component } from 'react';
import PanelList from './components/PanelList/PanelList'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isPlaying: true }
  }

  endGame = () => {
    this.setState({ isPlaying: false });
  }

  startGame = () => {
    this.setState({ isPlaying: true });
  }

  render() {
    const isPlaying = this.state.isPlaying;
    return (
      <div className="App">

        <header className="header">
          { isPlaying ? 
            <h1>ALL BLACKS</h1> :
            <h1>Congrats! Haka!</h1>
          }
          <button onClick={() => this.startGame()}>Start</button>
        </header>
        <PanelList isPlaying={isPlaying} endGame={this.endGame}/>
      </div>
    );
  }
}

export default App;
