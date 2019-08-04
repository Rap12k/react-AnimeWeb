import React, { Component } from 'react';
import { render } from 'react-dom';
import './assets/style/style.scss';
import AnimeRow from './AnimeRow.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      picked: 0,
      value: 0,
      disabled: false,
      rows: [
        <h2 className="heading" key="1">
        Enter an Anime to Search in the Above SearchBar
        </h2>
        ]
    };
  }

  performSearch = () => {
    console.log("starting search")
    const query = this._urlQuery();
    this._executeQuery(query);
  }
  _handleChange = (event) => {
    this.setState({searchString: event.target.value});
    console.log(this.state.searchString)
  }
  _submitPressed = (event) => {
    if (event.key === 'Enter') {
      this.performSearch();
    }
  }
  _urlQuery = () => {
    const params = {
      q: this.state.searchString,
      limit: 50,
      type: this.state.picked
    };
    var key;
    key = params[key];
    var options = ["anime", "manga"]
    var selectedOption = options[this.state.value]
    
    const querystring = Object.keys(params)
      .map(key => key + '=' + encodeURIComponent(params[key]))
      .join('&');
    switch (this.state.value) {
      case 0:
      case 1:
        return `https://api.jikan.moe/v3/search/${selectedOption}?` + querystring;
        break;
    }
  }
  _executeQuery = (query) => {
    this.setState(
      {
        disabled: true,
      });
      switch (this.state.value) {
        case 0:
          fetch(query)
            .then(response => response.json())
            .then(responseJson => {
              this.setState({
                disabled: false,
                });
              const results = responseJson.results
            })
            .catch(error => {
              console.error(error);
            });
        case 1:
          fetch(query)
            .then(response => response.json())
            .then(responseJson => {
              const results = responseJson.results

              var animeRows = []

              results.forEach((anime) => {
                console.log(anime.title)
                const anime = <AnimeRow anime={anime} />
                animeRows.push(anime)
              })

              this.setState({
                disabled: false,
                rows: animeRows
                });
            })
            .catch(error => {
              console.error(error);
            });
      }
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
          <input 
          className="inputBar" 
          style={{paddingTop: 8, paddingLeft: "2%", paddingBottom: 8}} 
          value={this.state.searchString} 
          onChange={this._handleChange}
          onKeyPress={this._submitPressed}
          />
          <button className="searchButton" disabled={this.state.disabled} onClick={this.performSearch}>
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
