import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color } = this.props;
    const redStyle = color === 'RED' ? 'red' : 'white';
    const yellowStyle = color === 'YELLOW' ? 'yellow' : 'white';
    const greenStyle = color === 'GREEN' ? 'green' : 'white';
    return (
      <div className="container">
        <div className="circle" id="red" style={{backgroundColor:redStyle}}></div>
        <div className="circle" id="yellow" style={{backgroundColor:yellowStyle}}></div>
        <div className="circle" id="green" style={{backgroundColor:greenStyle}}></div>
        <button onClick={() => this.props.dispatch({ type: 'CAUTION'})} disabled={color !== 'RED'}>Go</button>
        <button onClick={() => this.props.dispatch({ type: 'STOP'})} disabled={color !== 'GREEN'}>Caution</button>
        <button onClick={() => this.props.dispatch({ type: 'GO'})} disabled={color !== 'YELLOW'}>Stop</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    color : state
  }
}

export default connect(mapStateToProps)(App);
