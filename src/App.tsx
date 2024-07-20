import React from 'react';
import Navigation from './Components/Navigation'
import Countdown from './Components/Countdown'
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <h1>Add Names Here</h1>
                <p>Add date here</p>
                <Navigation></Navigation>
                <Countdown/>
            </div>
            <div className="App-footer">
                <p>Short blurb plz RSPV info above thank you much excite</p>
            </div>
        </div>
    );
}

export default App;
