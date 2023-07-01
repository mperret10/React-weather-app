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
        <div className="box">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="api weather-icons">
                  <img
                    src
                    id="icon"
                    className="float-left"
                    width="90"
                    alt="weather"
                    rel="noreferrer"
                  />
                </div>
                <strong id="temperature">0</strong>
                <span class="units">
                  <button
                    href=""
                    id="celcius-link"
                    className="active"
                    rel="noreferrer"
                  >
                    °C
                  </button>
                  |
                  <button
                    className="fahrenheit"
                    id="fahrenheit-link"
                    rel="noreferrer"
                  >
                    °F
                  </button>
                </span>
              </div>

              <div className="weather-info">
                <div className="city" id="city"></div>
                <div className="col">
                  <h4>Today's Date</h4>
                  <ul>
                    <li id="description"></li>
                    <li>
                      Humidity:
                      <span id="humidity"></span>%
                    </li>
                    <li>
                      Wind:
                      <span id="wind"></span>
                      km/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>

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
