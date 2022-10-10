import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillHome, AiOutlineFire} from 'react-icons/ai'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import EachGameVideo from '../EachGameVideo/EachGameVideo'
import ColorContext from '../Context/ColorContext'
import GamingContainer, {
  FinalNewGamingContainer,
  GamingImageTopContainer,
  GamingImageTopContainerone,
  GamingAllContainerTwo,
} from './GamingStyled'

class Gaming extends Component {
  state = {isLoading: 'pending', gamingList: []}

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    const url = 'https://apis.ccbp.in/videos/gaming'
    const gamingjwt = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${gamingjwt}`,
      },
      method: 'GET',
    }
    const trendResponse = await fetch(url, options)
    if (trendResponse.ok === true) {
      const gamingdata = await trendResponse.json()
      console.log(gamingdata)
      const allGamingVideo = await gamingdata.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumnailUrl: eachItem.thumbnail_url,
        publishedAt: eachItem.published_at,
        viewCount: eachItem.view_count,
      }))
      this.setState({gamingList: allGamingVideo})
      this.setState({isLoading: 'false'})
      this.checkGamingLoad()
    } else {
      this.setState({isLoading: 'failure'})
    }
  }

  checkGamingLoad = () => {
    const {isLoading, trendingList} = this.state
    switch (isLoading) {
      case 'false':
        return this.loadingGamingVideos()
      case 'failure':
        return this.GamingError()
      case 'pending':
        return this.loadGamingSpinner()
      default:
        return null
    }
  }

  GamingError = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble</p>
      <button onClick={this.getTrendingList}>Retry</button>
    </div>
  )

  loadingGamingVideos = () => {
    const {gamingList} = this.state

    return (
      <ColorContext.Consumer>
        {value => {
          const {activeColor} = value
          return (
            <GamingAllContainerTwo outline={activeColor}>
              <GamingImageTopContainerone>
                {/* <TrendingTopImage /> */}
                <AiOutlineFire className="first" />
                {/* <TrendingTopImage /> */}
                <h1>Gaming</h1>
              </GamingImageTopContainerone>
              <GamingImageTopContainer>
                {gamingList.map(eachItem => (
                  <EachGameVideo allGaming={eachItem} key={eachItem.id} />
                ))}
              </GamingImageTopContainer>
            </GamingAllContainerTwo>
          )
        }}
      </ColorContext.Consumer>
    )
  }

  loadGamingSpinner = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  render() {
    return (
      <ColorContext.Consumer>
        {value => {
          const {activeColor} = value
          return (
            <FinalNewGamingContainer outline={activeColor} data-testid="gaming">
              <Header />
              <GamingContainer>
                <Sidebar />
                {this.checkGamingLoad()}
              </GamingContainer>
            </FinalNewGamingContainer>
          )
        }}
      </ColorContext.Consumer>
    )
  }
}

export default Gaming
