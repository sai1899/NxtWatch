import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillHome, AiOutlineFire} from 'react-icons/ai'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import EachTrendVideo from '../EachTrendVideo/EachTrendVideo'
import './Trending.css'
import ColorContext from '../Context/ColorContext'

import TrendingContainer, {
  TrendVideoContainer,
  TrendingImageTopContainer,
  TrendingTopImage,
  TotalTrendVideoContainer,
  TotalTrendVideoContainerTwo,
} from './TrendingNewStyled'

class Trending extends Component {
  state = {isLoading: 'pending', trendingList: []}

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    const url = 'https://apis.ccbp.in/videos/trending'
    const trendingjwt = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${trendingjwt}`,
      },
      method: 'GET',
    }
    const trendResponse = await fetch(url, options)
    if (trendResponse.ok === true) {
      const trendingdata = await trendResponse.json()
      const allTrendingVideo = await trendingdata.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumnailUrl: eachItem.thumbnail_url,
        publishedAt: eachItem.published_at,
        viewCount: eachItem.view_count,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
      }))
      this.setState({trendingList: allTrendingVideo})
      this.setState({isLoading: 'false'})
      this.checkTrendLoad()
    } else {
      this.setState({isLoading: 'failure'})
    }
  }

  checkTrendLoad = () => {
    const {isLoading, trendingList} = this.state
    switch (isLoading) {
      case 'false':
        return this.loadingTrendingVideos()
      case 'failure':
        return this.TrendingError()
      case 'pending':
        return this.loadTrendingSpinner()
      default:
        return null
    }
  }

  TrendingError = () => (
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

  loadingTrendingVideos = () => {
    const {trendingList} = this.state
    return (
      <ColorContext.Consumer>
        {value => {
          const {activeColor} = value
          return (
            <TotalTrendVideoContainerTwo
              outline={activeColor}
              data-testid="banner"
            >
              <TrendingImageTopContainer>
                <TrendingTopImage />
                <AiOutlineFire className="first" />
                <TrendingTopImage />
                <h1>Trending</h1>
              </TrendingImageTopContainer>
              <ul>
                {trendingList.map(eachItem => (
                  <EachTrendVideo trendList={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </TotalTrendVideoContainerTwo>
          )
        }}
      </ColorContext.Consumer>
    )
  }

  loadTrendingSpinner = () => (
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
            <TotalTrendVideoContainer
              outline={activeColor}
              data-testid="trending"
            >
              <Header />
              <TrendingContainer>
                <Sidebar />
                {this.checkTrendLoad()}
              </TrendingContainer>
            </TotalTrendVideoContainer>
          )
        }}
      </ColorContext.Consumer>
    )
  }
}

export default Trending
