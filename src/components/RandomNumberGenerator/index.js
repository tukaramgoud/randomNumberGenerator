// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="background-container">
        <div className="sub-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="sub-para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="main-heading">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
