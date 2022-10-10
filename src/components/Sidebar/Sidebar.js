import {Component} from 'react'
import {AiFillHome, AiOutlineFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {Link} from 'react-router-dom'
import SideContainer, {
  SideTop,
  SideHome,
  SideChooseText,
  SideSocialImages,
  SideSocialEachImage,
} from './SidebarStyled'
import Header from '../Header/Header'
import ColorContext from '../Context/ColorContext'

class Sidebar extends Component {
  render() {
    return (
      <ColorContext.Consumer>
        {value => {
          const {activeColor} = value
          return (
            <div>
              {/* <Header /> */}
              <SideContainer outline={activeColor}>
                <SideTop outline={activeColor}>
                  <Link
                    to="/"
                    style={{color: 'inherit', textDecoration: 'inherit'}}
                  >
                    <SideHome>
                      <AiFillHome />
                      <SideChooseText>Home</SideChooseText>
                    </SideHome>
                  </Link>
                  <Link
                    to="/trending"
                    style={{color: 'inherit', textDecoration: 'inherit'}}
                  >
                    <SideHome>
                      <AiOutlineFire />
                      <SideChooseText>Trending</SideChooseText>
                    </SideHome>
                  </Link>
                  <Link
                    to="/gaming"
                    style={{color: 'inherit', textDecoration: 'inherit'}}
                  >
                    <SideHome>
                      <SiYoutubegaming />
                      <SideChooseText>Gaming</SideChooseText>
                    </SideHome>
                  </Link>
                  <Link
                    to="/saved-videos"
                    style={{color: 'inherit', textDecoration: 'inherit'}}
                  >
                    <SideHome>
                      <MdPlaylistAdd />
                      <SideChooseText>Saved Videos</SideChooseText>
                    </SideHome>
                  </Link>
                </SideTop>
                <div>
                  <p>CONTACT US</p>
                  <SideSocialImages>
                    <SideSocialEachImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <SideSocialEachImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <SideSocialEachImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </SideSocialImages>
                  <p>Enjoy! Now to see your channels and recommendations! </p>
                </div>
              </SideContainer>
            </div>
          )
        }}
      </ColorContext.Consumer>
    )
  }
}

export default Sidebar
