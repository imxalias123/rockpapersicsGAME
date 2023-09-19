import styled from 'styled-components'

export const Container = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 50px;
`
export const CourseBoard = styled.div`
  border: 3px solid #fff;
  border-radius: 18px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Bree Serif';
  width: 80%;
  padding: 30px;
`

export const WrapBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  color: #fff;
  font-size: 30px;
  margin: 0px;
`
export const ScoreContainer = styled(Div)`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
  height: 100%;
`
export const ScoreH1 = styled.h1`
  color: #223a5f;
  margin: 0px;
`
export const Score = styled(ScoreH1)`
  font-size: 50px;
`
export const WrapImages = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  width: 600px;
  margin-top: 180px;
`
export const List = styled.li``

export const Button = styled.button`
  border: none;
  background-color: transparent;
`

export const Img = styled.img`
  width: 230px;
`
export const PopButton = styled.button`
  width: 120px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  color: #223a5f;
  font-family: 'Bree Serif';
  background-color: #fff;
  border: none;
  border-radius: 7px;
  margin-left: 90%;
  margin-top: 30px;
`

export const PopupContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivPopup = styled.div`
  width: 820px;
  height: 650px;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CloseButton = styled.button`
  margin-bottom: 610px;
  margin-right: 40px;
  border: none;
`

export const PopupImg = styled(Img)`
  width: 700px;
  margin: 30px;
`
