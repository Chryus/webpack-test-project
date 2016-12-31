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

const USER = {
  name: "Maggie"
};

ReactDOM.render(
  <Greeting name={USER.name} />,
  document.getElementById("app")
);

const USER_DATA = {
  name: 'Chris Haaaaaaaack',
  username: 'chryus',
  image: 'https://avatars0.githubusercontent.com/u/5354390?v=3&s=460'
}

class ProfilePic extends React.Component {
  render () {
    return (
      <img src={this.props.imageUrl} style={{width:100, height:100}}/>
    );
  }
}

class ProfileName extends React.Component {
  render () {
    return (
      <div>{this.props.name}</div>
    );
  }
}

class ProfileLink extends React.Component {
  render () {
    return (
      <a href={'https://www.github.com/' + this.props.username}>
        {this.props.username}
      </a>
    );
  }
}

class Avatar extends React.Component {
  render () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  }
}

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById("avatar-section")
);