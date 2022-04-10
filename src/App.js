import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
import Header from "./Components/Header";
// import Headerclass from "./Components/Helloworldclass";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import Contactus from "./Views/Contactus";
import Product from "./Views/Product";

function App() {
  return (
    <div className="App relative pb-10 min-h-screen">
      <Router>
        <Header />
        {/* <Headerclass name="adit" /> */}

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact-us">
              <Contactus />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
