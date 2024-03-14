// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, updateVal} = props
  const {suggestion} = details

  const onClickVal = () => {
    updateVal(suggestion)
  }

  return (
    <li className="container">
      <p className="para">{suggestion}</p>
      <button type="button" className="button" onClick={onClickVal}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="image"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
