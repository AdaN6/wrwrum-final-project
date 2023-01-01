import {useEffect, useState} from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ConstructorPage from "./components/Constructors/ConstructorPage";
import SingleConstructor from "./components/Constructors/SingleConstructor";
import Tracks from "./components/Tracks/Tracks";
import SingleTrack from "./components/Tracks/SingleTrack";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Drivers from "./components/Drivers/Drivers";
import SingleDriverDetails from './components/Drivers/SingleDriverDetails';
import StandingsDrivers from './components/Standings/StandingsDrivers';
import StandingsTeams from './components/Standings/StandingsTeams';
import StandingsPage from './components/Standings/StandingsPage';

function App() {

  return (
    <div className="App bg-main-bg display-cover max-w-[100vw]">
      <div className="flex">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/constructors" element={<ConstructorPage />} />
          <Route
            path="/constructors/:id"
            element={
              <SingleConstructor
                name=""
                chief=""
                powerUnit=""
                img=""
                d1Name=""
                d2Name=""
                chasis=""
                world=''
                first=''
              />
            }
          />
          <Route path='/drivers' element={<Drivers />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/standings" element={<StandingsPage />} />
          <Route path="/standings/driver" element={<StandingsDrivers />} />
          <Route path="/standings/team" element={<StandingsTeams />} />
          <Route path="/tracks/:id" element={<SingleTrack name=''
                img=''
                country=''
                distance=''
                laps=''
                firstGrandPrix=''
                lapRecordDriver=''
                lapRecordSeason=''
                circuitLength=''
                lapRecordTime=''/>} />
          <Route path="/drivers/:id" element={<SingleDriverDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
