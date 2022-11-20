import './index.css'

const NavBar = props => {
  const {score, topScore, showCards} = props

  return (
    <div className="navBar-bg">
      <div className="logo-bg">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-app-name">Emoji Game</h1>
      </div>
      {showCards ? (
        <div className="score-container">
          <p className="score-p">Score: {score}</p>
          <p className="score-p">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavBar
