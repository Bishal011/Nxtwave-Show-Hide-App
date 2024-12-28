// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameVisible: false, isLastNameVisible: false}

  onShowLastName = () => {
    this.setState(prevState => ({
      isLastNameVisible: !prevState.isLastNameVisible,
    }))
  }

  onShowFirstName = () => {
    this.setState(prevState => ({
      isFirstNameVisible: !prevState.isFirstNameVisible,
    }))
  }

  render() {
    const {isFirstNameVisible, isLastNameVisible} = this.state

    return (
      <div className="show-hide-container">
        <h1 className="head1">Show/Hide</h1>
        <div>
           <div className="items-container">
          <div className="button-container">
            <button
              type="button"
              onClick={this.onShowFirstName}
              className="button1"
            >
              Show/Hide FirstName
            </button>
            {isFirstNameVisible && <p className="para1">Joe</p>}
          </div>

          <div className="button-container">
            <button
              type="button"
              onClick={this.onShowLastName}
              className="button1"
            >
              Show/Hide LastName
            </button>
            {isLastNameVisible && <p className="para1">Jonas</p>}
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
