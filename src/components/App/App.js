import React, { Component } from 'react'
import s from './app.css'
import animatedGradient from '../../lib/animated-gradient'

// console.log(s);
export default class App extends Component {



  render() {
    return (
      <div className={s.app}>{this.props.children}</div>
     )
  }
}
