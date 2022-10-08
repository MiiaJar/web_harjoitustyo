import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <img
      src="images/verkko-removebg-preview (1).png"
      className="fx-img"
      onClick={() => navigate("/")}
    />
  );
}

class MovieResult extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="movie-box flex-container">
        <div className="movie-box-content">
          <p className="movie-box-header">{this.props.title}</p>
          <p className="movie-box-year">{this.props.releaseDate}</p>
          <p className="movie-box-info">{this.props.description}</p>
          <BackButton />
        </div>
        <div className="movie-box-content-image">
          <img src={this.props.imageURL} />
        </div>
      </div>
    );
  }
}

export default MovieResult;
