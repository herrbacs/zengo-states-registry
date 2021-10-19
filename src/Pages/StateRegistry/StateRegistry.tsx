import { connect } from 'react-redux'
import { fetchStates } from '../../Redux/State/stateActions'
import SelectState from './SelectState/SelectState'

const StateRegistry = (props:any) => {
    console.log(props)
    return (
        <div>
            <SelectState></SelectState>
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



