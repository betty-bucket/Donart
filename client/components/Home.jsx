import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { getArt } from '../api'
import CarouselArt from './CarouselArt'
import { Slide } from 'react-slideshow-image'
import Footer from './Footer'

export default function Home(props) {
  console.log('TEST')
  const [artworks, setArtworks] = useState({
    artworks: [],
  })
  const [shuffledArtworks, setShuffledArtworks] = useState([])
  useEffect(() => {
    getArt()
      .then((res) => {
        console.log('res:', res)
        setArtworks(res)
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])
  console.log('HEA', artworks)
  console.log
  function shuffle(array) {
    var currentIndex = array.length
    var temporaryValue
    var randomIndex

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  return (
    <div className='home'>
      <div className='aboutUsHome'>
        <div className='aboutUsImage'>
          <Slide duration={5000}>
            <div className='firstImage'>
              <img
                src='https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg'
                alt=''
              />
            </div>
            <div className='secondImage'>
              <img
                src='https://www.artfindnz.co.nz/wp-content/uploads/2017/03/SEABED-FINAL-SIG.jpg'
                alt=''
              />
            </div>
          </Slide>
        </div>
      </div>
      <div className='artworkDisplay'>
        <div className='displayTitle'>
          <hr />
          <h2>Artworks</h2>

          <hr />
        </div>
        <div className='artworkCarousel'>
          {artworks.artworks.slice(3, 8).map((artwork) => {
            return <CarouselArt art={artwork} key={artwork.id} />
          })}
        </div>
      </div>
      <div className='successDisplay'>
        <div className='successTitle'>
          <hr />
          <h2>Success stories</h2>
          <hr />
        </div>
        <div className='successBody'>
          <div className='leftSuccess'>
            <div className='successText'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas facilis minima distinctio incidunt perferendis illo in
                tempore est sequi provident quod aliquam cum aperiam repellendus
                magnam, unde, illum neque. Magni?
              </p>
            </div>
            <div className='successProfile'>
              <div className='successProfileName'>
                <h2>-Lewis Pakoti</h2>
              </div>
              <div className='successProfileImage'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg/1200px-Andrzej_Person_Kancelaria_Senatu.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='rightSuccess'>
            <div className='successText'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas facilis minima distinctio incidunt perferendis illo in
                tempore est sequi provident quod aliquam cum aperiam repellendus
                magnam, unde, illum neque. Magni?
              </p>
            </div>
            <div className='successProfile'>
              <div className='successProfileName'>
                <h2>-Lewis Pakoti</h2>
              </div>
              <div className='successProfileImage'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg/1200px-Andrzej_Person_Kancelaria_Senatu.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
