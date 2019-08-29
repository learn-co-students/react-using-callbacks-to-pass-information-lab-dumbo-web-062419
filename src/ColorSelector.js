import React, { Component } from 'react';

export default class ColorSelector extends Component {

  handleClick = (event) => {
    this.props.selectNewColor(event.target.id)
  }
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div id={str} onClick={this.handleClick} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
