import { faCheck, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { LoadingModal } from '../../../HelperComponents/LoadingModal/LoadingModal'
import { deleteCity, fetchCities, updateCity } from '../../../Redux/City/cityActions'
import './CityHandler.css'

type CityHandlerProps = {
    selectedState: Object,
    fetchCities: Function,
    deleteCity: Function,
    updateCity: Function,
    cities: Object
}

const CityHandler = (props: any) => {
    const [selectedCity, setSelectedCity] = useState({
        id: -1,
        name: ""
    })
    const [visibleButtons, setVisibleButtons] = useState(false)

    const removeCityAction = () => {
        setVisibleButtons(false)
        props.deleteCity(selectedCity.id)
    }
    const updateCityAction = () => {
        setVisibleButtons(false)
        props.updateCity(selectedCity.id, selectedCity.name)
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
            {props.cities.loading ?
                <LoadingModal></LoadingModal>
                :
                props.cities.cities ?
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
                                                className={(selectedCity.id === city.id && visibleButtons) ? "city-handler-form-input  active-input" : "city-handler-form-input"}
                                                type="text"
                                                placeholder={city.name}
                                                onChange={(e) => {
                                                    setSelectedCity({
                                                        ...selectedCity,
                                                        name: e.target.value,
                                                    })
                                                }}
                                                onFocus={(e) => {
                                                    if(e.target.placeholder === city.name){
                                                        e.target.value = city.name
                                                    }else{
                                                        e.target.value = e.target.placeholder
                                                    }
                                                    e.target.placeholder = ""
                                                    setSelectedCity({
                                                        name: e.target.value,
                                                        id: city.id,
                                                    })
                                                    setVisibleButtons(true)
                                                }}

                                                onBlur={(e) => {
                                                    e.target.placeholder = e.target.value
                                                    e.target.value = ""
                                                }}
                                            />
                                            {(selectedCity.id === city.id && visibleButtons) &&
                                                (
                                                    <div className="city-handler-form-buttons-container">
                                                        <button onClick={() => { removeCityAction() }} className="city-handler-form-button delete-button">
                                                            <FontAwesomeIcon className="button-icon" icon={faTrash} />
                                                        </button>
                                                        <button onClick={() => { updateCityAction() }} className="city-handler-form-button update-button">
                                                            <FontAwesomeIcon className="button-icon" icon={faCheck} />
                                                        </button>
                                                        <button onClick={() => { setVisibleButtons(false) }} className="city-handler-form-button cancel-button">
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
                    : <h1 className="no-city-to-show">Nincs város felvéve a megyéhez</h1>}
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
