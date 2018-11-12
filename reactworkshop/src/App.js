import React, { Component } from 'react'
import MovieList from './MovieList'
import { connect } from 'react-redux'
import Counter from './MovieCounter'

class App extends Component {
    query = ''
    state = {

    }


    inputChangeListner(event) {
        this.query = event.target.value
    }

    search() {
        fetch(`http://www.omdbapi.com/?apikey=db8b42f2&&s=` + this.query)
            .then((response) => {
                response.json().then((movieResponse) => {
                    console.log(movieResponse)
                    this.props.setMovieList(movieResponse.Search)
                })
            })
    }


    render() {
        return (
            <div className="container">
                <input onChange={this.inputChangeListner.bind(this)} className="input is-rounded" type="text" placeholder="Rounded input"></input>
                <button onClick={this.search.bind(this)} className="button is-link is-outlined">Search</button>
                <Counter></Counter>
                <div className="container">

                    <div className="column is-two-thirds">
                        <MovieList></MovieList>
                    </div>
                </div>

            </div>
        )
    }


}


const mapStateToProps = function (state) {
    return {

    }
}


const mapDispatchToProps = function (dispatch) {
    return {
        setMovieList: (moviedata) => {
            console.log(moviedata)
            dispatch({ type: 'ADD_MOVIES', movieData: moviedata })
        }
    }
}

const wrappedAppComponent = connect(mapStateToProps, mapDispatchToProps)(App)

export default wrappedAppComponent