import {Component} from 'react'
import {Link} from 'react-router-dom'
import EachHomeListConatiner, {
  EachHomeListImage,
  EachHomeBottomText,
  HomevideoTitle,
  HomeProfileUrl,
  HomeTiTleText,
  HomeChannelName,
  HomeViewsContainer,
} from './EachHomeStyled'

function EachHomeVideo(props) {
  const {homeList} = props
  const {id, publishedAt, thumnailUrl, title, viewCount, channel} = homeList
  return (
    <Link
      to={`/videos/${id}`}
      style={{color: 'inherit', textDecoration: 'inherit'}}
    >
      <EachHomeListConatiner>
        <EachHomeListImage src={thumnailUrl} />
        <EachHomeBottomText>
          <HomeProfileUrl src={channel.profileImageUrl} />
          <HomevideoTitle>
            <HomeTiTleText>{title}</HomeTiTleText>
            <HomeChannelName>{channel.name}</HomeChannelName>
            <HomeViewsContainer>
              <HomeTiTleText>{viewCount}</HomeTiTleText>
              <HomeTiTleText>{publishedAt}</HomeTiTleText>
            </HomeViewsContainer>
          </HomevideoTitle>
        </EachHomeBottomText>
      </EachHomeListConatiner>
    </Link>
  )
}

export default EachHomeVideo
