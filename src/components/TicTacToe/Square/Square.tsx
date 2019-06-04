import React, { Component } from 'react';
import styles from './Square.module.scss';

interface ISquareProps {
  squareValue: number
}

interface ISquareState {
  value: any
}

class Square extends React.Component<ISquareProps, ISquareState> {
  constructor(props : ISquareProps) {
    super(props);
    this.state = { value: null };
}

  render() {
    return (
      <button 
      className={styles.square}
      onClick={()=>this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;


