import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchPage from './Components/SearchPapge/SearchPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/search">
              <SearchPage />
          </Route>
          <Route path="/" >
              <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>

      
      
      

      {/* Home Page */}
          {/* Header */}
          {/* Banner */}
          {/* Cards */}
          {/* Footer */}

      {/* Search Page */}
          {/* Header */}
          {/* Footer */}
    </div>
  );
}

export default App;
