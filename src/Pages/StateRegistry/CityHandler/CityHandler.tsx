import { connect } from 'react-redux'
import './CityHandler.css'

const CityHandler = (props:any) => {
    console.log(props)
    return (
        <div className="city-handler">
            
        </div>
    )
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityHandler)
