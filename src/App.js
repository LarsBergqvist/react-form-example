import './App.css';
import { NameFormControlled } from './ControlledComponent/NameFormControlled';
import { NameFormUncontrolled } from './UncontrolledComponent/NameFormUncontrolled';
import { PersonFormView } from './ReactHookFormComponent/PersonForm';

function App() {
    return (
        <div className="app-container">
            <div className="container">
                <PersonFormView className="the-form" />
            </div>
            <hr />
            <div className="container">
                <NameFormControlled className="the-form"></NameFormControlled>
            </div>
            <hr />
            <div className="container">
                <NameFormUncontrolled></NameFormUncontrolled>
            </div>
        </div>
    );
}

export default App;
