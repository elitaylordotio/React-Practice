import React, { Component } from 'react';
import styles from './Game.module.scss';
import Board from '../Board/Board';

class Game extends React.Component {
  render() {
    return (
      <div className={styles.game}>
        <div className="game-board">
          <Board />
        </div>
        <div className={styles.gameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
