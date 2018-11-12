
import React from 'react'
import { connect } from 'react-redux'
import Counter from './MovieCounter'

function MovieList(props) {
    console.log(props)
    return (
        <div>

             <Counter></Counter>

            {
                props.movies.map((movie) => {

                    return (
                        <div key={movie.imdbID} className="box">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image ">
                                        <img
                                            className="imageMovie"
                                            src="https://m.media-amazon.com/images/M/MV5BYWNkYmFiZjUtYmI3Ni00NzIwLTkxZjktN2ZkMjdhMzlkMDc3XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg" alt="Image" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p><strong>Name: {movie.Title}</strong></p>
                                        <p><strong>Year: {movie.Year}</strong></p>
                                        <a className="button is-link is-outlined">View</a>
                                    </div>

                                </div>
                            </article>
                        </div>
                    )

                })
            }


        </div>
    )
}

// Selector
const mapStateToProps = function (state) {
    return {
        movies: state.movies
    }
}

const wrappedMovieListComponent = connect(mapStateToProps, null)(MovieList)

export default wrappedMovieListComponent