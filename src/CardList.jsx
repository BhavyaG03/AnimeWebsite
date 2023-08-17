import React from 'react';
import Card from './Card';
import List from './List';

const CardList = () => {
  const list=[
    {
      id:1,
      img:'https://gogocdn.net/images/anime/One-piece.jpg',
      title:'One Piece',
      ep:'Episode 1072'
    },
    {
      id:2,
      img:'https://gogocdn.net/cover/go-go-vehicle-zoo-1681007903.png',
      title:'Go! Go! Vehicle Zoo',
      ep:'Episode 16'
    },
    {
      id:3,
      img:'https://gogocdn.net/cover/hirogaru-sky-precure.png',
      title:'Hirogaru Sky! Precure',
      ep:'Episode 28'
    },
    {
      id:4,
      img:'https://gogocdn.net/cover/ayaka-1688151477.png',
      title:'Ayaka',
      ep:'Episode 7'
    },{
      id:5,
      img:'https://gogocdn.net/cover/edens-zero-2nd-season-1680576231.png',
      title:'Edens Zero 2nd Season',
      ep:'Episode 20'
    },{
      id:6,
      img:'https://gogocdn.net/cover/hibike-euphonium-ensemble-contest-hen-1691859751.png',
      title:'Hibike! Euphonium: Ensemble Contest-hen',
      ep:'Episode 1'
    },{
      id:7,
      img:'https://gogocdn.net/cover/ryza-no-atelier-tokoyami-no-joou-to-himitsu-no-kakurega-1688156957.png',
      title:'Ryza no Atelier: Tokoyami no Joou to Himitsu no Kakurega',
      ep:'Episode 7'
    },{
      id:8,
      img:'https://gogocdn.net/cover/temple-1688157898.png',
      title:'Temple',
      ep:'Episode 6'
    },{
      id:9,
      img:'https://gogocdn.net/cover/horimiya-piece.png',
      title:'Horimiya: Piece',
      ep:'Episode 7'
    },{
      id:10,
      img:'https://gogocdn.net/cover/bleach-sennen-kessen-hen-ketsubetsu-tan-1688151974.png',
      title:'Bleach: Sennen Kessen-hen - Ketsubetsu-tan',
      ep:'Episode 6'
    },{
      id:11,
      img:'https://gogocdn.net/cover/liar-liar-1688155730.png',
      title:'Liar Liar',
      ep:'Episode 7'
    },{
      id:12,
      img:'https://gogocdn.net/cover/level-1-dakedo-unique-skill-de-saikyou-desu-1687313855.png',
      title:'Level 1 dakedo Unique Skill de Saikyou desu',
      ep:'Episode 6'
    }
  ]
    
  return (
    <div className='parent-container'>
    <div className='main-container'>
        <div className='head-line'>
            <div className="left-content">
            <img src="https://img.icons8.com/?size=512&id=u7nELbXWe1bx&format=png" alt="Placeholder Image" className="naruto" />
                <a className='release'>RECENT RELEASE</a>
                <div className="vertical-line"></div>
                <a href="" className="dub">DUB</a>
                <div className="vertical-line"></div>
                <a href="" className="chinese">CHINESE</a>
            </div>
            <div className="numbers">
                <a href="" className="1">1</a>
                <a href="" className="2">2</a>
                <a href="" className="3">3</a>
                <a href="" className="4">4</a>
                <a href="" className="5">5</a>
            </div>
        </div>
        <div className="card-container">
        {list.map((item)=>{
         return <Card item={item} key={item.id}></Card>
        })}</div>
    </div>
    <div className="side-bar">
      <div className="horizontal-line"></div>
      <div className='head-line'>
        <img src="https://img.icons8.com/?size=512&id=jSzptZca0mlE&format=png" alt="" className="sasuke" />
        <a href="" className="day">DAY</a>
        <div className="vertical-line"></div>
        <a href="" className="week">WEEK</a>
        <div className="vertical-line"></div>
        <a href="" className="month">MONTH</a>
      </div>
      <div className="list-anime">
      <ol>
    {list.map((ele)=>{
      return <List item={ele} key={ele.id}></List>
    })}
    </ol>
    </div>
    </div>
    </div>
  )
}

export default CardList;
