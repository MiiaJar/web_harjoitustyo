import React from "react";

class TitleTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  calculateTimeToHalloween() {
    // Set the date we're counting down to
    const currentYear = new Date().getFullYear();
    const countDownDate = new Date(
      "Oct 31, " + currentYear + " 00:00:00"
    ).getTime();

    // Update the count down every 1 second
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.setState({ days, hours, minutes, seconds });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.calculateTimeToHalloween();
  }

  render() {
    return (
      <>
        <div>
          <h5 className="text-red text-center mb-0">Halloweeniin on aikaa</h5>
        </div>
        <p className="text-red text-center mt-0">
          {this.state.days} päivää {this.state.hours} tuntia{" "}
          {this.state.minutes} minuuttia ja {this.state.seconds} sekuntia
        </p>
      </>
    );
  }
}

export default TitleTimer;
