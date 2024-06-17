import './Players.css'
import React, { Component } from 'react'

export default class Players extends Component {
  render() {
    return (
      <div className='container' >
        <div className='column' >
            <div className='card' >
                <img src='assets/images/cr.jpg' alt='1' />
                <h3>Cristiano Ronaldo</h3>
                <p className='title' >Manchester United</p>
                <p><button>Detail</button></p>
            </div>
        </div>

        <div className='column' >
            <div className='card' >
                <img src='assets/images/kante.jpg' alt='2' />
                <h3>Kante</h3>
                <p className='title' >Chelsea</p>
                <p><button>Detail</button></p>
            </div>
        </div>

        <div className='column' >
            <div className='card' >
                <img src='assets/images/messi.jpg' alt='3' />
                <h3>Messi</h3>
                <p className='title' >PSG</p>
                <p><button>Detail</button></p>
            </div>
        </div>

        <div className='column' >
            <div className='card' >
                <img src='assets/images/neymar.jpg' alt='4' />
                <h3>Neymar</h3>
                <p className='title' >PSG</p>
                <p><button>Detail</button></p>
            </div>
        </div>

        <div className='column' >
            <div className='card' >
                <img src='assets/images/kane.jpg' alt='5' />
                <h3>Kane</h3>
                <p className='title' >Tottemham</p>
                <p><button>Detail</button></p>
            </div>
        </div>

        <div className='column' >
            <div className='card' >
                <img src='assets/images/haaland.jpg' alt='6' />
                <h3>Haaland</h3>
                <p className='title' >Manchester City</p>
                <p><button>Detail</button></p>
            </div>
        </div>
      </div>
    )
  }
}
