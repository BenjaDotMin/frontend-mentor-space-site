import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import data from "./js/data.json";

function App() {
  const location = useLocation();

  return (
     <div className="App">
      <Header/>
      <main>
        <div className="container">      
          <AnimatePresence initial={false} exitBeforeEnter>
            <Routes location={location} key={location.pathname}>            
              <Route path="/destination" element={<Destination data={data.destinations} />} />
              <Route path="/crew" element={<Crew data={data.crew} />} />
              <Route path="technology" element={<Technology data={data.technology} />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default App;
