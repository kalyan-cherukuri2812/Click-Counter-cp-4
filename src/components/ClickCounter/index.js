// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevSt => ({count: prevSt.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="card-container">
        <h1 className="heading">
          The Button has been clicked
          <br /> <span className="counter">{count}</span> times
        </h1>
        <p className="para">Click the button to increase the counter!</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
