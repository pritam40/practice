import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>welcome to homepage</h1>
            <Link to="/Form">Go to form</Link>
        </div>
    )
}

export default Home
