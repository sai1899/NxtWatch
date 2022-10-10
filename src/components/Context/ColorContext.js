import React from 'react'

const ColorContext = React.createContext({
  activeColor: 'false',
  changeColor: () => {},
  savedVideosList: [],
  addToSavedVideos: () => {},
})

export default ColorContext
