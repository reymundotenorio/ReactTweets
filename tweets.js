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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const formDOM = event.target;
    const formValuesDOM = formDOM.elements;

    this.setState(() => {
      return { count: formValuesDOM.count.value };
    });

    this.getData();
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
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

        {/* Change Tweets count */}
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label for="count" className="mr-sm-2">
            Tweets:
          </label>
          <input
            type="number"
            className="form-control mb-2 mr-sm-2"
            name="count"
            value={this.state.count}
            onChange={this.handleChange}
          />
          <button type="submit" class="btn btn-primary mb-2">
            Submit
          </button>
        </form>

        {tweets.map(item => {
          return (
            <React.Fragment>
              {item.retweeted_status && (
                <Retweet key={`${item.id_str}_00`} retweetUsername={item.retweeted_status.user.screen_name} />
              )}

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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const formDOM = event.target;
    const formValuesDOM = formDOM.elements;

    this.setState(() => {
      return { count: formValuesDOM.count.value };
    });

    this.getData();
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
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

        {/* Change Tweets count */}
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label for="count" className="mr-sm-2">
            Tweets:
          </label>
          <input
            type="number"
            className="form-control mb-2 mr-sm-2"
            name="count"
            value={this.state.count}
            onChange={this.handleChange}
          />
          <button type="submit" class="btn btn-primary mb-2">
            Submit
          </button>
        </form>

        {tweets.map(item => {
          return (
            <React.Fragment>
              {item.retweeted_status && (
                <Retweet key={`${item.id_str}_00`} retweetUsername={item.retweeted_status.user.screen_name} />
              )}

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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const formDOM = event.target;
    const formValuesDOM = formDOM.elements;

    this.setState(() => {
      return { count: formValuesDOM.count.value };
    });

    this.getData();
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
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

        {/* Change Tweets count */}
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label for="count" className="mr-sm-2">
            Tweets:
          </label>
          <input
            type="number"
            className="form-control mb-2 mr-sm-2"
            name="count"
            value={this.state.count}
            onChange={this.handleChange}
          />
          <button type="submit" class="btn btn-primary mb-2">
            Submit
          </button>
        </form>

        {tweets.map(item => {
          return (
            <React.Fragment>
              {item.retweeted_status && (
                <Retweet key={`${item.id_str}_00`} retweetUsername={item.retweeted_status.user.screen_name} />
              )}

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
class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: ["versa_agency", "alexa_devs", "rain_agency"],
      panels: []
    };
  }

  toRight(event) {
    console.log("AQUII", event);
  }

  componentDidMount() {
    this.reorder();
  }

  reorder() {
    this.setState({
      panels: this.state.layout.map(order => {
        switch (order) {
          case "versa_agency":
            return (
              <div className="col-sm">
                <button type="button" class="btn btn-primary mb-2" value="versa" onClick={this.toRight}>
                  ->
                </button>
                <VersaTweets key="versa" />
              </div>
            );
          case "rain_agency":
            return (
              <div className="col-sm">
                <RainAgencyTweets key="rain_agency" />
              </div>
            );
          case "alexa_devs":
            return (
              <div className="col-sm">
                <AlexaDevsTweets key="alexa_devs" />
              </div>
            );
        }
      })
    });
  }

  render() {
    const ordered = this.state.panels.map(panel => panel);

    return (
      <div className="container">
        <div className="row">{ordered}</div>
      </div>
    );
  }
}

// Render AlexaDevsTweets component
ReactDOM.render(<AppComponent />, document.getElementById("app"));
