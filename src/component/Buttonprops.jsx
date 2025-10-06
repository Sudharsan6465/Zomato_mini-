import PropTypes from "prop-types";

function Button(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
    </div>
  );
}

Button.defaultProps = {
  name: "sdfas",
  age: 67,
};

Button.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Button;
