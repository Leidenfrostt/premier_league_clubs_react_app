import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class List extends Component {
    state = {
        clubs: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/clubs/', {
            headers: { Authorization: 'Token 7af2fb65236e511db97f2c6cebf0333ebfe30b93' }
        }).then(
            res => {
                this.setState({ clubs: res.data })
            }
        ).then(
            err => {
                console.log('error', err)
            }
        )
    }

    render() {
        return (
            <div>
                <h1 className='title' >Premier League Clubs</h1>
                <h6 className='hint'>Hint: Click on the crest to see details</h6>
                {this.state.clubs.map(club => {
                    return (
                        <Link to={'/details/' + club.id + '/'}>
                            <img key={club.id} src={club.crest} alt='club crest'
                                height='160' />
                        </Link>
                    )
                })}
            </div>
        );
    }
}

export default List;
