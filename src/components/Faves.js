import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import MediaCard from './MediaCard'
import '../styling/faves.css'

export class Faves extends Component {
    renderFaves = () => {
        return this.props.faves.map(faves => <MediaCard media={faves} key={faves.id} />)
    }
    render() {
        const { media } = this.props
        return (
            <div>
                <div className="collection-div">
                    {/* {this.renderFaves()}  */}
                    <Card>
                        <Image src={media?.image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{media?.title}</Card.Header>
                        </Card.Content>
                    </Card>
                </div>
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
