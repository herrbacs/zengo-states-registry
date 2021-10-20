import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { uploadNewCity } from '../../../Redux/City/cityActions'
import './AddNewCity.css'

type AddnewCityProps = {
    selectedStateID: number,
    uploadNewCity: Function,
    cities: any,
}

const AddNewCity = ({ selectedStateID, uploadNewCity, cities }: AddnewCityProps) => {

    const [newCityName, setNewCityName] = useState("")
    const [toggleShake, setToggleShake] = useState(false)

    const submitNewCity = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newCityName.length > 0) {
            uploadNewCity(selectedStateID, newCityName)
            setNewCityName("")
        }else{
            setToggleShake(true)
            setTimeout(() =>{
                setToggleShake(false)
            },600)
        }
    }

    return (
        <div className="add-new-city">
            <form className="add-new-city-form" onSubmit={e => { submitNewCity(e) }}>
                <label className="add-new-city-form-label">új város</label>
                <input
                    className={toggleShake ? "add-new-city-form-input empty" : "add-new-city-form-input"}
                    type="text"
                    value={newCityName} onChange={(e) => { setNewCityName(e.target.value) }}
                    placeholder="Település neve"
                    onFocus={(e) => { e.target.placeholder = "" }}
                    onBlur={(e) => { e.target.placeholder = "Település neve" }}
                ></input>
                <button className="add-new-city-form-submit-button" type="submit">felveszem</button>
                <label className={"add-new-city-form-error"}>{cities.error}</label>
            </form>
        </div>
    )
}

//Megye Városai
//Új város

const mapStateToProps = (state: any) => {
    return {
        cities: state.cities
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        uploadNewCity: (stateId: number, newCityName: String) => dispatch(uploadNewCity(stateId, newCityName))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewCity)
