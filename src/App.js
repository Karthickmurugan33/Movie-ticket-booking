import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Kantara from "./components/Kantara";
import Pathan from "./components/Pathan";
import Fastandfurious from "./components/Fastandfurious";
import Leo from "./components/Leo";
import MovieTicketBooking from "./components/sample";
import Pay from "./components/Pay";
import English from "./components/movieDetails/English";
import Tamil from "./components/movieDetails/Tamil";
import Booked from "./components/movieDetails/Booked/Booked";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          <Route path={"/kantara"}>
            <Kantara />
          </Route>
          <Route path={"/pathan"}>
            <Pathan />
          </Route>
          <Route path={"/fastandfurious"}>
            <Fastandfurious />
          </Route>
          <Route path={"/Leo"}>
            <Leo />
          </Route>
          <Route path={"/book"}>
            <MovieTicketBooking />
          </Route>
          <Route path={"/pay"}>
            <Pay />
          </Route>
          <Route path={"/english"}>
            <English />
          </Route>
          <Route path={"/tamil"}>
            <Tamil />
          </Route>
          <Route path={"/booked"}>
            <Booked />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
