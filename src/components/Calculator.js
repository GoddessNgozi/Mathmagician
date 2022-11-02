/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const mathMagic = (e) => {
    const logic = calculate({ total, next, operation }, e.target.textContent);
    setTotal(logic.total);
    setNext(logic.next);
    setOperation(logic.operation);
  };

  return (
    <section>
      <h2>
        Lets do some maths!
      </h2>
      <table>
        <tbody>
          <tr>
            <td className="screen" colSpan="4">
              {total}
              {operation}
              {next}
            </td>
          </tr>
          <tr>
            <td onClick={mathMagic}>AC</td>
            <td onClick={mathMagic}>+/-</td>
            <td onClick={mathMagic}>%</td>
            <td className="col-4" onClick={mathMagic}>&#xf7;</td>
          </tr>
          <tr>
            <td onClick={mathMagic}>7</td>
            <td onClick={mathMagic}>8</td>
            <td onClick={mathMagic}>9</td>
            <td className="col-4" onClick={mathMagic}>x</td>
          </tr>
          <tr>
            <td onClick={mathMagic}>4</td>
            <td onClick={mathMagic}>5</td>
            <td onClick={mathMagic}>6</td>
            <td className="col-4" onClick={mathMagic}>-</td>
          </tr>
          <tr>
            <td onClick={mathMagic}>1</td>
            <td onClick={mathMagic}>2</td>
            <td onClick={mathMagic}>3</td>
            <td className="col-4" onClick={mathMagic}>+</td>
          </tr>
          <tr>
            <td colSpan="2" onClick={mathMagic}>0</td>
            <td onClick={mathMagic}>.</td>
            <td className="col-4" onClick={mathMagic}>=</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Calculator;
