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
      <div className="mainContent">
          <div className="navBar">
            <div className="navList">
              <img className="logo" src="https://image.flaticon.com/icons/svg/1499/1499993.svg" width="50"/>
              <div className="navTitle">AnimeDB</div>
              <div className="navItem">Anime</div>
              <div className="navItem">Manga</div>
            </div>
          </div>
        <div className="searchBar">
          <input className="inputBar" style={{paddingTop: 8, paddingLeft: "2%", paddingBottom: 8}}/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
