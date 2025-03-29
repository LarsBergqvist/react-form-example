import { connect } from "react-redux";

const PersonView = (props) => {
    return (
        <div>
            {(props.firstName) && <div className="person-view-container">
                <h3>Submitted person data:</h3>
                <div>
                    {`Name: ${props.firstName} ${props.lastName}`}
                </div>
                <div>
                    {`Email: ${props.email}`}
                </div>
                <div>
                    {`Age: ${props.age}`}
                </div>
                <div>
                    {`Gender: ${props.gender}`}
                </div>
            </div>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        firstName: state.person.firstName,
        lastName: state.person.lastName,
        email: state.person.email,
        age: state.person.age,
        gender: state.person.gender
    }
}

const PersonViewRedux = connect(
    mapStateToProps
)(PersonView)

export default PersonViewRedux;