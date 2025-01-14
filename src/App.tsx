import Navigation from './Components/Navigation';
import Countdown from './Components/Countdown';
import Location from "./Components/Location";
import Transport from "./Components/Transport";
import Form from './Components/Form';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <Navigation></Navigation>
                <h1>Cathrine & Josh</h1>
                <p>2025-05-25</p>
                <Countdown/>
                <div className={"Section"}>
                    <div className={"LocalWrapper"}><Location/></div>
                    <div className={"TransWrapper"}><Transport/></div>
                </div>
                <Form/>
            </div>
            <div className="App-footer">
                <p>Please RSPV above, we cant wait to share our special day with you!</p>
            </div>
        </div>
    );
}

export default App;
