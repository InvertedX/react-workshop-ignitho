
import React from 'react'
import { connect } from 'react-redux'

function MovieCounter(props) {
    console.log(props)
    return (
        <div>
            <p>{props.count}</p>
        </div>
    )
}

// Selector
const mapStateToProps = function (state) {
    return {
        count: state.count
    }
}

const MovieCounterWrapped = connect(mapStateToProps, null)(MovieCounter)

export default MovieCounterWrapped