import React, { Component } from 'react';
import styles from './Square.module.scss';

interface ISquareProps {
  squareValue: string,
  onClick: Function
}

class Square extends React.Component<ISquareProps> {
  constructor(props : ISquareProps) {
    super(props);
}

  render() {
    return (
      <button 
      className={styles.square}
      onClick={() => this.props.onClick()}>
        {this.props.squareValue}
      </button>
    );
  }
}

export default Square;


