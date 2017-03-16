import React, { Component } from 'react';
// import { connect } from 'react-redux'
import './heroPanel.css';

class HeroPanel extends Component {
  render() {
    return (
      <div className="hero-panel">
        <img src="./images/male.jpg" alt="hero"/>
        <br />
        <table>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>Doofus</td>
            </tr>
            <tr>
              <th>Experience:</th>
              <td>0</td>
            </tr>
            <tr>
              <th>Level:</th>
              <td>1</td>
            </tr>
            <tr>
              <th>Health:</th>
              <td>100 / 100</td>
            </tr>
            <tr>
              <th>Weapon:</th>
              <td>Pocket Knife</td>
            </tr>
            <tr>
              <th>Damage:</th>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default HeroPanel
