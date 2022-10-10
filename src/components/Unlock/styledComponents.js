// Style your elements here
import styled from 'styled-components'

export const LockContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LockImage = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 40px;
`
export const LockText = styled.p`
  color: #e2e8f0;
  font-size: 30px;
  margin-bottom: 150px;
  font-family: 'Roboto';
`
export const LockButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #06b6d4;
  color: #ffffff;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  padding-left: 30px;
`
