import { faCheck, faCross, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { deleteCity, fetchCities } from '../../../Redux/City/cityActions'
import { setSelectedState } from '../../../Redux/State/stateActions'
import './CityHandler.css'

type CityHandlerProps = {
    selectedState: Object,
    fetchCities: Function,
    deleteCity: Function,
    cities: Object
}

const CityHandler = (props: any) => {
    const [selectedCity, setSelectedCity] = useState({
        id: -1,
        name: ""
    })
    const [visibleButtons, setVisibleButtons] = useState(false)

    const removeCityAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const cityIdToDelete = parseInt(e.currentTarget.id)
        setVisibleButtons(false)
        props.deleteCity(cityIdToDelete)
    }
    const updateCityAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const cityIdToDelete = parseInt(e.currentTarget.id)
        setVisibleButtons(false)
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
                    <form onSubmit={e => { e.preventDefault() }} className="city-handler-body-form">
                        {
                            props.cities.cities.map((city: any) => (
                                <div key={city.id} className="city-handler-form-input-container">
                                    <input id={city.id}
                                        className="city-handler-form-input"
                                        type="text"
                                        placeholder={city.name}
                                        onChange={(e) => {
                                            setSelectedCity({
                                                ...selectedCity,
                                                name: e.target.value,
                                            })
                                        }}
                                        onFocus={(e) => {
                                            e.target.placeholder = ""
                                            e.target.value = city.name
                                            setSelectedCity({
                                                ...selectedCity,
                                                id: city.id,
                                            })
                                            setVisibleButtons(true)
                                        }}
                                        
                                    />
                                    <div className="city-handler-form-buttons-row">
                                        {(selectedCity.id === city.id && visibleButtons) &&
                                            (
                                                <div className="city-handler-form-buttons-container">
                                                    <button id={city.id} onClick={(e) => { removeCityAction(e)}} className="city-handler-form-button delete-button">
                                                        <FontAwesomeIcon className="button-icon" icon={faTrash} />
                                                    </button>
                                                    <button id={city.id} onClick={e => { updateCityAction(e)}} className="city-handler-form-button update-button">
                                                        <FontAwesomeIcon className="button-icon" icon={faCheck} />
                                                    </button>
                                                    <button id={city.id} onClick={e => { setVisibleButtons(false) }} className="city-handler-form-button cancel-button">
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
        fetchCities: (stateId: number) => dispatch(fetchCities(stateId)),
        deleteCity: (cityId: number) => dispatch(deleteCity(cityId))
    }
}

export default React.memo(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(CityHandler)
)
