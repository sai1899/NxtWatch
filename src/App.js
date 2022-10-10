import './App.css'
import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import ColorContext from './components/Context/ColorContext'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Trending from './components/Trending/Trending'
import Gaming from './components/Gaming/Gaming'
import EachVideoDetailedView from './components/EachVideoDetailedView/EachVideoDetailedView'
import Home from './components/Home/Home'
import AllSavedVideos from './components/AllSavedVideos/AllSavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound/index'

class App extends Component {
  state = {activeColor: false, savedVideosList: []}

  changeColor = () => {
    this.setState(prevState => ({
      activeColor: !prevState.activeColor,
    }))
  }

  addToSavedVideos = data => {
    const {savedVideosList} = this.state
    console.log('in saved videos')
    this.setState({savedVideosList: [...savedVideosList, data]})
    console.log(savedVideosList)
  }

  render() {
    const {activeColor, savedVideosList} = this.state
    return (
      <ColorContext.Provider
        value={{
          activeColor,
          changeColor: this.changeColor,
          addToSavedVideos: this.addToSavedVideos,
          savedVideosList,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/sidebar" component={Sidebar} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/header" component={Header} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={EachVideoDetailedView}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={AllSavedVideos}
          />
          <Route component={NotFound} />
        </Switch>
      </ColorContext.Provider>
    )
  }
}

export default App
