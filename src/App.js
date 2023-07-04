import React from "react";
import "./styles.css";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />

        <video autoPlay muted loop>
          <source
            src="cloudscape.mp4"
            type="video/mp4"
            className="object-fit-fill"
          />
        </video>

        <footer>
          For more details about the forecast,
          <a
            href="https://weather.com/?Goto=Redirected"
            rel="noreferrer"
            target="_blank"
          >
            click here
          </a>
          <a
            href="https://github.com/mperret10?tab=repositories"
            className="btn btn-primary Repository-btn"
            target="_blank"
            rel="noreferrer"
          >
            Github Repositories
          </a>
        </footer>
      </div>
    </div>
  );
}
