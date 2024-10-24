import { useState } from "react";
import "./Counter.css";
import PropTypes from "prop-types";

function Counter(props) {
  // props = {
  //     name: "Counter",
  //     value: 0
  // }

  // let value = props.value

  //     read      set
  const [value, setValue] = useState(props.value || 0);

  function inc() {
    setValue(value + 1);
  }

  function dec() {
    setValue(value - 1);
  }

  return (
    <div className="counter-wrapper">
      <h3 className="counter-title">{props.name || "Counter"}</h3>
      <button className="btn btn-danger" onClick={dec}>
        -
      </button>
      <span className="counter-value">{value}</span>
      <button className="btn btn-success" onClick={inc}>
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};

export default Counter;
