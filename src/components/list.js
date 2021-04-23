import React, { Component } from 'react';
import axios from 'axios';  // added to import data from API
import { Link } from 'react-router-dom'; // added to use in render


class List extends Component {

    // created blank list for data from API
    state = {
        clubs: []
    }

    // lifecycle method 
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/clubs/', {
            headers: { Authorization: 'Token 7af2fb65236e511db97f2c6cebf0333ebfe30b93' }  // token and url from Django API
        }).then(
            res => {
                this.setState({ clubs: res.data })  // if all correct get data and save it in state
            }
        ).then(
            err => {
                console.log('error', err) // if something wrong print error
            }
        )
    }

    render() {
        return (
            <div>
                <h1 className='title' >Premier League Clubs</h1>
                <h6 className='hint'>Hint: Click on the crest to see details</h6>
                {this.state.clubs.map(club => {  // arrow function to get details after click on crest
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
