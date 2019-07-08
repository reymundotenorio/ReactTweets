const getTweetsAPI = "http://localhost:7890/1.1/statuses/user_timeline.json?include_rts=true";
const versaAgency = "VersaAgency";
const rainAgency = "RainAgency";
const alexaDevs = "alexadevs";

// Tweet component
class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet-container">
        <p className="tweet-content">
          <b>{this.props.content}</b>
        </p>
        <p className="tweet-date text-right">{moment(this.props.date).format("MMMM Do YYYY, h:mm:ss a")}</p>
        <p className="tweet-link">
          <a href={this.props.link} target="_blank">
            View tweet
          </a>
        </p>
      </div>
    );
  }
}

// Retweet component
class Retweet extends React.Component {
  render() {
    return (
      <div className="retweet-container">
        <p className="retweet-content">
          <b>It's a retweet of @{this.props.retweetUsername}</b>
        </p>
      </div>
    );
  }
}

// VersaTweets component
class VersaTweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      isLoading: false,
      error: null,
      count: 30
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(getTweetsAPI + "&count=" + this.state.count + "&screen_name=" + versaAgency)
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
        <h3>
          {tweets.length > 0 ? tweets[0].user.name : ""} ({tweets.length})
        </h3>

        {tweets.map(item => {
          return (
            <React.Fragment>
              {/* If is a retweet */}
              {item.retweeted_status && <Retweet retweetUsername={item.retweeted_status.user.screen_name} />}

              <Tweet
                key={item.id_str}
                content={item.text}
                date={item.created_at}
                link={`https://twitter.com/i/web/status/${item.id_str}`}
              />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

// RainAgencyTweets component
class RainAgencyTweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      isLoading: false,
      error: null,
      count: 30
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(getTweetsAPI + "&count=" + this.state.count + "&screen_name=" + rainAgency)
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
        <h3>
          {tweets.length > 0 ? tweets[0].user.name : ""} ({tweets.length})
        </h3>

        {tweets.map(item => {
          return (
            <React.Fragment>
              {/* If is a retweet */}
              {item.retweeted_status && <Retweet retweetUsername={item.retweeted_status.user.screen_name} />}

              <Tweet
                key={item.id_str}
                content={item.text}
                date={item.created_at}
                link={`https://twitter.com/i/web/status/${item.id_str}`}
              />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

// AlexaDevsTweets component
class AlexaDevsTweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
      isLoading: false,
      error: null,
      count: 30
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(getTweetsAPI + "&count=" + this.state.count + "&screen_name=" + alexaDevs)
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
        <h3>
          {tweets.length > 0 ? tweets[0].user.name : ""} ({tweets.length})
        </h3>

        {tweets.map(item => {
          return (
            <React.Fragment>
              {/* If is a retweet */}
              {item.retweeted_status && <Retweet retweetUsername={item.retweeted_status.user.screen_name} />}

              <Tweet
                key={item.id_str}
                content={item.text}
                date={item.created_at}
                link={`https://twitter.com/i/web/status/${item.id_str}`}
              />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

// Render VersaTweets component
ReactDOM.render(<VersaTweets />, document.getElementById("versa_tweets"));
// Render RainAgencyTweets component
ReactDOM.render(<RainAgencyTweets />, document.getElementById("rain_agency_tweets"));
// Render AlexaDevsTweets component
ReactDOM.render(<AlexaDevsTweets />, document.getElementById("alexa_devs_tweets"));
