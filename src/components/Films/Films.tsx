import React, { Component } from 'react';
import styles from './Films.module.scss';
import FilmBuilder from './FilmBuilder'
import { any } from 'prop-types';

interface film {
  id: string,
  title: string,
  description: string,
  producer: string,
  release_date: string,
  rt_score: string
}

class Films extends Component<any, any> {
  private films: film[] = [];

  constructor(props: any) {
    super(props);
    this.films = (new FilmBuilder).getFilms();
  }

  public render() {
    const listItems = this.films.map((film : film) =>
      <div key={film.id}>
          <span>{film.title}</span>
          <span>{film.description}</span>
          <span>{film.producer}</span>
          <span>{film.release_date}</span>
      </div>
    );
    return (
      <div className={styles.Film}>
        {listItems}
      </div>
    );
  }
}

export default Films;
