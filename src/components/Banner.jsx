import React from 'react'
import banner from '/ss.png'

const Banner = () => {
    const img=[
        {
            imgage:banner
        }
    ]

  return (
    <div>
        <img src={banner} alt="banner" />
    </div>
  )
}

export default Banner