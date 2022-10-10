import styled from 'styled-components'

const GamingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const FinalNewGamingContainer = styled.div`
  background-color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
`

export const GamingImageTopContainer = styled.ul`
  display: flex;
  flex-direction: row;
  max-width: 1500px;
  flex-wrap: wrap;
`

export const GamingImageTopContainerone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const GamingAllContainerTwo = styled.div`
  background-color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
  margin-left: 50px;
`

export default GamingContainer
