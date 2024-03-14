// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchEle: ''}

  onSearch = event => {
    this.setState({searchEle: event.target.value})
  }

  updateVal = value => {
    this.setState({searchEle: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchEle} = this.state
    const res = suggestionsList.filter(eachEle =>
      eachEle.suggestion.toLowerCase().includes(searchEle.toLowerCase()),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="img"
          alt="google logo"
        />
        <div className="cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="icon"
          />
          <input
            type="search"
            className="search"
            placeholder="Search Google"
            value={searchEle}
            onChange={this.onSearch}
          />
        </div>
        <ul className="list">
          {res.map(each => (
            <SuggestionItem
              key={each.id}
              details={each}
              updateVal={this.updateVal}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
