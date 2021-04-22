import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import '../styling/mediaCard.css'

export default class MediaCard extends Component {
    state = {
        clicked: true
    }

    render() {
        const {media} = this.props
        // const { title, genre, is_movie, image, release_date, network, description, starring, seasons, platform } = this.props.media
        // console.log(this.props.media?.image)
        // console.log(media)
        return (
            <Container className="media_container">
                    <div className="inner" onClick={() => this.setState({ clicked: !this.state.clicked })}>
                        <div className="card__image">
                            <img className='img' src={media?.image} alt={media?.image} fluid size='big' wrapped ui={false}/> 
                        </div> 
                        <div className="card__content"  >
                            <div className="card__title">{media?.title}</div>
                            <p className='seasons'>{media?.seasons} Season(s)</p>
                            
                            <p className="card__text">{`${media?.description}`}</p>
                            
                            <div className="card__detail">
                                <p className='starring'>Cast: {media?.starring}</p>
                                <p className='end_points'>{!media?.is_movie ? `${media?.network} · ${media?.genre}` : `${media?.release_date}`}</p>
                            </div>
                        </div>
                        
                    </div>
            </Container>
        )
    }

}