import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="app-game-frame">
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
		farm: state.farm,
	}
}

export default connect(mapStateToProps)(App)
