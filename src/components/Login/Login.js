import {Component} from 'react'
import Cookies from 'js-cookie'
import ColorContext from '../Context/ColorContext'

import LoginContainer, {
  FormContainer,
  FormLogo,
  FormLogin,
  LoginFormInput,
  FormTop,
} from './Styled'

class Login extends Component {
  state = {
    loginUser: '',
    loginPassword: '',
    errorText: '',
    passwordType: 'password',
  }

  loginnamechanged = event => {
    this.setState({loginUser: event.target.value})
  }

  loginpasswordchange = event => {
    this.setState({loginPassword: event.target.value})
  }

  changePasswordType = event => {
    const {passwordType} = this.state
    console.log('in password type function')
    if (passwordType === 'password') {
      this.setState({passwordType: 'text'})
    } else {
      this.setState({passwordType: 'password'})
    }
  }

  loginSubmitted = async event => {
    event.preventDefault()
    const {loginUser, loginPassword} = this.state
    console.log('form submitted')
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: loginUser, password: loginPassword}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const userdata = await fetch(url, options)
    const data = await userdata.json()
    if (userdata.ok === true) {
      console.log('user logged in')
      console.log(data)
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorText: data.error_msg})
    }
  }

  render() {
    console.log(LoginContainer)
    const {loginUser, loginPassword, errorText, passwordType} = this.state
    console.log(passwordType)
    return (
      <ColorContext.Consumer>
        {value => {
          const {activeColor} = value
          console.log(activeColor)
          return (
            <LoginContainer outline={activeColor}>
              <form onSubmit={this.loginSubmitted}>
                <FormContainer outline={activeColor}>
                  <FormTop>
                    <FormLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      className="form_logo"
                      alt="website logo"
                    />
                  </FormTop>
                  <label htmlFor="user_id">Username</label>
                  <LoginFormInput
                    type="text"
                    placeholder="username"
                    className="login_form_input"
                    id="user_id"
                    onChange={this.loginnamechanged}
                  />
                  <label htmlFor="password_id">Password</label>
                  <LoginFormInput
                    type={passwordType}
                    placeholder="password"
                    className="login_form_input"
                    id="password_id"
                    onChange={this.loginpasswordchange}
                  />
                  <div className="">
                    <input
                      type="checkbox"
                      id="login_checkbox"
                      onChange={this.changePasswordType}
                    />
                    <label htmlFor="login_checkbox">Show Password</label>
                  </div>
                  <p>{errorText}</p>
                  <FormLogin type="submit">Login</FormLogin>
                </FormContainer>
              </form>
            </LoginContainer>
          )
        }}
      </ColorContext.Consumer>
    )
  }
}

export default Login
