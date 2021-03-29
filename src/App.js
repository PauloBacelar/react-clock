import React from "react";

const styles = {
  h1: {
    fontFamily: "Digital-7",
    color: "white",
  },

  div: {
    backgroundColor: "#1A1A1B",
    width: "99vw",
    height: "99vh",
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div style={styles.div}>
        <h1 style={styles.h1}>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default App;
