import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import MediaCard from './MediaCard'
import { connect } from 'react-redux'

const API = 'http://localhost:3000/'

export class Media extends Component {

    state = {
        media: [],
        index: 0
    }

    componentDidMount() {
        const company = this.props.match.params.company
        const token = localStorage.token
        fetch(API + `media?platform=${company}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                this.setState({ media: data })
            })
    }
    handleLikeClick = () => {
        const {index, media}=this.state
        const token = localStorage.token
        const medium = media.slice(index, index + 1)[0]

        fetch(API + 'accepted_media', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({

                user_id: this.props.user_id,
                medium_id: medium.id
            })
        })
            .then(() => this.props.addFavorite(medium))
        this.updateIndex()
    }

    updateIndex = () => {
        const {index}=this.state
        this.setState({index: index + 1})
    }


    render() {
        // console.log(this.state.media.slice(2,3))
        // console.log(this.props)
        const {index, media}=this.state
        return (
            <div>
                
                <MediaCard media={media.slice(index, index + 1)[0]} />
                <Icon className='yes' size='huge' inverted color='teal' name='thumbs up' onClick={ this.handleLikeClick } />
                <Icon className='no' size='huge' inverted color='teal' name='thumbs down' onClick={ this.updateIndex } />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
   return { user_id: state.user.id }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavorite: (medium) => dispatch({type: 'ADD_FAVORITE', payload: medium})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Media)
