import {useState} from 'react'
import './index.css'

const LettersCalculator = ({heading, label}) => {
  const [text, setText] = useState('')

  const onHandleChange = event => {
    setText(event.target.value)
  }

  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <div>
            <h1 className="heading">{heading}</h1>
            <label htmlFor="phrase" className="label">
              {label}
            </label>
            <input
              id="phrase"
              className="input"
              type="text"
              value={text}
              onChange={onHandleChange}
              placeholder="Enter the phrase"
            />
            <br />
            <div className="count">
              <p className="letter-count">No.of letters: {text.length}</p>
            </div>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    </div>
  )
}

export default LettersCalculator
