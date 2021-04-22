import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import MediaCard from './MediaCard'
import '../styling/faves.css'

export class Faves extends Component {
    renderFaves = () => {
        return this.props.faves.map(faves => (
        <Card>
            <Image src={faves.image} size='tiny' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{faves.title}</Card.Header>
            </Card.Content>
        </Card>
        ))
    }
    render() {
        return (
            <div className="collection-div">
                {this.renderFaves()} 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    faves: state.user.media
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Faves)
