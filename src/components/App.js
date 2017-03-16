import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import generateFieldArray from '../reducers/helpers'

import HeroPanel from './heroPanel/heroPanel'

class App extends Component {
  render() {
    console.log(this.props.field)
    return (
      <div className="app-game-frame">
        <HeroPanel />
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
		field: state.field,
	}
}

export default connect(mapStateToProps)(App)
