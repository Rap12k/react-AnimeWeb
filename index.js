import React, { Component } from 'react';
import { render } from 'react-dom';
import './assets/style/style.scss';
import AnimeRow from './AnimeRow.js';

class App extends Component {
  constructor() {
    this.state = {
      rows: [
        <p key="1">Test</p>,
        <p key="2">Test</p>,
      ]
    };

    const animes = [
      {id: 0, title: "Anime Title", synopsis: "As the Fourth Holy Grail War rages on with no clear victor in sight, the remaining Servants and their Masters are called upon by Church supervisor Risei Kotomine, in order to band together and confron...", image_url: "https://1.bp.blogspot.com/-lUDcZyriPL4/XQVfQnw3ReI/AAAAAAAAoZw/4qk-I3SVCaITsn7vbxBp0SVKV0l4GIgkACLcBGAs/w180/ta_31-the-two-gets-by-tomorrow-too-more-or-less.jpg"},
      {id: 1, title: "Anime Title", synopsis: "As the Fourth Holy Grail War rages on with no clear victor in sight, the remaining Servants and their Masters are called upon by Church supervisor Risei Kotomine, in order to band together and confron...", image_url: "https://1.bp.blogspot.com/-lUDcZyriPL4/XQVfQnw3ReI/AAAAAAAAoZw/4qk-I3SVCaITsn7vbxBp0SVKV0l4GIgkACLcBGAs/w180/ta_31-the-two-gets-by-tomorrow-too-more-or-less.jpg"}
    ]

    var animeRows = []
    animes.forEach((anime) => {
      console.log(anime.title)
      const animeRow = <AnimeRow anime={anime} />
      animeRows.push(animeRow)
    })

    this.state = {rows: animeRows}
  }

  render() {
    return (
      <main className="mainContent">
        <nav className="navBar">
          <ul className="navList">
            <img className="logo" src="https://image.flaticon.com/icons/svg/1499/1499993.svg" width="50"/>
            <li className="navTitle">AnimeDB</li>
            <li className="navItem">Anime</li>
            <li className="navItem">Manga</li>
          </ul>
        </nav>
        <section className="searchBar">
          <input className="inputBar" style={{paddingTop: 8, paddingLeft: "2%", paddingBottom: 8}}/>
          <button className="searchButton">
            <img src="https://image.flaticon.com/icons/svg/25/25313.svg" className="imageButton"/>
          </button>
        </section>
        <div className="contentRow">
          {this.state.rows}
        </div>
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));
