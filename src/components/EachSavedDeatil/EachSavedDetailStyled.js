import styled from 'styled-components'

const EachDetailVideo = styled.div`
  display: flex;
  flex-direction: column;
  //   margin-left: 50px;
  padding-left: 50px;

  width: 700px;
`
export const EachDetailVideoContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const EachDetailVideoThree = styled.div`
  width: 100%;
  background-color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
`

export const EachDetailVideoContainerOne = styled.div`
  display: flex;
  flex-direction: row;
`

export const EachDeatailsCountRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const likeNew = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const EachDetailsLikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
  color: ${props => (props.newone ? ' #2563eb' : '')};
`
export const EachDetailsLikeContainerThree = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
  color: ${props => (props.newone ? '#64748b' : '')};
`

export const EachDetailsLikeContainerFourth = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
  color: ${props => (props.newone ? '#2563eb' : '')};
`
export const EachDetailsLikeContainerFifth = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
  color: ${props => (props.newone ? '#2563eb' : '')};
`

export const EachVideoChannelImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`

export const EachVideoBottomDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export default EachDetailVideo
