import React, { Component } from 'react';
import styles from './Board.module.scss';
import Square from '../Square/Square';
import BoardLogic from './Board';

interface IBoardState {
  board: string[];
}

class Board extends React.Component<{}, IBoardState> {
  private boardController: BoardLogic;
  constructor(props: {}) {
    super(props);
    this.boardController = new BoardLogic();
    this.state = {
      board: this.boardController.boardState();
    }
  }

  renderSquare(i: any) {
    return <Square squareValue={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner ${winner}`;
    } else {
      status = `Next player: ${this.state.nextPlayer ? 'X' : 'O'}`;
    }


    return (
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
