import React, { Component } from 'react';
import { render } from 'react-dom';
import './assets/style/style.scss';
import AnimeRow from './AnimeRow.js';

class App extends Component {
  constructor() {
    this.state = {
      searchString: '',
      picked: 0,
      value: 0,
      disabled: false,
      rows: [<p key="1">test</p>]
    };

    /*const animes = [
      {id: 0, title: "Anime Title", synopsis: "As the Fourth Holy Grail War rages on with no clear victor in sight, the remaining Servants and their Masters are called upon by Church supervisor Risei Kotomine, in order to band together and confron...", image_url: "https://1.bp.blogspot.com/-lUDcZyriPL4/XQVfQnw3ReI/AAAAAAAAoZw/4qk-I3SVCaITsn7vbxBp0SVKV0l4GIgkACLcBGAs/w180/ta_31-the-two-gets-by-tomorrow-too-more-or-less.jpg"},
      {id: 1, title: "Anime Title", synopsis: "As the Fourth Holy Grail War rages on with no clear victor in sight, the remaining Servants and their Masters are called upon by Church supervisor Risei Kotomine, in order to band together and confron...", image_url: "https://1.bp.blogspot.com/-lUDcZyriPL4/XQVfQnw3ReI/AAAAAAAAoZw/4qk-I3SVCaITsn7vbxBp0SVKV0l4GIgkACLcBGAs/w180/ta_31-the-two-gets-by-tomorrow-too-more-or-less.jpg"}
    ]

    var animeRows = []
    animes.forEach((anime) => {
      console.log(anime.title)
      const animeRow = <AnimeRow anime={anime} />
      animeRows.push(animeRow)
    })

    this.state = {rows: animeRows}*/
    this.performSearch()
  }

  performSearch() {
    console.log("starting search")
    const query = this._urlQuery();
    this._executeQuery(query);
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
      .join('%');
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
          <input className="inputBar" style={{paddingTop: 8, paddingLeft: "2%", paddingBottom: 8}}/>
          <button className="searchButton" disabled={this.state.disabled}>
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
