import React from 'react'

const List = ({item}) => {
  return (
    <div>
            <li className="anime-li">
                <div className="anime-title">{item.title}</div>
                <div className="anime-ep">{item.ep}</div>
            </li>
    </div>
  )
}

export default List