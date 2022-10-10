import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillHome, AiOutlineFire} from 'react-icons/ai'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import EachSavedVideoDetail from '../EachSavedVideoDetail/EachSavedVideoDetail'
// import EachTrendVideo from '../EachTrendVideo/EachTrendVideo'
// import './Trending.css'
import ColorContext from '../Context/ColorContext'

import AllSavedContainerTop, {
  NewSaveContainer,
  NewSavedVideoContainer,
  SavedImageTopNew,
  SavedTopImage,
} from './AllSavedVideosStyled'

class AllSavedVideos extends Component {
  state = {isLoading: 'pending', trendingList: [], newSavedVideo: []}

  //   componentDidMount() {
  //     this.getTrendingList()
  //   }

  //   getTrendingList = async () => {
  //     const url = 'https://apis.ccbp.in/videos/trending'
  //     const trendingjwt = Cookies.get('jwt_token')

  //     const options = {
  //       headers: {
  //         Authorization: `Bearer ${trendingjwt}`,
  //       },
  //       method: 'GET',
  //     }
  //     const trendResponse = await fetch(url, options)
  //     if (trendResponse.ok === true) {
  //       const trendingdata = await trendResponse.json()
  //       const allTrendingVideo = await trendingdata.videos.map(eachItem => ({
  //         id: eachItem.id,
  //         title: eachItem.title,
  //         thumnailUrl: eachItem.thumbnail_url,
  //         publishedAt: eachItem.published_at,
  //         viewCount: eachItem.view_count,
  //         channel: {
  //           name: eachItem.channel.name,
  //           profileImageUrl: eachItem.channel.profile_image_url,
  //         },
  //       }))
  //       this.setState({trendingList: allTrendingVideo})
  //       this.setState({isLoading: 'false'})
  //       this.checkTrendLoad()
  //     }
  //   }

  //   checkTrendLoad = () => {
  //     const {isLoading, trendingList} = this.state
  //     switch (isLoading) {
  //       case 'false':
  //         return this.loadingTrendingVideos()
  //       case 'failure':
  //         return this.TrendingError()
  //       case 'pending':
  //         return this.loadTrendingSpinner()
  //       default:
  //         return null
  //     }
  //   }

  //   TrendingError = () => (
  //     <div>
  //       <h1>Error</h1>
  //     </div>
  //   )

  loadingTrendingVideos = () => {
    const {newSavedVideo} = this.state
    return (
      <ColorContext.Consumer>
        {value => {
          const {activeColor, savedVideosList} = value
          const homevidelenght = savedVideosList.length === 0
          return (
            <NewSavedVideoContainer
              outline={activeColor}
              data-testid="savedVideos"
            >
              <SavedImageTopNew>
                <SavedTopImage />
                <AiOutlineFire className="first" />
                <SavedTopImage />
                <h1>SavedVideos</h1>
              </SavedImageTopNew>
              {console.log('i ma')}
              {console.log(savedVideosList)}
              {homevidelenght ? (
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <p>No saved videos found</p>
                  <p>You can save your videos while watching them</p>
                </div>
              ) : (
                <ul>
                  {savedVideosList.map(eachItem => (
                    <EachSavedVideoDetail
                      trendList={eachItem}
                      key={eachItem.id}
                    />
                  ))}
                </ul>
              )}
            </NewSavedVideoContainer>
          )
        }}
      </ColorContext.Consumer>
    )
  }

  //   loadTrendingSpinner = () => (
  //     <div className="loader-container" data-testid="loader">
  //       <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
  //     </div>
  //   )

  render() {
    return (
      <ColorContext.Consumer>
        {value => {
          const {activeColor, savedVideosList} = value
          return (
            <AllSavedContainerTop outline={activeColor}>
              <Header />
              <NewSaveContainer>
                <Sidebar />
                {this.loadingTrendingVideos()}
              </NewSaveContainer>
            </AllSavedContainerTop>
          )
        }}
      </ColorContext.Consumer>
    )
  }
}

export default AllSavedVideos
