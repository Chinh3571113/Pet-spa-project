import './Navagition.css'
import React, { Component } from 'react'

export default class Navagition extends Component {
  render() {
    return (
      <div className='header' >
        <nav>
            <ul>
                <li><a className='active' href='#home' >Home</a></li>
                <li><a className='link' href='#news' >News</a></li>
                <li><a  href='#about' >About</a></li>
                <li><a  href='#contact' >Contact</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}
