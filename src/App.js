import './App.css'
import React from 'react'
import Login from './components/Login'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Media from './components/Media'
import Card from './components/MediaCard'
import { Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import PlatformCollection from './components/PlatformCollection'

const API = 'http://localhost:3000'

class App extends React.Component {
  state = {
    user: {},
    error: false
  }

  componentDidMount() {
    const token = localStorage.token
    if (token) {
      this.persistUser(token)
    }
  }

  persistUser = (token) => {
    fetch(API + '/persist', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          const { user } = data
          this.props.setUser(user)
          localStorage.setItem('token', data.jwt)
        }
      })
  }

  handleAuthResponse = (data) => {
    console.log(data)
    if (data.user) {
      const { user } = data

      this.props.setUser(user)
      localStorage.setItem('token', data.jwt)
      this.props.history.push('/platforms')
    } else if (data.error) {
      this.setState({
        error: data.error})
    }
  }

  handleLogin = (e, userInfo) => {
    e.preventDefault()
    console.log('login', userInfo)
    fetch(API + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => this.handleAuthResponse(data))
      // .catch(console.log
  }

  handleSignup = (e, userInfo) => {
    e.preventDefault();
    
    fetch(API + '/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userInfo }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.handleAuthResponse(data)
      })
      // .catch(console.log)
  }

  handleLogout = () => {
    localStorage.clear()
    this.setState({ user: {} })
  }

  renderLoginPage = () => <Login handleLoginOrSignup={this.handleLogin} showName={false}/>
  renderSignUpPage = () => <Login handleLoginOrSignup={this.handleSignup} showName={true}/>
  renderHomePage = () => <HomePage username={this.state.user.username} />
  renderPlatforms = (routerProps) => <PlatformCollection {...routerProps} />
  renderMediaPage = (routerProps) => <Media {...routerProps}/>
  renderCardPage = (routerProps) => <Card {...routerProps}/>

  render() {
    const { user, error } = this.state
    return (
      <div className="App">
        <NavBar user={user} />
        {/* handleLogout={this.handleLogout}  */}
        

        {/* {!!error && <h1>{error}</h1>} */}
          <Switch>
            <Route path='/login' render={this.renderLoginPage} />
            <Route path='/signup' render={this.renderSignUpPage} />
            <Route exact path='/platforms' render={this.renderPlatforms} />
            {/* <Route exact path='/favorites' render={this.renderFaves} /> */}
            {/* <Route exact path='/platforms/:company' render={this.renderPlatforms} /> */}
            <Route exact path='/platforms/:company' render={this.renderMediaPage} />
            {/* <Route exact path='/platforms/:company/media' render={this.renderCardPage} /> */}
            {/* <Route exact path='/platforms/:company/tv' render={this.renderCardPage} />
            <Route exact path='/platforms/:company/movie' render={this.renderCardPage} /> */}

            {/* {!user.id && <Redirect to="/login" />} */}
            <Route exact path='/' render={this.renderHomePage} />
          </Switch>
          {this.props.user.username}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({type: 'SET_USER', payload: user})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
