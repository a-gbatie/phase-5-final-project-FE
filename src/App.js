import './App.css'
import React from 'react'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Media from './components/Media'
import Card from './components/MediaCard'
import Faves from './components/Faves'
import About from './components/About'
import { Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import PlatformCollection from './components/PlatformCollection'

const API = 'http://localhost:3000'

class App extends React.Component {
  // state = {
  //   user: {},
  //   error: false,
  //   faves: []
  // }

  // <h1>Bonne Nuit</h1>

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
        }
      })
  }

  handleAuthResponse = (data) => {
    // console.log(data)
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

  
  handleLogout = () => {
    localStorage.clear()
    this.props.setUser({media: []})
  }

  renderLoginPage = () => <Login handleAuthResponse={this.handleAuthResponse} />
  // renderSignUpPage = () => <Login handleLoginOrSignup={this.handleSignup} showName={true}/>
  
  renderPlatforms = (routerProps) => <PlatformCollection {...routerProps} />
  renderMediaPage = (routerProps) => <Media {...routerProps}/>
  renderCardPage = (routerProps) => <Card {...routerProps}/>
  renderFaves = (routerProps) => <Faves {...routerProps}/>
  renderAbout = (routerProps) => <About {...routerProps}/>

  render() {
    const { user} = this.props
    return (
      <div className="App">
        <NavBar user={user} handleLogout={this.handleLogout} />
        {/* <HomePage  /> */}
          <Switch>
            <Route path='/login' render={this.renderLoginPage} />
            <Route exact path='/platforms' render={this.renderPlatforms} />
            <Route exact path='/favorites' render={this.renderFaves} />
            <Route exact path='/about' render={this.renderAbout} />
            <Route exact path='/platforms/:company' render={this.renderMediaPage} />

            {/* {!user.id && <Redirect to="/login" />} */}
            <Route exact path='/' render={this.renderHomePage} />
          </Switch>
          {/* {this.props.user.username} */}
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
