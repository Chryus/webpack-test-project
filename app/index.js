var React = require('react');
var ReactDOM = require('react-dom');

// Example building greeting section with ES6 class components

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

// Example building avatar section with ES6 class components

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

const user_data = {
  name: 'Chris Haaaaaaaack',
  username: 'chryus',
  image: 'https://avatars0.githubusercontent.com/u/5354390?v=3&s=460'
}

ReactDOM.render(
  <Avatar user={user_data} />,
  document.getElementById('avatar-section')
)

// Example building comment section with stateless functional components

function formatDate(date) {
  return date.toLocaleDateString();
}

function CommentAvatar(props) {
  return (
    <img className="Avatar" style={{width:100, height:100}}
      src={props.user.avatarUrl}
      alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <CommentAvatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

// Components must return a single root element. This is why we added a <div> to contain all the <Welcome /> elements.
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I am learning React it's totes groovy",
  author: {
    name: "Stevie Wonder",
    avatarUrl: "http://rockandrollphotogallery.com/wp-content/uploads/2014/01/37.Stevie_Wonder_Harmonica_1975.JPG"
  }
}

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />,
  document.getElementById('comment')
)