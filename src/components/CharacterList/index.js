import './index.css'

const CharacterList = props => {
  const {eachCharacterDetails} = props
  const {userInput} = eachCharacterDetails
  const count = userInput.length
  return (
    <li className="userInput-item">
      <p className="userInput-paragraph">
        {' '}
        {userInput} :<span className="userInput-span">{count}</span>{' '}
      </p>
    </li>
  )
}

export default CharacterList
