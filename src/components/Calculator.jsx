import { evaluate } from 'mathjs'
import { useState } from 'react'

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]
const signs = ['+', '-', '*', '/']
const equalSign = '='

const Calculator = () => {
  const [value, setValue] = useState('')

  const handleNumberClick = (op) => setValue(value.concat(op))

  return (
    <>
      <h1>Calculadora</h1>
      <input value={value} readOnly />
      {rows.map((row, index) => (
        <div key={index} role='row'>
          {row.map((number) => (
            <button onClick={() => handleNumberClick(number)} key={number}>
              {number}
            </button>
          ))}
        </div>
      ))}
      {signs.map((sign) => (
        <button onClick={() => handleNumberClick(sign)} key={sign}>
          {sign}
        </button>
      ))}
      <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
    </>
  )
}

export default Calculator
