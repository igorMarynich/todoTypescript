import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path={'/'} component={Home} exact/>
          <Route path={'/about'} component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
