import React from 'react'
import PropTypes from 'prop-types'
import './cards.css'

function Card(props) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp w-75">
        <div className="overflow">
          <img src={props.imageSource} alt="" className="card-img-top"/>
        </div>
        <div className="card-body text-light">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint recusandae officiis ratione minus atque vel adipisci voluptatum harum tempore illo dolores totam veritatis 
            </p>
            <a href={props.url} className="btn btn-outline-secondary rounded-0" target="_blank">
                Go to this website
            </a>
        </div>
    </div>
  )
}

/**validacion*/
Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string
}

export default Card