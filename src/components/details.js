import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';  // added to create useful fixture which allow to come back to main page 


class Details extends Component {

    // null because we don't have nothing on the start 
    state = {
        club: null
    }

    // lifecycle method 
    componentDidMount() {
        const { id } = this.props.match.params;  // to get id
        axios.get('http://127.0.0.1:8000/api/clubs/' + id + '/', {
            headers: { Authorization: 'Token 7af2fb65236e511db97f2c6cebf0333ebfe30b93' }
        }).then(
            res => {
                this.setState({ club: res.data })
            }
        ).then(
            err => {
                console.log('error', err)
            }
        )
    }

    render() {
        const baseUrl = 'http://127.0.0.1:8000'
        return (
            <div>
                <h1>More information about Club</h1>
                { this.state.club ? (  // body of details component 
                    <div>
                        <img src={baseUrl + this.state.club.crest} width='200' alt='club crest' />
                        <h2>{this.state.club.name} ({this.state.club.nickname})</h2>
                        <h3>Founded in: {this.state.club.found_date} </h3>
                        <p>{this.state.club.description}</p>
                        <h3>Stadium: {this.state.club.stadium} ({this.state.club.stadium_capacity} slots)</h3>
                        <h3>First Division/Premier League winners: {this.state.club.number_of_titles} </h3>
                        <Link to={'/'}>Return to home page</Link>
                    </div>

                ) : null}

            </div>
        );
    }
}

export default Details;
