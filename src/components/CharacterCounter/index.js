import {Component} from 'react'
import {v4} from 'uuid'
import CharacterList from '../CharacterList'

import './index.css'

class CharacterCounter extends Component {
  state = {
    userInput: '',
    characterList: [],
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const characterObject = {
      id: v4(),
      userInput,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, characterObject],
      userInput: '',
    }))
  }

  render() {
    const {userInput, characterList} = this.state
    const showResultList = characterList.length === 0
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="result-container">
            <div className="heading-container">
              <h1 className="heading">Count the characters like a Boss...</h1>
            </div>
            <div className="result-container">
              {showResultList ? (
                <div className="no-userinput-container">
                  <img
                    className="no-userinput-image"
                    src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                    alt="no user inputs view"
                  />
                </div>
              ) : (
                <ul className="userinput-container">
                  {characterList.map(eachItem => (
                    <CharacterList
                      key={eachItem.id}
                      eachCharacterDetails={eachItem}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="add-container">
            <h1 className="add-heading">Character Counter</h1>
            <form className="add-form" onSubmit={this.onClickAddUserInput}>
              <input
                className="add-input"
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.onChangeUserInput}
                value={userInput}
              />
              <button className="add-button">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
