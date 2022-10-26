/* eslint-disable */

import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <table className="container">
        <tr className="screen">0</tr>
        <tr className="row">
          <td className="button">AC</td>
          <td className="button">+/-</td>
          <td className="button">%</td>
          <td className="button col-4">&#xf7;</td>
        </tr>
        <tr className="row">
          <td className="button">7</td>
          <td className="button">8</td>
          <td className="button">9</td>
          <td className="button col-4">x</td>
        </tr>
        <tr className="row">
          <td className="button">4</td>
          <td className="button">5</td>
          <td className="button">6</td>
          <td className="button col-4">-</td>
        </tr>
        <tr className="row">
          <td className="button">1</td>
          <td className="button">2</td>
          <td className="button">3</td>
          <td className="button col-4">+</td>
        </tr>
        <tr className="row">
          <td className="button span-2">0</td>
          <td className="button">.</td>
          <td className="button col-4">=</td>
        </tr>
      </table>
    );
  }
}

export default Calculator;
