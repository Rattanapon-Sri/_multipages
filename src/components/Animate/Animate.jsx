import { react, useState, useEffect } from 'react'
import './Animate.css' // CSS ที่จำเป็น
import 'bootstrap/dist/css/bootstrap.min.css'

import basketball from '../../assets/basketball.png'
import football from '../../assets/football.png'
import volleyball from '../../assets/volleyball.png'
import human from '../../assets/human.png'
import cartoon from '../../assets/cartoon.png'
import logo from '../../assets/logo.png'

const fieldWidth = 765
const fieldHeight = 400
const ballSize = 200

const Animate = () => {
  const [running, setRunning] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [vX, setVX] = useState(5)
  const [vY, setVY] = useState(5)
  const [goRight, setGoRight] = useState(true)
  const [goDown, setGoDown] = useState(true)
  const [imageType, setImageType] = useState('none')

  const maxX = fieldWidth - ballSize - 2
  const maxY = fieldHeight - ballSize - 2

  const getRandomSpeed = (min, max) => Math.random() * (max - min) + min

  const calculate = () => {
    let newX = x
    let newY = y
    let newRotation = rotation

    if (goRight) {
      newX += vX
      if (newX >= maxX) {
        setGoRight(false)
        newX = maxX - (newX - maxX)
        setVX(getRandomSpeed(2, 7))
      }
    } else {
      newX -= vX
      if (newX <= 0) {
        setGoRight(true)
        newX = -newX
        setVX(getRandomSpeed(2, 7))
      }
    }

    if (goDown) {
      newY += vY
      if (newY >= maxY) {
        setGoDown(false)
        newY = maxY - (newY - maxY)
        setVY(getRandomSpeed(2, 7))
      }
    } else {
      newY -= vY
      if (newY <= 0) {
        setGoDown(true)
        newY = -newY
        setVY(getRandomSpeed(2, 7))
      }
    }

    newRotation += goRight ? vX : -vX
    setX(newX)
    setY(newY)
    setRotation(newRotation)
  }

  const process = () => {
    if (running) {
      calculate()
    }
  }

  useEffect(() => {
    const interval = setInterval(process, 25)
    return () => clearInterval(interval)
  }, [running, x, y, rotation])

  const toggleRun = () => {
    setRunning((prev) => !prev)
  }

  const changeImage = (type) => {
    setImageType(type)
  }

  const imageMap = {
    none: 'none',
    basketball: basketball,
    football: football,
    volleyball: volleyball,
    human: human,
    cartoon: cartoon,
    logo: logo,
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ') {
        toggleRun()
      }

      const types = [
        'none',
        'basketball',
        'football',
        'volleyball',
        'human',
        'cartoon',
        'logo',
      ]
      const index = parseInt(event.key)
      if (!isNaN(index) && index >= 0 && index < types.length) {
        changeImage(types[index])
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className='animate-container'>
      <div
        id='field'
        style={{
          width: fieldWidth,
          height: fieldHeight,
          position: 'relative',
          border: '1px solid black',
        }}
      >
        <div
          id='ball'
          style={{
            width: ballSize,
            height: ballSize,
            position: 'relative',
            left: x,
            top: y,
            backgroundImage:
              imageType !== 'none' ? `url(${imageMap[imageType]})` : 'none',
            backgroundSize: '120%',
            transform: `rotate(${rotation}deg)`,
          }}
        />
      </div>

      <button
        id='run'
        onClick={toggleRun}
        className={`btn ${
          running ? 'btn-danger bi-pause' : 'btn-success bi-play'
        }`}
      >
        {running ? 'Pause' : 'Run'}
      </button>
      <span>
        <button
          id='button-images'
          onClick={() => changeImage('none')}
          className='btn btn-outline-secondary'
        >
          None
        </button>
        <button
          id='button-images'
          onClick={() => changeImage('basketball')}
          className='btn btn-outline-warning'
        >
          Basketball
        </button>
        <button
          id='button-images'
          onClick={() => changeImage('football')}
          className='btn btn-outline-info'
        >
          Football
        </button>
        <button
          id='button-images'
          onClick={() => changeImage('volleyball')}
          className='btn btn-outline-primary'
        >
          Volleyball
        </button>
        <button
          id='button-images'
          onClick={() => changeImage('human')}
          className='btn btn-outline-success'
        >
          Human
        </button>
        <button
          id='button-images'
          onClick={() => changeImage('cartoon')}
          className='btn btn-outline-light'
        >
          Cartoon
        </button>
        <button
          id='button-images'
          onClick={() => changeImage('logo')}
          className='btn btn-outline-danger'
        >
          Logo
        </button>
      </span>
      <br />
      <br />
    </div>
  )
}

export default Animate
