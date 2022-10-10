import styled from 'styled-components'

// const SavedContainer = styled.div`
//   display: flex;
//   flex-direction: row;
// `

// export const SavedVideoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `

// `
// export const TotalSavedVideoContainer = styled.div`
//   background-color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
//   color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
// `
// export const TotalSavedVideoContainerTwo = styled.div`
//   background-color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
//   color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
//   margin-left: 50px;
// `

export const SavedTopImage = styled.div`
  height: 90px;
  width: 50px;
`

export const SavedImageTopNew = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const AllSavedContainerTop = styled.div`
  background-color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
`

export const AllSavedVideosNew = styled.div`
  background-color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
  margin-left: 50px;
`
export const NewSaveContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const NewSavedVideoContainer = styled.div`
  background-color: ${props => (props.outline ? '#0f0f0f' : '#f9f9f9')};
  color: ${props => (props.outline ? '#f9f9f9' : '#0f0f0f')};
`

export default AllSavedContainerTop
