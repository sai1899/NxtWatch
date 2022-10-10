import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoIosClose} from 'react-icons/io'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header/Header'
import EachHomeVideo from '../EachHomeVideo/EachHomeVideo'
import Sidebar from '../Sidebar/Sidebar'

import ColorContext from '../Context/ColorContext'

import HomeContainer, {
  HomeMain,
  NewImg,
  HomeSearchContainer,
  HomeSearchText,
  SearchIconDiv,
  HomeVideoContainer,
  TotalHomeContainer,
  NewImgTopContainer,
  NewImgTopLogo,
  WronButton,
  BuyNowButton,
} from './HomeStyled'

class Home extends Component {
  state = {
    searchInput: '',
    isLoading: 'pending',
    homeVideoList: '',
    isBanner: false,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
    this.getHomeVideos()
  }

  removeImage = event => {
    this.setState({isBanner: true})
  }

  getHomeVideos = async () => {
    const {searchInput} = this.state
    const videoCookie = Cookies.get('jwt_token')
    console.log(videoCookie)
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${videoCookie}`,
      },
      method: 'GET',
    }
    const allVideoResponse = await fetch(url, options)
    console.log(allVideoResponse)
    if (allVideoResponse.ok === true) {
      const jsonallVideoResponse = await allVideoResponse.json()
      console.log(jsonallVideoResponse.videos)
      const allHomeVideo = jsonallVideoResponse.videos.map(eachItem => ({
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
      console.log(allHomeVideo)
      this.setState({homeVideoList: allHomeVideo})
      this.setState({isLoading: 'false'})
    } else {
      this.setState({isLoading: 'failure'})
    }
  }

  clickedSearchButton = () => {
    this.getHomeVideos()
  }

  retryButtonClicked = () => {
    this.getHomeVideos()
  }

  checkHomeLoad = () => {
    const {isLoading, homeVideoList} = this.state
    switch (isLoading) {
      case 'false':
        return this.loadingHomeVideos()
      case 'failure':
        return this.homeError()
      case 'pending':
        return this.loadHomeSpinner()
      default:
        return null
    }
  }

  homeError = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We are having some trouble</p>
      <button onClick={this.retryButtonClicked}>Retry</button>
    </div>
  )

  loadingHomeVideos = () => {
    const {homeVideoList} = this.state

    const homevidelenght = homeVideoList.length === 0

    return homevidelenght ? (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <h1>No Search results found</h1>
        <p>Try different key words or remove search filter</p>
        <button onClick={this.retryButtonClicked}>Retry</button>
      </div>
    ) : (
      <HomeVideoContainer data-testid="banner">
        {homeVideoList.map(eachItem => (
          <EachHomeVideo homeList={eachItem} key={eachItem.id} />
        ))}
      </HomeVideoContainer>
    )

    // return (

    // )
  }

  loadHomeSpinner = () => (
    <div className="loader-container" data-testid="loader">
      {console.log('in load spinner')}
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {searchInput, isBanner} = this.state
    return (
      <ColorContext.Consumer>
        {value => {
          const {activeColor} = value
          return (
            <TotalHomeContainer outline={activeColor} data-testid="home">
              <Header />
              <HomeContainer>
                <Sidebar />
                <HomeMain>
                  <NewImg outilne={isBanner}>
                    <NewImgTopContainer>
                      <NewImgTopLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="website logo"
                      />
                      <WronButton
                        onClick={this.removeImage}
                        data-testid="close"
                      >
                        <IoIosClose />
                      </WronButton>
                    </NewImgTopContainer>
                    <p>Buy Nxt Watch Premium</p>
                    <BuyNowButton>GET IT NOW</BuyNowButton>
                  </NewImg>
                  {/* </NewImg>chContainer> */}
                  <HomeSearchContainer>
                    <HomeSearchText
                      type="search"
                      placeholder="Search"
                      outline={activeColor}
                      onChange={this.changeSearchInput}
                    />
                    <SearchIconDiv
                      testid="searchButton"
                      onClick={this.clickedSearchButton}
                    >
                      <AiOutlineSearch />
                    </SearchIconDiv>
                  </HomeSearchContainer>
                  {this.checkHomeLoad()}
                </HomeMain>
              </HomeContainer>
            </TotalHomeContainer>
          )
        }}
      </ColorContext.Consumer>
    )
  }
}

export default Home
