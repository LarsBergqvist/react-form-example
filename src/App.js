import './App.css';
import { FormControlled } from './ControlledComponent/FormControlled';
import { NameFormUncontrolled } from './UncontrolledComponent/NameFormUncontrolled';
import PersonFormRedux from './PersonComponent/PersonFormRedux';
import PersonViewRedux from './PersonComponent/PersonViewRedux';

function App() {
    return (
        <div className="app-container">
            <div className="container">
                <PersonFormRedux className="the-form" />
                <PersonViewRedux />
            </div>
            <hr />
            <div className="container">
                <FormControlled className="the-form" />
            </div>
            <hr />
            <div className="container">
                <NameFormUncontrolled />
            </div>
        </div>
    );
}

export default App;
