import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Errors from "./Pages/Errors";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={["/add", "/edit"]} component={Add} />
        <Route path="/*" component={Errors} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
