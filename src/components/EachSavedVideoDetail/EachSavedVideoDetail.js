import {Component} from 'react'
import {Link} from 'react-router-dom'
import EachTrendVideoContainer, {
  EachTrendImage,
  EachTrendText,
} from './EachSavedVideoDetaistyled'

const EachSavedVideoDetail = props => {
  const {trendList} = props
  const {
    id,
    publishedAt,
    thumnailUrl,
    title,
    viewCount,
    channelName,
  } = trendList
  return (
    <Link
      to={`/videos/${id}`}
      style={{color: 'inherit', textDecoration: 'inherit'}}
    >
      <EachTrendVideoContainer>
        <EachTrendImage src={thumnailUrl} />
        <EachTrendText>
          <h5>{title}</h5>
          <p>{channelName}</p>
          <EachTrendVideoContainer>
            <p>{viewCount}</p>
            <p>{publishedAt}</p>
          </EachTrendVideoContainer>
        </EachTrendText>
      </EachTrendVideoContainer>
    </Link>
  )
}

export default EachSavedVideoDetail
