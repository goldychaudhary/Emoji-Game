import './index.css'

const WinOrLooseCard = props => {
  const {topScore, resetAndPlay} = props

  const playAgain = () => {
    resetAndPlay()
  }

  const status = topScore === 12 ? 'Won' : 'Loose'
  const score = topScore === 12 ? 'Best Score' : 'Score'
  const image =
    topScore === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-Lose-bg">
      <div className="left-container">
        <h1 className="status">You {status}</h1>
        <p>{score}</p>
        <p className="result-score color-p">{topScore}/12</p>
        <button onClick={playAgain} className="play-again-btn" type="button">
          Play Again
        </button>
      </div>
      <img src={image} alt="win or lose" />
    </div>
  )
}
export default WinOrLooseCard
