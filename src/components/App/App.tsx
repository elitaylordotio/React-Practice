import React, { Component } from 'react';
import styles from './App.module.scss';
import Game from '../TicTacToe/Game/Game';

class App extends Component<any, any> {
  render() {
    return (
      <div className={styles.App}>
        Hello
        <br/>
        <Game/>
      </div>
    );
  }
}

export default App;
