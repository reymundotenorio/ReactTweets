const API = "http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=";
const tweeterProfile = "versaagency";

// Tweet component
class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet-container">
        <p className="tweet-content">
          <b>{this.props.content}</b>
        </p>
        <p className="tweet-date">
          <small>{this.props.date}</small>
        </p>
        <p className="tweet-link">
          <a href={this.props.link} target="_blank">View tweet</a>
        </p>
      </div>
    );
  }
}

// Tweets parent component
class Tweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API + tweeterProfile)
      .then(result =>
        this.setState({
          tweets: result.data,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  render() {
    const { tweets, isLoading, error } = this.state;
    console.log(tweets);

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <React.Fragment>
        <h2>Tweets ({tweets.length})</h2>

        {tweets.map(item => {
          return (
            <Tweet
              key={item.id_str}
              content={item.text}
              date={item.created_at}
              link={`https://twitter.com/i/web/status/${item.id_str}`}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

// Render Header component
ReactDOM.render(<Tweets />, document.getElementById("tweets_container"));
