import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Navigation from "./components/Navigation"
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./components/Detail";


function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" exact={true} component={About}></Route>
      <Route path="/movie/:title" exact={true} component={Detail}></Route>
    </HashRouter>
  );   
}

export default App;