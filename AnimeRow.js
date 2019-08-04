import React from 'react';

class AnimeRow extends React.Component {
  render() {
    return <section className="animeBody" key={this.props.anime.id}>
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
          <tr>
            <th>Type</th>
            <th>Episodes</th>
            <th>Score</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Rating</th>
          </tr>
          <tr>
            <td>TV</td>
            <td>12</td>
            <td>9</td>
            <td>2013-07-13</td>
            <td>2013-07-13</td>
            <td>R</td>
          </tr>
        </table>
        <section className="buttonContainer">
          <button className="learnMore">Learn More</button>
          <button className="malButton">MyAnimeList</button>
        </section>
      </article>
    </section>
  }
}

export default AnimeRow;