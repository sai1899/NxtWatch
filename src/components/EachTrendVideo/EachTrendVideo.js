import {Link} from 'react-router-dom'
import EachTrendVideoContainer, {
  EachTrendImage,
  EachTrendText,
} from './EachTrendVideoStyle'

const EachTrendVideo = props => {
  const {trendList} = props
  const {id, publishedAt, thumnailUrl, title, viewCount, channel} = trendList
  return (
    <Link
      to={`/videos/${id}`}
      style={{color: 'inherit', textDecoration: 'inherit'}}
    >
      <EachTrendVideoContainer>
        <EachTrendImage src={thumnailUrl} />
        <EachTrendText>
          <h5>{title}</h5>
          <p>{channel.name}</p>
          <EachTrendVideoContainer>
            <p>{viewCount}</p>
            <p>{publishedAt}</p>
          </EachTrendVideoContainer>
        </EachTrendText>
      </EachTrendVideoContainer>
    </Link>
  )
}

export default EachTrendVideo
