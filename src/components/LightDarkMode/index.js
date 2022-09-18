// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: false}

  change = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  theme = () => {
    const {isDark} = this.state
    let theme
    if (isDark === true) {
      theme = 'Dark'
    } else {
      theme = 'Light'
    }
    return theme
  }

  render() {
    const className = this.theme()
    return (
      <div className="bg">
        <div className={`card ${className}`}>
          <h1>Click To Change Mode</h1>
          <button className="button" onClick={this.change} type="button">
            {className} Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
