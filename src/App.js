
import './App.css';

function App() {
  return (
    <div className='movieMania'>
      <div className='firstContainer'>
        <header>
          <p>
          Home
          </p>
          <p>
          Movies
          </p>
          <p>
          Contact
          </p>
        </header>
      <div className='welcomeTextContainer'>
        <h1 className = "welcomeText">
        Unleash the magic of movies, anytime, anywhere.
        </h1>
      </div>
      </div>
      <div className="secondContainer">
        <h1>
        Movie Mania
        </h1>
          <p>
          Explore a diverse collection of the latest flicks from spine-chilling horrors to side-splitting comedies. Grab some popcorn and get comfy, the show is about to begin!
          </p>
          <button className='watchButton'>
            Watch Now
          </button>
      </div>
    </div>
  );
}

export default App;
