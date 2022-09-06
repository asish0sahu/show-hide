// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showHideFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  showHideLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  getFirstName = () => {
    const {firstName} = this.state
    return (
      firstName && (
        <div className="name-card">
          <p className="name">Joe</p>
        </div>
      )
    )
  }

  getLastName = () => {
    const {lastName} = this.state
    return (
      lastName && (
        <div className="name-card">
          <p className="name">Jonas</p>
        </div>
      )
    )
  }

  render() {
    return (
      <div className="showHideApp-bg-container">
        <h1 className="showHideApp-heading">Show/Hide</h1>
        <div>
          <div className="fullName-container">
            <div className="showHide-Name-container">
              <button
                type="button"
                onClick={this.showHideFirstName}
                className="showHide-firstName-btn"
              >
                Show/Hide Firstname
              </button>
              {this.getFirstName()}
            </div>

            <div className="showHide-Name-container">
              <button
                type="button"
                onClick={this.showHideLastName}
                className="showHide-lastName-btn"
              >
                Show/Hide Lastname
              </button>
              {this.getLastName()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
