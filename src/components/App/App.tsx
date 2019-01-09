import React, { Component } from 'react';
import styles from './App.module.scss';
import Films from '../Films/Films';

class App extends Component<any, any> {
  render() {
    return (
      <div className={styles.App}>
        <Films></Films>
      </div>
    );
  }
}

export default App;
