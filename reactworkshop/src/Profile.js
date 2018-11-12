
import React from 'react'
import { connect } from 'react-redux'

function ProfileComponent(props) {
    console.log(props)
    return (
        <h1>Welcome : {props.username} </h1>
    )
}

// Selector
const profileState = function (state) {
    return {
        username: state.username
    }
}

const Profile = connect(profileState, null)(ProfileComponent)

export default Profile