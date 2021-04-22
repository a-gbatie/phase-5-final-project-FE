import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './MediaCard'


const API = 'http://localhost:3000'

export class Random extends Component {
    state = {
        media: {}
    }
    componentDidMount() {
        const token = localStorage.token
        fetch(API + '/random', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
            this.setState({
                media: data
            })
      })
      }


    render() {
        console.log('hi')
        return (
            <div>

                <Card media={this.state.media}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Random)
