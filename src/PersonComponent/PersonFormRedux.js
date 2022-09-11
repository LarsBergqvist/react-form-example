import { connect } from "react-redux";
import { savePerson } from "../store/personReducer";
import PersonForm from "./PersonForm";


const mapDispatchToProps = dispatch => {
    return {
        onSubmit: data => {
            dispatch(savePerson(data));
        }
    }
}

const mapStateToProps = state => {
    return {
        firstName: state.person.firstName,
        lastName: state.person.lastName,
        email: state.person.email,
        age: state.person.age,
        gender: state.person.gender
    }
}

const PersonFormRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonForm)

export default PersonFormRedux;