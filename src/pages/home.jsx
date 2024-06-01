import "./home.scss";
import hero from "../assets/hero1.png";
import SearchBar from "../components/SearchBar"

function Home() {
  return (
    <div className="home">
      <div className="headerWrapper">
        <div className="wrapper">
          <h1 className="title">Beyond the Beige:<br/> Kenyan Homes with Soul </h1>
          <p>
            Navigating the Kenyan real estate market can be daunting. At Kimmy
            Keys , we take the guesswork out of your search. Our team of
            dedicated experts boasts in-depth knowledge of the local market and
            are committed to finding the perfect property that aligns with your
            unique needs and aspirations.
          </p>
          <SearchBar/>
          <div className="boxes">
          <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>20+</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgWrapper">
        <img src={hero} />
      </div>
    </div>
  );
}

export default Home;
