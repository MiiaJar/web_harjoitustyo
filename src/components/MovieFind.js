import axios from "axios";
import React from "react";
import { withRouter } from "../withRouter";

//alapuolella on elokuvan hakeminen apista
var apiKey = "";
var movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=PAGE&with_genres=27&with_watch_monetization_types=flatrate`;
var imgBaseURL = "https://image.tmdb.org/t/p/w300/";

function pickRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

class MovieFind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {
        title: "",
        description: "",
        releaseDate: "",
        imgUrl: "",
      },
      errMessage: "",
    };
  }

  getMovieURLs(count = 5) {
    var urls = [];
    for (var i = 0; i < count; i++) {
      urls.push(movieURL.replace("PAGE", (i + 1).toString()));
    }
    return urls;
  }

  findHorrorMovie() {
    // {title: "halloween", description: "Classic horror movie from 1986", imgUrl: "", releaseDate: ""}
    var movies = [];
    var urls = this.getMovieURLs();
    Promise.all(urls.map((url) => axios.get(url)))
      .then((responses) => {
        responses.forEach((resp) => {
          const json = resp.data;
          if (!json || !json.results) {
            this.setState({ errMessage: "Yritä uudestaan!" });
            return;
          }
          json.results.forEach((movie) => {
            const { title, overview, poster_path, release_date } = movie;
            movies.push({
              title,
              description: overview,
              imgUrl: imgBaseURL + poster_path,
              releaseDate: release_date,
            });
          });
        });
        console.log("found: " + movies.length + " movies");
        const randomMovie = pickRandomItem(movies);
        this.setState({ selectedMovie: randomMovie });
        this.props.setMovie(randomMovie);
      })
      .catch((err) => {
        console.error(err);
        this.setState({ errMessage: "Yritä uudestaan!" });
      });
  }

  render() {
    if (this.state.selectedMovie.title !== "") {
      this.props.navigate("/movie");
      return;
    }
    return (
      <div>
        <img
          src={this.props.imagePath}
          className="fx-img h-400 "
          alt={this.props.alt}
          onClick={this.findHorrorMovie.bind(this)}
        ></img>
      </div>
    );
  }
}

export default withRouter(MovieFind);
