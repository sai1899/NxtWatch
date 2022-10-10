import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import ColorContext from '../Context/ColorContext'

import EachDetailVideo, {
  EachDetailVideoContainer,
  EachDeatailsCountRow,
  EachDetailVideoContainerOne,
  EachDetailsLikeContainer,
  EachVideoChannelImage,
  EachVideoBottomDetails,
  EachDetailVideoThree,
  EachDetailsLikeContainerThree,
  EachDetailsLikeContainerFourth,
  EachDetailsLikeContainerFifth,
} from './EachSavedDetailStyled'
// import './EachVideo.css'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

class EachSavedDetail extends Component {
  state = {
    eachDeatilsVideoList: {},
    isDisliked: false,
    isLiked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getEachVideoDetails()
  }

  checkLikedStatus = () => {
    const {isLiked, isDisliked} = this.state
    if (isLiked === false) {
      this.setState({isLiked: true})
      this.setState({isDisliked: false})
    }
    if (isLiked === true) {
      this.setState({isLiked: false})
    }
  }

  checkDislikedStatus = () => {
    const {isLiked, isDisliked} = this.state
    if (isDisliked === false) {
      this.setState({isLiked: false})
      this.setState({isDisliked: true})
    }
    if (isDisliked === true) {
      this.setState({isDisliked: false})
    }
  }

  getEachVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const findJobsCookieDetails = Cookies.get('jwt_token')
    const findJobsUrlDetails = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${findJobsCookieDetails}`,
      },
      method: 'GET',
    }
    const findJobsResponseDetails = await fetch(findJobsUrlDetails, options)
    const findJobsJsonDetails = await findJobsResponseDetails.json()
    console.log(findJobsJsonDetails)
    console.log(findJobsJsonDetails.video_details)
    const allHomeVideo = {
      id: findJobsJsonDetails.video_details.id,
      title: findJobsJsonDetails.video_details.title,
      thumnailUrl: findJobsJsonDetails.video_details.thumbnail_url,
      publishedAt: findJobsJsonDetails.video_details.published_at,
      viewCount: findJobsJsonDetails.video_details.view_count,
      channelName: findJobsJsonDetails.video_details.channel.name,
      videoUrl: findJobsJsonDetails.video_details.video_url,
      description: findJobsJsonDetails.video_details.description,
      channelProfileImageUrl:
        findJobsJsonDetails.video_details.channel.profile_image_url,
      subscriberCount:
        findJobsJsonDetails.video_details.channel.subscriber_count,
    }

    this.setState({eachDeatilsVideoList: allHomeVideo})
    console.log(allHomeVideo)

    return <h1>Hello World</h1>
  }

  render() {
    const {eachDeatilsVideoList, isLiked, isDisliked, isSaved} = this.state
    return (
      <ColorContext.Consumer>
        {value => {
          const {activeColor, addToSavedVideos} = value

          const addVideoToList = () => {
            if (isSaved === false) {
              this.setState({isSaved: true})
              addToSavedVideos(eachDeatilsVideoList)
            }
          }

          return (
            <div>
              <Header />
              <EachDetailVideoContainer>
                <Sidebar />
                <EachDetailVideoThree outline={activeColor}>
                  <EachDetailVideo>
                    <ReactPlayer
                      url={eachDeatilsVideoList.videoUrl}
                      className="react_player"
                      controls
                    />
                    <h4>{eachDeatilsVideoList.title}</h4>
                    <hr />
                    <EachDeatailsCountRow>
                      <EachDetailVideoContainerOne>
                        <p>{eachDeatilsVideoList.subscriberCount}</p>
                        <p>{eachDeatilsVideoList.publishedAt}</p>
                      </EachDetailVideoContainerOne>
                      <EachDetailVideoContainerOne>
                        <EachDetailsLikeContainer
                          onClick={this.checkLikedStatus}
                          newone={isLiked}
                        >
                          <AiOutlineLike />
                          <p>Like</p>
                        </EachDetailsLikeContainer>
                        <EachDetailsLikeContainerThree
                          onClick={this.checkDislikedStatus}
                          newone={isDisliked}
                        >
                          <AiOutlineDislike />
                          <p>Dislike</p>
                        </EachDetailsLikeContainerThree>
                        {/* <EachDetailsLikeContainerFourth
                          
                        > */}
                        {!isSaved ? (
                          <EachDetailsLikeContainerFourth
                            onClick={addVideoToList}
                          >
                            <MdPlaylistAdd />
                            <p>Save</p>
                          </EachDetailsLikeContainerFourth>
                        ) : (
                          <EachDetailsLikeContainerFifth newone={isSaved}>
                            <MdPlaylistAdd />
                            <p>Saved</p>
                          </EachDetailsLikeContainerFifth>
                        )}
                        {/* </EachDetailsLikeContainerFourth> */}
                      </EachDetailVideoContainerOne>
                    </EachDeatailsCountRow>
                    <hr />
                    <EachDetailVideoContainerOne>
                      <EachVideoChannelImage
                        src={`${eachDeatilsVideoList.channelProfileImageUrl}`}
                      />
                      <EachVideoBottomDetails>
                        <p>{eachDeatilsVideoList.channelName}</p>
                        <p>{eachDeatilsVideoList.subscriberCount}</p>
                        <p>{eachDeatilsVideoList.description}</p>
                      </EachVideoBottomDetails>
                    </EachDetailVideoContainerOne>
                  </EachDetailVideo>
                </EachDetailVideoThree>
              </EachDetailVideoContainer>
            </div>
          )
        }}
      </ColorContext.Consumer>
    )
  }
}

export default EachSavedDetail
