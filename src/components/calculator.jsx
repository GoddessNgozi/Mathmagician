/* eslint-disable */

import React, { Component } from 'react';
import './calculator.css';

export class Calculator extends Component {
  render() {
    return (
      <ul className="container">
        <li className="screen">0</li>
        <li className="row">
          <div className="button">Ac</div>
          <div className="button">+/-</div>
          <div className="button">%</div>
          <div className="button col-4">&#xf7;</div>
        </li>
        <li className="row">
          <div className="button">7</div>
          <div className="button">8</div>
          <div className="button">9</div>
          <div className="button col-4">x</div>
        </li>
        <li className="row">
          <div className="button">4</div>
          <div className="button">5</div>
          <div className="button">6</div>
          <div className="button col-4">-</div>
        </li>
        <li className="row">
          <div className="button">1</div>
          <div className="button">2</div>
          <div className="button">3</div>
          <div className="button col-4">+</div>
        </li>
        <li className="row">
          <div className="button span-2">0</div>
          <div className="button">.</div>
          <div className="button col-4">=</div>
        </li>
      </ul>
    );
  }
}

export default Calculator;
