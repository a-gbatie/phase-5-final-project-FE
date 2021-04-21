import React from 'react'
import HomePage from './HomePage'
import '../styling/loginSignup.css'

const API = 'http://localhost:3000'

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    showLogin: true
  };

  handleChange = (e) => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = (loggedin) => {
    this.setState({
      showLogin: loggedin
    })
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
        this.props.handleAuthResponse(data)
      })
      // .catch(console.log)
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
      .then((data) => this.props.handleAuthResponse(data))
      // .catch(console.log
  }

  renderHomePage = () => <HomePage  />
  render() {
    console.log(this.state.showLogin)
    
    return (
      
      //   <div className='Login'>
      //     <form onSubmit={(e) => this.props.handleLoginOrSignup(e, this.state)}>
      //       <label>Username</label>
      //       <input
      //         type='text'
      //         name='username'
      //         value={this.state.username}
      //         onChange={this.handleChange}
      //       />
      //       <br />
      //       <label>Password</label>
      //       <input
      //         type='password'
      //         name='password'
      //         value={this.state.password}
      //         onChange={this.handleChange}
      //       />
      //       {this.props.showName && 
      //       (<><label>Name</label>
      //       <input
      //       type='text'
      //       name='name'
      //       // value={this.state.password}
      //       onChange={this.handleChange}
      //     /></>)
      //     }
      //       <br />
      //       <input type='submit' value='Submit' />
      //     </form>
      //   </div>
      
      <div id='loginBG'>
        <header>
          <HomePage  />
        </header>
        <div className='form'>
          <div className='tab-header'>
            <div className={this.state.showLogin && 'active'} onClick={() => this.handleClick(true)}>Login</div>
            <div className={!this.state.showLogin && 'active'} onClick={() => this.handleClick(false)}>Sign Up</div>
          </div>
          <div className='tab-content'>
            <div className={this.state.showLogin ? 'tab-body active' : 'tab-body'}>
          <form onSubmit={(e) => this.handleSignup(e, this.state)}>
              <div className='form-element'>
                <input type='text' name='name' placeholder='Enter Name' onChange={this.handleChange}></input>
              </div>
              <div className='form-element'>
                <input type='text' name='username' placeholder='Enter Username' value={this.state.username} onChange={this.handleChange}></input>
              </div>
              <div className='form-element'>
                <input type='password' name='password' placeholder='Enter Password' value={this.state.password} onChange={this.handleChange}></input>
              </div>
              <div className='form-element'>
                <button>Sign Up</button>
              </div>
            </form>
            </div>

            <div className={!this.state.showLogin ? 'tab-body active' : 'tab-body'}>
            <form onSubmit={(e) => this.handleLogin(e, this.state)}>
              <div className='form-element'>
                <input type='text' name='username' placeholder='Enter Username' onChange={this.handleChange}></input>
              </div>
              <div className='form-element'>
                <input type='password' name='password' placeholder='Enter Password' onChange={this.handleChange}></input>
              </div>
              <div className='form-element'>
                <button>Login</button>
              </div>
            </form>
            </div>
          </div>
      </div>
      </div>

    )
  }
}

export default Login;