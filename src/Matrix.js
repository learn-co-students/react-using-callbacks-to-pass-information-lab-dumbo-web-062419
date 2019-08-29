import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: ""
    }
  }



  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} newColor={this.state.selectedColor} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  handleColorChange = (newColor) => {
    console.log(this.state.selectedColor)
    //console.log(newColor)
    this.setState({
      selectedColor: newColor
    })
    console.log(this.state.selectedColor)
  }


  render() {
    return (
      <div id="app">
        <ColorSelector onChangeColor={this.handleColorChange}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
