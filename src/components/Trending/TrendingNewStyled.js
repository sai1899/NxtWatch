import styled from 'styled-components'

const TrendingContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TrendVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TrendingImageTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const TotalTrendVideoContainer = styled.div`
  background-color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
`
export const TotalTrendVideoContainerTwo = styled.div`
  background-color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
  margin-left: 50px;
`

export const TrendingTopImage = styled.div`
  height: 90px;
  width: 50px;
`

export default TrendingContainer
