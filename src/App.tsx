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
                <div className={"LargePhoto"}></div>
                <h1>Catherine & Josh</h1>
                <p>2025-05-25</p>
                <Countdown/>
            </div>
            <div className={"App-body"}>
                <h2>Our Story</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue ligula, ornare a faucibus sed,
                    facilisis non lorem. Ut imperdiet euismod turpis in mollis. Proin feugiat placerat lobortis. Mauris
                    diam lacus, tempus sed vehicula vel, tristique a lorem. Cras vestibulum tempus justo, vel posuere
                    ligula consectetur a. Nam molestie efficitur nulla non vehicula. Morbi vitae velit rutrum, ornare
                    augue in, maximus turpis. Proin volutpat, quam et tempor pellentesque, enim quam pellentesque massa,
                    ac sodales leo eros eu lacus. Suspendisse maximus diam vel blandit bibendum. Suspendisse nulla dui,
                    aliquet a risus a, accumsan accumsan velit. Suspendisse iaculis vel turpis eu vehicula.</p>
                <div className={"PhotoGroup"}>
                    <div className={"SmallPhoto"}></div>
                    <div className={"SmallPhoto"}></div>
                    <div className={"SmallPhoto"}></div>
                    <div className={"SmallPhoto"}></div>
                </div>
                <div className={"Section"}>
                    <div className={"LocalWrapper"}><Location/></div>
                    <div className={"TransWrapper"}><Transport/></div>
                    <div className={"DressWrapper"}><p>Dress Code: Cocktail.</p></div>
                </div>
                <div className={"Section2"}>
                    <h3>
                    Meet the wedding party:
                    </h3>
                    <div className={"VIP"}></div>
                    <div className={"VIP"}></div>
                    <div className={"VIP"}></div>
                    <div className={"VIP"}></div>
                    <div className={"VIP"}></div>
                    <div className={"VIP"}></div>
                    <div className={"VIP"}></div>
                    <div className={"VIP"}></div>
                </div>
                <div className={"Honeymoon"}>
                    <h4>Honeymoon fund:</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue ligula, ornare a faucibus
                        sed,
                        facilisis non lorem.</p>
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
