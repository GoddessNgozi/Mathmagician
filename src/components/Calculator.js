/* eslint-disable */

import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.mathMagic = this.mathMagic.bind(this);
  }

  mathMagic(e) {
    this.setState(calculate(this.state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <table>
        <tbody>
          <tr>
            <td className="screen" colspan="4">{total}{operation}{next}</td>
          </tr>
          <tr>
            <td onClick={this.mathMagic}>AC</td>
            <td onClick={this.mathMagic}>+/-</td>
            <td onClick={this.mathMagic}>%</td>
            <td className="col-4" onClick={this.mathMagic}>&#xf7;</td>
          </tr>
          <tr>
            <td onClick={this.mathMagic}>7</td>
            <td onClick={this.mathMagic}>8</td>
            <td onClick={this.mathMagic}>9</td>
            <td className="col-4" onClick={this.mathMagic}>x</td>
          </tr>
          <tr>
            <td onClick={this.mathMagic}>4</td>
            <td onClick={this.mathMagic}>5</td>
            <td onClick={this.mathMagic}>6</td>
            <td className="col-4" onClick={this.mathMagic}>-</td>
          </tr>
          <tr>
            <td onClick={this.mathMagic}>1</td>
            <td onClick={this.mathMagic}>2</td>
            <td onClick={this.mathMagic}>3</td>
            <td className="col-4" onClick={this.mathMagic}>+</td>
          </tr>
          <tr>
            <td colspan="2" onClick={this.mathMagic}>0</td>
            <td onClick={this.mathMagic}>.</td>
            <td className="col-4" onClick={this.mathMagic}>=</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
