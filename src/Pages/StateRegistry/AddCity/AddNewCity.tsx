import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './AddNewCity.css'

type AddnewCityProps = {
    selectedState: number
}

const AddNewCity = (props: any) => {

    console.log(props)

    const [newCityName, setNewCityName] = useState("")

    const submitNewCity = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(newCityName)
    }

    useEffect(() => {
        //SelectedId alapján 
    }, [])

    return (
        <div className="add-new-city">
            <form className="add-new-city-form" onSubmit={e => { submitNewCity(e) }}>
                <label className="add-new-city-form-label">új város</label>
                <input
                    className="add-new-city-form-input"
                    type="text"
                    value={newCityName} onChange={(e) => { setNewCityName(e.target.value) }}
                    placeholder="Település neve"
                    onFocus={(e) => { e.target.placeholder = "" }}
                    onBlur={(e) => { e.target.placeholder = "Település neve" }}
                ></input>
                <button className="add-new-city-form-submit-button" type="submit">felveszem</button>
            </form>
        </div>
    )
}

//Megye Városai
//Új város

const mapStateToProps = (state: any) => {
    return {
        selectedState: state.states.selectedStateId
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        //uploadCity : () => dispatch(uploadCity())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewCity)
