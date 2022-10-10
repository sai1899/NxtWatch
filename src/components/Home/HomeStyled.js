import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 70px;
`

export const TotalHomeContainer = styled.div`
  background-color: ${props => (props.outline ? '#181818' : '#f9f9f9')};
  color: ${props => (props.outline ? '#f9f9f9' : '#181818')};
`

export const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
`
export const NewImg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: ${props => (props.outline ? 'none' : 'flex')};
  background-size: cover;
  width: 100%;
  height: 20vh;
  flex-direction: column;
  padding: 20px;
`
export const HomeSearchText = styled.input`
  width: 250px;
  padding: 5px;
  height: 25px;
  border: none;
`

export const WronButton = styled.button`
  border: none;
  background-color: transparent;
`

export const NewImgTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const NewImgTopLogo = styled.img`
  height: 50px;
  width: 100px;
  margin-bottom: 10px;
`

export const HomeSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  width: 250px;
  margin-top: 30px;
`
export const SearchIconDiv = styled.button`
  border: 1px solid black;
  text-align: center;
  width: 30px;
  height: 25px;
  display: flex;
  flex-direction: rows
  align-items: center;
  justify-content: center;
  background-color: #909090;
`
export const BuyNowButton = styled.button`
  padding: 5px;
  border: 1px solid black;
  width: 100px;
  height: 50px;
  background-color: transparent;
`

export const HomeVideoContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-top: 50px;
`

export default HomeContainer
