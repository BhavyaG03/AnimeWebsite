import React from 'react'

const Card = ({item}) => {
  return (
    <div className='card'>
        <div className="anime-img">
            <img src={item.img} alt="" className="anime" />
            <div className="details">
                <p className="title">{item.title}</p>
                <p className="ep">{item.ep}</p>
            </div>
        </div>
    </div>
  )
}

export default Card