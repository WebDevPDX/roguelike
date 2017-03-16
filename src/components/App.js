import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import HeroPanel from './heroPanel/heroPanel'

class App extends Component {
  render() {
    return (
      <div className="app-game-frame">
        <HeroPanel />
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
