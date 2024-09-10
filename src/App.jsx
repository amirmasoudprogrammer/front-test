import React from 'react';
import Homepage from "./Components/template/Homepage.jsx";
import {Route, Routes} from "react-router-dom";
import Short from "./Components/template/Short.jsx";


function App(props) {
    return (

            <Routes>

                <Route path="/" element={<Homepage/>}/>
                <Route path="/Short" element={<Short/>}/>

            </Routes>

    );
}

export default App;