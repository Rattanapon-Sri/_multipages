import "./Variable.css";
import PropTypes from "prop-types";

function Variable({ type, name, value, setValue }) {
  // const [value, setValue] = useState(props.value || 0);

  return (
    <div className="variable-wrapper">
      <h3 className="variable-title">{name || "VARIABLE"}</h3>
      <button className="btn btn-danger" onClick={() => setValue(value - 1)}>
        &minus;
      </button>
      <span className="variable-value">{type && type === 'int' ? value : value.toFixed(2)}</span>
      <button className="btn btn-success" onClick={() => setValue(value + 1)}>
        +
      </button>
    </div>
  );
}

Variable.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  type: PropTypes.string,
  setValue: PropTypes.func
};

export default Variable;
