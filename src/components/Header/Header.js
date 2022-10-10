import {Component} from 'react'
import {BsMoon, BsSun} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
// import {withRouter} from 'react-routers
import TopHeaderContainer, {
  HeaderLogo,
  HeaderLogout,
  HeaderProfileLogo,
  HeaderTopRight,
} from './HomeStyled'
import ColorContext from '../Context/ColorContext'

const Header = props => {
  const clickLogout = () => {
    console.log('hello in clicklogout')
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ColorContext.Consumer>
      {value => {
        const {activeColor, changeColor} = value
        return (
          <TopHeaderContainer>
            <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
              <HeaderLogo
                src={
                  !activeColor
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <HeaderTopRight>
              <button onClick={changeColor} data-testid="theme">
                {activeColor ? <BsMoon /> : <BsSun />}
              </button>
              <HeaderProfileLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <HeaderLogout outline={activeColor}>Logout</HeaderLogout>
                }
                className="popup-content"
              >
                {close => (
                  <div>
                    <p>Are you sure, you want to logout</p>
                    <button onClick={() => close()}>Cancel</button>
                    <button onClick={clickLogout}>Confirm</button>
                  </div>
                )}
              </Popup>
            </HeaderTopRight>
          </TopHeaderContainer>
        )
      }}
    </ColorContext.Consumer>
  )
}

export default Header
