import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const sColor = () => { this.props.setSelectedColor(str) }

      // setSelectedColor = (newColor) => {
      //   this.setState({
      //     selectedColor: newColor
      //   })
      // }

      return <div
      key={idx}
      onClick={sColor}
      className="color-swatch"
      style={{backgroundColor: str}}/>
    })
  )

  render() {
    console.log()
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
