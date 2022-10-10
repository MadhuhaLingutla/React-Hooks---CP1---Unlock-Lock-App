// Write your code here

import {useState} from 'react'
import {
  LockContainer,
  LockImage,
  LockText,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)
  const onClickButton = () => setLock(prevState => !prevState)

  const lockImage = lock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const lockImageAlt = lock ? 'lock' : 'unlock'

  const lockText = lock ? 'Your Device is Locked' : 'Your Device is Unlocked'

  const buttonText = lock ? 'Unlock' : 'Lock'

  return (
    <LockContainer>
      <LockImage src={lockImage} alt={lockImageAlt} />
      <LockText>{lockText}</LockText>
      <LockButton onClick={onClickButton} type="button">
        {buttonText}
      </LockButton>
    </LockContainer>
  )
}

export default Unlock
