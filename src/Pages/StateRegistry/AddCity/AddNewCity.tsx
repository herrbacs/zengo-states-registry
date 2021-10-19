import { useEffect } from 'react'
import { connect } from 'react-redux'
import './AddNewCity.css'

type AddnewCityProps = {
    selectedState:number
}

const AddNewCity = (props:any) => {

console.log(props)

    useEffect(() => {
        //SelectedId alapján 
    }, [])

    return (
        <div>
            {props.selectedState}
        </div>
    )
}

//Megye Városai
//Új város

const mapStateToProps = (state:any) => {
    return{
        selectedState: state.states.selectedStateId
    }
}

const mapDispatchToProps = (dispatch : any) =>{
    return {
        //uploadCity : () => dispatch(uploadCity())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewCity)
