import './StateRegistry.css'
import { connect } from 'react-redux'
import { fetchStates } from '../../Redux/State/stateActions'
import SelectState from './SelectState/SelectState'
import { StatesStateType } from '../../Redux/State/stateTypes'
import AddNewCity from './AddCity/AddNewCity'
import CityHandler from './CityHandler/CityHandler'


type StateRegistryProps = {
    states: StatesStateType
}

const StateRegistry = ({ states }: StateRegistryProps) => {
    return (
        <div className="state-registry">
            <div className="select-state-column">
                <img className="" src={process.env.PUBLIC_URL + '/state-registry/zengo-rectangles-top.png'} alt="" />
                <SelectState />
                {states.selectedStateId !== -1 && <AddNewCity selectedState={states.selectedStateId} />}
                <img className="" src={process.env.PUBLIC_URL + '/state-registry/zengo-rectangles-bottom.png'} alt="" />
            </div>
            <div className="selected-state-container">
                {states.selectedStateId === -1 ?
                    <img className="no-selected-state-img" src={process.env.PUBLIC_URL + '/state-registry/zengo_no_selected_state.png'} alt="" />
                    : <CityHandler></CityHandler>
                }
            </div>
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StateRegistry)



