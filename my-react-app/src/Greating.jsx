import PropTypes from 'prop-types'

function Greating(props){
    
    if(props.isl){
        return(
            <h1 className="welcome">welcome {props.user}</h1>
        )
    }else{
        return(
            <h1 className="welcome">please login</h1>
        )
    }
}

Greating.propTypes = {
    isl: PropTypes.bool,
    user: PropTypes.string,
}

export default Greating
