import React from 'react';

class AnimeRow extends React.Component {
  navigateMAL = (event) => {
    window.open(this.props.anime.url);
  }
  render() {
    return <section className="animeBody" key={this.props.anime.mal_id}>
      <figure>
      <img className="animePoster" src={this.props.anime.image_url} alt="Anime Image" title="Anime Image" />
      </figure>
      <article className="animeContent">
        <header>
          <p className="heading">{this.props.anime.title}</p>
        </header>
        <p className="subHeading">Synopsis</p>
        <p className="animeSynopsis">{this.props.anime.synopsis}</p>
        <table className="dataTable">
          <thead>
            <tr>
              <th>Type</th>
              <th>Episodes</th>
              <th>Score</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.anime.type}</td>
              <td>{this.props.anime.episodes ? this.props.anime.episodes : 'None'}</td>
              <td>{this.props.anime.score}</td>
              <td>{this.props.anime.start_date.slice(0,10)}</td>
              <td>{this.props.anime.end_date ? this.props.anime.end_date.slice(0,10) : 'None'}</td>
              <td>{this.props.anime.rated ? this.props.anime.rated : 'None'}</td>
            </tr>
          </tbody>
        </table>
        <section className="buttonContainer">
          <button className="learnMore">Learn More</button>
          <button 
          className="malButton" 
          onClick={this.navigateMAL}>MyAnimeList</button>
        </section>
      </article>
    </section>
  }
}

export default AnimeRow;