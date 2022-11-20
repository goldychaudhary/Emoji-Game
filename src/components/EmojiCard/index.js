import './index.css'

const EmojiCard = props => {
  const {details, onEmojiClick} = props
  const {id, emojiName, emojiUrl} = details

  const onClickEmojiBtn = () => {
    onEmojiClick(id)
  }

  return (
    <li className="emoji-card-bg">
      <button onClick={onClickEmojiBtn} type="button">
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
