import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'
import '../styling/about.css'

export class About extends Component {
    render() {
        return (
            <div>
                <Container fluid className='about_container'>
                    <Header as='h2'>About Bonne Nuit</Header>
                    <p id='about_paragraph'>
                        Bonne Nuit, meaning "good night" or "have a good night" in French, is designed to take care of the age old question, "what are we going to watch"? This app works by having two people accept a friend request and after picking the streaming platform and going through the choices... whichever they both match on is what they watch. Future improvements to the site will include food options as well, based on their location after inputting their zipcode. The same concept will apply, the restaurant that gets two confirmed yeses will be the one that gets chosen. A Hail Mary random button option will take the worry and effort away for both parties. 
                    </p>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
