import './SelectState.css'
import { connect } from 'react-redux'
import { fetchStates, setSelectedState } from '../../../Redux/State/stateActions'
import React, { useEffect, useState } from 'react'
import { StatesStateType } from '../../../Redux/State/stateTypes'

type SelectStateProps = {
    states:StatesStateType,
    fetchStates:Function,
    setSelectedState:Function
}

const SelectState = ({states, fetchStates,setSelectedState}:SelectStateProps) => {

    const submitSelectedState = (e:React.ChangeEvent<HTMLSelectElement>) => {
        
        console.log(e.target.value)
        setSelectedState(parseInt(e.target.value))
        console.log(states)
    }

    useEffect(() => {
        fetchStates()
    }, [fetchStates])

    return (
        <div className={states.selectedStateId === -1 ? "select-state" : "select-state active-selected-state"}>
            <form className="select-state-form" >
                <label className="select-state-form-label">Megye</label>
                <select defaultValue="default" className={states.selectedStateId ===-1 ? "select-state-form-select":"select-state-form-select selected-state"} name="states" id="states" onChange={(e) => {submitSelectedState(e)}}>
                    <option className="select-state-form-option" value="default" disabled>Válassz megyét!</option>
                    {
                        states.states.map(state => (
                            <option key={state.id} className="select-state-form-option" value={state.id}>{state.name}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        states: state.states,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchStates: () => dispatch(fetchStates()),
        setSelectedState: (id:number) => dispatch(setSelectedState(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectState)

