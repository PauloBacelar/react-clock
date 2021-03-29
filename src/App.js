import React from "react";

const styles = {
  h1: {
    fontSize: "5rem",
  },

  h1Max540px: {
    fontSize: "2.5rem",
  },

  div: {
    backgroundColor: "#1A1A1B",
    width: "100vw",
    height: "100vh",
    minWidth: "300px",
    fontFamily: "Orbitron",
    color: "#f0f0f0",
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
        <h1 style={window.screen.width > 450 ? styles.h1 : styles.h1Max540px}>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    );
  }
}

export default App;
