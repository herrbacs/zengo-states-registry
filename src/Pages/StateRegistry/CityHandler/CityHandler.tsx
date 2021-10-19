import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCities } from '../../../Redux/City/cityActions'
import './CityHandler.css'

type CityHandlerProps = {
    selectedState: Object,
    fetchCities: Function
}

const CityHandler = (props: any) => {
    console.log(props)

    useEffect(() => {
        props.fetchCities(props.selectedState.id)
    }, [props.selectedState])

    return (
        <div className="city-handler">
            <div className="city-handler-header">
                <span className="city-handler-header-title">Megye</span>
                <span className="city-handler-header-current-state">{props.selectedState.name}</span>
            </div>
            <div></div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        cities: state.cities
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchCities: (stateId: number) => dispatch(fetchCities(stateId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityHandler)
