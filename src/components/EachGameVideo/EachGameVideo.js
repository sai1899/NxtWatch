import {Link} from 'react-router-dom'

import EachGameVideoContainer, {
  EachGameImage,
  EachGameText,
} from './EachGameVideoStyled'

const EachGameVideo = props => {
  const {allGaming} = props
  const {id, thumnailUrl, title, viewCount} = allGaming
  console.log(allGaming)
  return (
    // <h1>Hello</h1>
    <Link
      to={`/videos/${id}`}
      style={{color: 'inherit', textDecoration: 'inherit'}}
    >
      <EachGameVideoContainer>
        <EachGameImage src={thumnailUrl} />
        <p>{title}</p>
        <p>{`${viewCount} Watching Worldwide`}</p>
      </EachGameVideoContainer>
    </Link>
  )
}

export default EachGameVideo
