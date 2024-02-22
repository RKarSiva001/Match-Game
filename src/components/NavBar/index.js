import {Component} from 'react'
import './index.css'

const initialState = {
  time: 60,
}

class NavBar extends Component {
  state = initialState

  render() {
    const {time} = this.state
    //  const {score, isGameInProgress} = this.props {score}

    return (
      <nav className="nav-bar-container">
        <div className="title-with-score-container">
          <div className="logo-and-title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
            />
          </div>
          <div className="scores-container">
            <p className="score">Score: </p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p>{time} sec</p>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
