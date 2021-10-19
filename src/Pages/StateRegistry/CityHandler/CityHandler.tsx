import { faCheck, faCross, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { InputHTMLAttributes, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCities } from '../../../Redux/City/cityActions'
import './CityHandler.css'

type CityHandlerProps = {
    selectedState: Object,
    fetchCities: Function
}

const CityHandler = (props: any) => {

    const [selectedCity, setselectedCity] = useState({
        id: -1,
        name: ""
    })

    const toggleSelectedCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setselectedCity({
            name: e.target.value,
            id: parseInt(e.currentTarget.id)
        })
        console.log(selectedCity)
    }

    useEffect(() => {
        props.fetchCities(props.selectedState.id)
    }, [props.selectedState])

    return (
        <div className="city-handler">
            <div className="city-handler-header">
                <div className="city-handler-header-title-container">
                    <span className="city-handler-header-title">megye</span>
                </div>
                <div className="city-handler-header-current-state-container">
                    <span className="city-handler-header-current-state">{props.selectedState.name}</span>
                </div>
            </div>
            <div className="city-handler-body">
                <div className="city-handler-body-title-container">
                    <span className="city-handler-body-title">városok</span>
                </div>
                <div className="city-handler-body-form-container">
                    <form className="city-handler-body-form">
                        {
                            props.cities.cities.map((city: any) => (
                                <div className="city-handler-form-input-container">
                                    <input id={city.id}
                                        className="city-handler-form-input"
                                        type="text" value={city.name}
                                        onFocus={(e) => { toggleSelectedCity(e) }} />
                                    <div className="city-handler-form-buttons-row">
                                        {selectedCity.name === city.name &&
                                            (
                                                <div  className="city-handler-form-buttons-container">
                                                    <button className="city-handler-form-button delete-button">
                                                        <FontAwesomeIcon className="button-icon" icon={faTrash} />
                                                    </button>
                                                    <button className="city-handler-form-button update-button">
                                                        <FontAwesomeIcon className="button-icon" icon={faCheck} />
                                                    </button>
                                                    <button className="city-handler-form-button cancel-button">
                                                        <FontAwesomeIcon className="button-icon" icon={faTimes} />
                                                    </button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </form>
                </div>
            </div>
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
