import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isPasswordFound: true,
    isUserPassFound: true,
    isUserFound: true,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccess = () => {
    const {isUserFound} = this.state
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccess()
    }
    if (username.length === 0) {
      this.setState(prevState => ({isUserFound: !prevState.isUserFound}))
    } else if (password.length === 0) {
      this.setState(prevState => ({
        isPasswordFound: !prevState.isPasswordFound,
      }))
    } else if (username !== password) {
      this.setState(prevState => ({
        isUserPassFound: !prevState.isUserPassFound,
      }))
    }
  }

  render() {
    const {
      username,
      password,
      isPasswordFound,
      isUserPassFound,
      isUserFound,
    } = this.state
    return (
      <>
        <div className="login-bg">
          <img
            className="login-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
            alt="website login"
          />
          <form onSubmit={this.onSubmitForm}>
            <img
              className="login-img-mini"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
              alt="website logo"
            />
            <div className="input-row">
              <label htmlFor="username">USERNAME</label>
              <input
                onChange={this.onChangeUsername}
                id="username"
                type="text"
                value={username}
                placeholder="Username"
              />
            </div>
            <div className="input-row">
              <label htmlFor="password">PASSWORD</label>
              <input
                onChange={this.onChangePassword}
                id="password"
                type="password"
                value={password}
                placeholder="Password"
              />
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
            {isPasswordFound === false ? (
              <p className="fdjlk">Password didn't match</p>
            ) : (
              ''
            )}
            {isUserFound === false ? (
              <p className="fdjlk">Username didn't match</p>
            ) : (
              ''
            )}
            {isUserPassFound === false ? (
              <p className="fdjlk">Username and Password didn't match </p>
            ) : (
              ''
            )}
          </form>
        </div>
      </>
    )
  }
}

export default LoginForm
