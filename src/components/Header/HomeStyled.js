import styled from 'styled-components'

const TopHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 120px;
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`

export const HeaderLogo = styled.img`
  height: 30px;
  width: 90px;
`

export const HeaderLogout = styled.button`
  border: 1px solid #3b82f6;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: white;
  color: #3b82f6;
  font-size: 14px;
`

export const HeaderProfileLogo = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 20px;
  margin-right: 20px;
`

export const HeaderTopRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default TopHeaderContainer
