// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  onClickBtn = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const mainContainer = isDarkMode ? 'dark-container' : 'light-container'
    const heading = isDarkMode ? 'dark-heading' : 'light-heading'
    const btnText = isDarkMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="container">
        <div className={`main-container ${mainContainer}`}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button type="button" className="btn-style" onClick={this.onClickBtn}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
