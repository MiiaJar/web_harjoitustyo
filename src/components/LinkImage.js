import React from "react";

class LinkImage extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.imageLink} target="_blank">
          <img
            src={`images/${this.props.imagePath}`}
            className="fx-img h-400 "
            alt={this.props.alt}
          ></img>
        </a>
      </div>
    );
  }
}
export default LinkImage;
