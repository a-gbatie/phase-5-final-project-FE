import React, { Component } from 'react'
// import Card from './Card.js'
import { Image } from 'semantic-ui-react'

const API = 'http://localhost:3000'

export default class PlatformCollection extends Component {
    state = {
        platforms: []
    }


    componentDidMount() {
        const token = localStorage.token
        fetch(API + '/platforms', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        )
            .then((res) => res.json())
            .then((data) => {
                this.setState({ platforms: data })
            })
    }

    render() {

        return (
            <div>
                <Image.Group size='small'>
                    {this.state.platforms.map(platform => (
                        <Image alt={platform.company} src={platform.image} size='medium'
                            onClick={() => this.props.history.push(`/platforms/${platform.company}`)}
                        />))
                    }
                </Image.Group>

            </div>
        )
    }

}
