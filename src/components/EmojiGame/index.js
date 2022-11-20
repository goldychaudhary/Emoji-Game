import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoose from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

class EmojiGame extends Component {
  state = {idList: [], score: 0, topScore: 0, showCards: true}

  onEmojiClick = emojiId => {
    const {idList, score, topScore} = this.state

    if (idList.includes(emojiId) && score > topScore && score !== 12) {
      this.setState({
        score: 0,
        idList: [],
        topScore: score,
        showCards: false,
      })
    }
    if (score === 11) {
      this.setState({
        topScore: 12,
        score: 0,
        idList: [],
        showCards: false,
      })
    } else {
      this.setState(prevState => ({
        idList: [...prevState.idList, emojiId],
        score: prevState.score + 1,
      }))
    }
  }

  resetAndPlay = () => {
    this.setState({showCards: true, score: 0})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, showCards} = this.state
    const emojis = this.shuffledEmojisList()

    return (
      <div className="emoji-game-container">
        <NavBar showCards={showCards} score={score} topScore={topScore} />
        <div className="lower-section">
          {showCards === true ? (
            <ul className="emoji-game-ul">
              {emojis.map(each => (
                <EmojiCard
                  key={each.id}
                  details={each}
                  onEmojiClick={this.onEmojiClick}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoose topScore={topScore} resetAndPlay={this.resetAndPlay} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
