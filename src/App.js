import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import React from 'react';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Planning from './pages/Planning';
import Groups from './pages/Groups';
import Standing from './pages/Standing';
import Stadiums from './pages/Stadiums';
import StadiumDetail from './pages/StadiumDetail';
import Matches from './pages/Matches';
import MatchDetails from "./pages/MatchDetails"
import Discover from "./pages/Discover"
import Map from "./pages/Map"
function App() {

    return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={ <Weather /> } />
        <Route exact path='/planning' element={<Planning />}></Route>
        <Route exact path='/groups' element={<Groups />}></Route>
        <Route exact path='/standing' element={<Standing />}></Route>
        <Route exact path='/stadiums' element={<Stadiums />}></Route>
        <Route exact path='/stadiums/:sid' element={<StadiumDetail />}></Route>
        <Route exact path='/groups/:gid' element={<Matches />}></Route>
        <Route exact path='/matches/:mid' element={<MatchDetails />}></Route>
        <Route path="/discover" element={ <Discover /> } />
        <Route path="/map" element={ <Map /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
