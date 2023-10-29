import React from 'react'

export default function Sidebar() {
  return (
    <div className='row'>
        <div className='card bg-secondary text-white'>
            <ul>
                <li>Ditty</li>
                <li>Home</li>
                <li>Search</li>
            </ul>
        </div>
        <div className='card bg-secondary text-white'>
            <h6 className='card-title'>Your Library</h6>
            <div className='card-body'>
                Create Playlist
            </div>
        </div>
    </div>
  )
}
