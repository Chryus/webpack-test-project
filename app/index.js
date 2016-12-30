var React = require('react');
var ReactDOM = require('react-dom');

class Greeting extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}

const user = {
  name: "Maggie"
};

ReactDOM.render(
  <Greeting name={user.name} />,
  document.getElementById("app")
);
