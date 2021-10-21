import { faCheck, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { LoadingModal } from '../../../HelperComponents/LoadingModal/LoadingModal'
import { deleteCity, fetchCities, updateCity } from '../../../Redux/City/cityActions'
import { CityReducerState } from '../../../Redux/City/cityTypes'
import { StateObject } from '../../../Redux/State/stateTypes'
import './CityHandler.css'

type CityHandlerProps = {
    selectedState: StateObject,
    cities: CityReducerState,
    fetchCities: Function,
    deleteCity: Function,
    updateCity: Function,
}

const CityHandler = ({ cities, selectedState, fetchCities, deleteCity, updateCity }: CityHandlerProps) => {

    const [selectedCity, setSelectedCity] = useState({
        id: -1,
        name: ""
    })
    const [toggleShake, setToggleShake] = useState(false)

    const updateCityAction = () => {
        if (selectedCity.name.length >= 3) {
            updateCity(selectedCity.id, selectedCity.name)
            setSelectedCity({
                id: -1,
                name: ""
            })
        } else {
            setToggleShake(true)
            setTimeout(() => {
                setToggleShake(false)
            }, 600)
        }

    }

    useEffect(() => {
        fetchCities(selectedState.id)
    }, [fetchCities,selectedState])

    return (
        <div className="city-handler">
            <div className="city-handler-header">
                <div className="city-handler-header-title-container">
                    <span className="city-handler-header-title">megye</span>
                </div>
                <div className="city-handler-header-current-state-container">
                    <span className="city-handler-header-current-state">{selectedState.name}</span>
                </div>
            </div>
            {cities.loading ?
                <LoadingModal></LoadingModal>
                :
                cities.cities && cities.cities.length > 0 ?
                    <div className="city-handler-body">
                        <div className="city-handler-body-title-container">
                            <span className="city-handler-body-title">városok</span>
                        </div>
                        <div className="city-handler-body-form-container">
                            <form onSubmit={e => { e.preventDefault() }} className="city-handler-body-form">
                                {
                                    cities.cities.map((city: any) => (
                                        <div key={city.id} className="city-handler-form-input-container">
                                            <input id={city.id}
                                                className={
                                                    selectedCity.id === city.id ?
                                                        `city-handler-form-input active-input ${toggleShake && "empty"}`
                                                        : `city-handler-form-input`
                                                }
                                                type="text"
                                                placeholder={city.name}
                                                onChange={(e) => {
                                                    setSelectedCity({
                                                        ...selectedCity,
                                                        name: e.target.value,
                                                    })
                                                }}

                                                onFocus={(e) => {
                                                    e.target.value = (e.target.placeholder === city.name) ? city.name : e.target.placeholder
                                                    e.target.placeholder = ""
                                                    setSelectedCity({
                                                        name: e.target.value,
                                                        id: city.id,
                                                    })
                                                }}

                                                onBlur={(e) => {
                                                    e.target.placeholder = e.target.value
                                                    e.target.value = ""
                                                }}
                                            />
                                            {selectedCity.id === city.id &&
                                                (
                                                    <div className="city-handler-form-buttons-container">
                                                        <button onClick={() => { deleteCity(selectedCity.id) }} className="city-handler-form-button delete-button">
                                                            <FontAwesomeIcon className="button-icon" icon={faTrash} />
                                                        </button>
                                                        <button onClick={() => { updateCityAction() }} className="city-handler-form-button update-button">
                                                            <FontAwesomeIcon className="button-icon" icon={faCheck} />
                                                        </button>
                                                        <button onClick={() => {
                                                            setSelectedCity({
                                                                ...selectedCity,
                                                                id: -1,
                                                            })
                                                        }} className="city-handler-form-button cancel-button">
                                                            <FontAwesomeIcon className="button-icon" icon={faTimes} />
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </form>
                        </div>
                    </div>
                    :
                    <h1 className="no-city-to-show">Nincs város felvéve a megyéhez</h1>}
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
        deleteCity: (cityId: number) => dispatch(deleteCity(cityId)),
        updateCity: (cityId: number, newName: String) => dispatch(updateCity(newName, cityId))
    }
}

export default React.memo(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(CityHandler)
)
