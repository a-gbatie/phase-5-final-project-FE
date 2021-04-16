import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import Media from './Media'

export default class MediaCard extends Component {
    state = {
        clicked: true
    }

    render() {
        const {media} = this.props
        // const { title, genre, is_movie, image, release_date, network, description, starring, seasons, platform } = this.props.media
        // console.log(this.props.media?.image)
        console.log(media)
        return (

            <div className="card" onClick={() => this.setState({ clicked: !this.state.clicked })}>
                {this.state.clicked ? <img src={media?.image} alt={media?.image} fluid size='big' wrapped ui={false}  className="card__image" /> : (
                <div className="card__content"  >
                    <div className="card__title">{media?.title}</div>
                    
                    <p className="card__text">{ `${media?.title}, ${media?.description}, ${media?.release_date}`}</p>
                    
                    <div className="card__detail">
                        <p>{media?.starring}</p>
                        <p>{!media?.is_movie ? `${media?.network}, ${media?.seasons}, ${media?.genre}` : `${media?.release_date}`}</p>
                    </div>
                </div>
                )}
            </div>

            // <div>
            //     <Card>
            //         <Image src= {this.props.media?.image}/>
            //         <Card.Content>
            //             <Card.Header>Daniel</Card.Header>
            //             <Card.Meta>Joined in 2016</Card.Meta>
            //             <Card.Description>
            //                 Daniel is a comedian living in Nashville.
            //             </Card.Description>
            //         </Card.Content>
            //         <Card.Content extra>
            //             <a>
            //                 <Icon name='user' />
            //             10 Friends
            //             </a>
            //         </Card.Content>
            //     </Card>
            // </div>
        )
    }


}
// "title": 'A Star is Born',
//         "genre": 'Musical',
//         "is_movie": 'true',
//         "image": 'https://cdn.shopify.com/s/files/1/1878/3879/products/N4500.jpg?v=1556036171',
//         "release_date": '2018',
//         # "network": 'Netflix Originals',
//         "description": "Hard-drinking country music star Jackson Maine discovers -- and falls in love with -- a struggling but talented singer named
//         Ally. As her career quickly takes off, Jackson starts to realize that his best days may be behind him.",
//         "starring": 'Lady Gaga, Bradley Cooper, Sam Elliot',
//         "platform": 'HBO Max'

// "title": 'Monk',
// "genre": 'Crime/Comedy',
// "is_movie": 'false',
// "image": 'https://cdn.wegotthiscovered.com/wp-content/uploads/monk-logo.jpg',
// # "release_date": 'nil'
// "network": 'usa',
// "description": "The series follows Adrian Monk, a brilliant former San Francisco detective, who now consults the police as a private consultant who battles with an obsessive-compulsive disorder.",
// "starring": 'Tony Shalhoub, Jason Gray-Stanford, Ted Levine',
// "seasons": '8',
// "platform": 'Amazon Prime'