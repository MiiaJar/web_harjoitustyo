import MovieFind from "./MovieFind";
import LinkImage from "./LinkImage";

export default function Home(props) {
  return (
    <>
      <div>
        <h6 className="text-black text-center">
          Sitä odotellessa voit tehdä jotain näistä hirveyksistä...
        </h6>
      </div>
      <div className="flex-container">
        <MovieFind
          alt="Frank"
          setMovie={props.setMovie}
          imagePath="images/frank-text.png"
        />
        <LinkImage
          alt="Pumpkin"
          imagePath="pumpkin-text.png"
          imageLink="https://www.k-ruoka.fi/artikkelit/halloween"
        />
        <LinkImage
          alt="Bottle"
          imagePath="bottle-text.png"
          imageLink="https://www.veripalvelu.fi/"
        />
      </div>
    </>
  );
}
