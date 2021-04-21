import React, { Component } from 'react'
import '../styling/homePage.css'

class HomePage extends Component {
  render() {
    return(
      <div id='welcome'>
        <h2 id='hp'> Welcome to Bonne Nuit!</h2>
        <p id ='hp_p'>To start creating dates please log into your account, or create a new one with signup.</p>
      </div>
    )
  }
}

export default HomePage;