import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './assets/style/style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
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
        <div className="searchBar">
          <input className="inputBar" style={{paddingTop: 8, paddingLeft: "2%", paddingBottom: 8}}/>
          <button className="searchButton">
            <img src="https://image.flaticon.com/icons/svg/25/25313.svg" className="imageButton"/>
          </button>
        </div>
      </main>
    );
  }
}

render(<App />, document.getElementById('root'));
