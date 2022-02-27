import React from 'react'
import Card from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'


const cards = [
    {
        id: 1,
        title: 'web',
        image: image1,
        url: 'http://jguevara912.com'
    },
    {
        id: 2,
        title: 'blog',
        image: image2,
        url: 'http://blog.jguevara912.com'
    },
    {
        id: 3,
        title: 'youtube',
        image: image3,
        url: 'http://youtube.jguevara912.com'
    }
]


function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100 ">
            <div className="row container">
                {
                    cards.map( card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url}/>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default Cards