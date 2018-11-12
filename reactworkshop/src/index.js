import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import App from './App'

const movieAppState = {
    movies: [],
    count: ""
}

const reducer = function (state = movieAppState, action) {
    switch (action.type) {
        case "ADD_MOVIES": {
            const movies = action.movieData
            return { ...state, movies, count: movies.length }
        }
        case "CHANGE_USERNAME": {
            return { ...state, username: action.username }
        }
        default: {
            return state
        }
    }

}

const store = createStore(reducer)


// function TodoList(props) {
//     return (
//         <ul>
//             {props.todos.map((todo) => {
//                 return <li key={todo}>{todo}</li>
//             })
//             }
//         </ul>
//     )
// }


class AppContainer extends Component {
    render() {
        return (
            <Provider store={store} >
                <App></App>
            </Provider >
        )
    }


}



ReactDOM.render(<AppContainer></AppContainer>, document.getElementById('root'))

store.dispatch({ type: "INITAL" })
store.subscribe(() => {
    console.log('Store changes ')
})
window.store = store