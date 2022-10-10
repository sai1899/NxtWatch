import styled from 'styled-components'

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 20px;
  background-color: ${props => (props.outline ? '#181818' : ' #f9f9f9 ')};
  color: ${props => (props.outline ? '#f9f9f9' : '#181818')};
  width: 20vw;
  padding-bottom: 30px;
  min-height: 90vh;
  position: sticky;
  left: 0;
`

export const SideTop = styled.div`
  display: flex;
  flex-direction: column;
`

export const SideHome = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`

export const SideChooseText = styled.p`
  margin-left: 10px;
`

export const SideSocialImages = styled.p`
  display: flex;
  flex-direction: row;
`
export const SideSocialEachImage = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`

export default SideContainer
