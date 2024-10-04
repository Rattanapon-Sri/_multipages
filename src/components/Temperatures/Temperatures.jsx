import { useEffect, useState } from "react";
import Variable from "../Variable/Variable";
import "./Temperatures.css";
import PropTypes from "prop-types";

function Temperatures({ name, initCelsius }) {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);

  useEffect(() => {
    setFahrenheit(celsiusToFahrenheit(celsius));
    setKelvin(celsiustoKelvin(celsius));
  }, [celsius]);

  useEffect(() => {
    setCelsius(fahrenheitToCelsius(fahrenheit));
    setKelvin(fahrenheitToKelvin(fahrenheit));
  }, [fahrenheit]);

  useEffect(() => {
    setCelsius(kelvinToCelsius(kelvin));
    setFahrenheit(kelvinToFahrenheit(kelvin));
  }, [kelvin]);

  useEffect(() => {
    setCelsius(initCelsius || 0);
    setFahrenheit(celsiusToFahrenheit(initCelsius || 0));
    setKelvin(celsiustoKelvin(initCelsius || 0));
  }, [initCelsius]);

  //function convert between celsius, fahrenheit and kelvin
  //c -> f
  const celsiusToFahrenheit = (celsius) => (celsius * (9 / 5)) + 32;
  //c -> k
  const celsiustoKelvin = (celsius) => celsius + 273.15;
  //f -> c
  const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * (5 / 9);
  //f -> k
  const fahrenheitToKelvin = (fahrenheit) =>
    ((fahrenheit - 32) * (5 / 9)) + 273.15;
  //k -> c
  const kelvinToCelsius = (kelvin) => kelvin - 273.15;
  //k -> f
  const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * (9 / 5) + 32;

  return (
    <div className="temperatures-container">
      <h3 className="temperatures-title">{name || "Temperatures"}</h3>
      <div className="temperatures-variables">
        <div>
          <h3>
            <span className="badge bg-primary">
              {celsius.toFixed(2)} &deg;C
            </span>
          </h3>
          <Variable
            name={"Celsius"}
            value={celsius}
            setValue={setCelsius}
          />
        </div>
        <div>
          <h3>
            <span className="badge bg-primary">
              {fahrenheit.toFixed(2)} &deg;F
            </span>
          </h3>
          <Variable
            name={"Fahrenheit"}
            value={fahrenheit}
            setValue={setFahrenheit}
          />
        </div>
        <div>
          <h3>
            <span className="badge bg-primary">{kelvin.toFixed(2)} &deg;K</span>
          </h3>
          <Variable
            name={"Kelvin"}
            value={kelvin}
            setValue={setKelvin}
          />
        </div>
      </div>
    </div>
  );
}

Temperatures.propTypes = {
  name: PropTypes.string,
  initCelsius: PropTypes.number,
};

export default Temperatures;
