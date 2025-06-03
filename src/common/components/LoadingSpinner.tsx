import React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner:React.FC = () => {
  return (
    <div>
      <div className='spinner-container'>
        <div className='spinner'></div>
      </div>
    </div>
  )
}

export default LoadingSpinner
