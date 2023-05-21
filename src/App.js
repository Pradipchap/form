import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/form";
import { Navbar } from "./components/navbar";
import { BrowserRouter as Router ,Route,Routes,} from "react-router-dom"
import { Home } from "./components/home";
import { Team } from "./components/teams";
import { PreEvents } from "./components/preevents";
import { Formredirect } from "./components/formredirect";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/redirect" element={<Formredirect/>}/>
        <Route exact path="/form" element={<Form/>}/>
        <Route exact path="/team" element={<Team/>}/>
        <Route exact path="/preevents" element={<PreEvents/>}/>
      </Routes>

      </Router>

      

    </div>
  );
}

export default App;
