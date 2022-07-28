import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages & components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Highscores from './pages/highscores/Highscores';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/highscores">
          <Highscores />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
