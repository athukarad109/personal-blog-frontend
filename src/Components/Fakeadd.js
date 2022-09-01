import React from 'react'
import {Link} from 'react-router-dom'

const Fakeadd = () => {
  return (
    <div>
      <h1>Only I can add here LOL</h1>
      <Link to="/add/athukarad">
        <h2 className='footer'>Click</h2>
      </Link>
    </div>
  )
}

export default Fakeadd
