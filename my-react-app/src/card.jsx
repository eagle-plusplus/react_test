import pic from './assets/op.jpg'
import PropTypes from 'prop-types'

function Card(props){
    return(
        <div className="card">
            <img className="card-image" src={pic} alt="profile picture" />
            <h2 className="card-title">Name: {props.name}</h2>
            <h2 className="card-title">age: {props.age}</h2>
            <h2 className="card-title">student: {props.is ? "yes" : "no"}</h2>
            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit commodi, voluptatibus consectetur neque, laudantium illo rerum possimus, eius deserunt adipisci cupiditate animi nam! Sequi voluptates officia consectetur, possimus vero soluta!</p>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    is: PropTypes.bool
}

Card.defaultProps = {
    name: "Guest",
    age: 0,
    is: false
}// will not work

export default Card