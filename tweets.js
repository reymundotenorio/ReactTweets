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
          <label htmlFor="count" className="mr-sm-2">
            Tweets:
          </label>
          <input
            type="number"
            className="form-control mb-2 mr-sm-2"
            name="count"
            min="1"
            max="30"
            value={this.state.count}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </form>

        {tweets.map(item => {
          return (
            <React.Fragment key={item.id_str}>
              {item.retweeted_status && <Retweet retweetUsername={item.retweeted_status.user.screen_name} />}

              <Tweet
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
          <label htmlFor="count" className="mr-sm-2">
            Tweets:
          </label>
          <input
            type="number"
            className="form-control mb-2 mr-sm-2"
            name="count"
            min="1"
            max="30"
            value={this.state.count}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </form>

        {tweets.map(item => {
          return (
            <React.Fragment key={item.id_str}>
              {item.retweeted_status && <Retweet retweetUsername={item.retweeted_status.user.screen_name} />}

              <Tweet
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
          <label htmlFor="count" className="mr-sm-2">
            Tweets:
          </label>
          <input
            type="number"
            className="form-control mb-2 mr-sm-2"
            name="count"
            min="1"
            max="30"
            value={this.state.count}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </form>

        {tweets.map(item => {
          return (
            <React.Fragment key={item.id_str}>
              {item.retweeted_status && <Retweet retweetUsername={item.retweeted_status.user.screen_name} />}

              <Tweet
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

// Sort array
function sort_by_key(array, key) {
  return array.sort(function(a, b) {
    var x = a[key];
    var y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

// AlexaDevsTweets component
class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: [
        { name: "versa_agency", position: 1 },
        { name: "alexa_devs", position: 2 },
        { name: "rain_agency", position: 3 }
      ],
      panels: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // event.persist();
    this.setState(prevState => ({
      layout: prevState.layout.map(item =>
        item.name === event.target.name ? { ...item, position: event.target.value } : item
      )
    }));
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

  toRight(event) {
    console.log("AQUII", event);
  }

  componentDidMount() {
    this.reorder();
  }

  reorder() {
    const layoutOrdered = sort_by_key(this.state.layout, "position");

    this.setState({
      panels: layoutOrdered.map(order => {
        switch (order.name) {
          case "versa_agency":
            return (
              <React.Fragment key="versa_agency">
                <div className="col-sm">
                  <form className="form-inline sort-panel" onSubmit={this.handleSubmit}>
                    <label htmlFor="count" className="mr-sm-2">
                      Position:
                    </label>
                    <input
                      type="number"
                      className="form-control mb-2 mr-sm-2"
                      name="versa_agency"
                      min="1"
                      max="3"
                      value={this.state.layout.find(item => item.name === "versa_agency").position}
                      onChange={event => {
                        event.persist();
                        this.handleChange(event);
                      }}
                    />
                    <button type="submit" className="btn btn-primary mb-2">
                      Sort
                    </button>
                  </form>

                  <VersaTweets />
                </div>
              </React.Fragment>
            );
          case "rain_agency":
            return (
              <React.Fragment key="rain_agency">
                <div className="col-sm">
                  <form className="form-inline sort-panel" onSubmit={this.handleSubmit}>
                    <label htmlFor="count" className="mr-sm-2">
                      Position:
                    </label>
                    <input
                      type="number"
                      className="form-control mb-2 mr-sm-2"
                      name="rain_agency"
                      min="1"
                      max="3"
                      value={this.state.layout.find(item => item.name === "rain_agency").position}
                      onChange={this.handleChange}
                    />
                    <button type="submit" className="btn btn-primary mb-2">
                      Sort
                    </button>
                  </form>

                  <RainAgencyTweets />
                </div>
              </React.Fragment>
            );
          case "alexa_devs":
            return (
              <React.Fragment key="alexa_devs">
                <div className="col-sm">
                  <form className="form-inline sort-panel" onSubmit={this.handleSubmit}>
                    <label htmlFor="count" className="mr-sm-2">
                      Position:
                    </label>
                    <input
                      type="number"
                      className="form-control mb-2 mr-sm-2"
                      name="alexa_devs"
                      min="1"
                      max="3"
                      value={this.state.layout.find(item => item.name === "alexa_devs").position}
                      onChange={this.handleChange}
                    />
                    <button type="submit" className="btn btn-primary mb-2">
                      Sort
                    </button>
                  </form>

                  <AlexaDevsTweets />
                </div>
              </React.Fragment>
            );
        }
      })
    });
  }

  render() {
    const componentsOrdered = this.state.panels;

    return (
      <div className="container">
        <div className="row">{componentsOrdered}</div>
      </div>
    );
  }
}

// Render AlexaDevsTweets component
ReactDOM.render(<AppComponent />, document.getElementById("app"));
