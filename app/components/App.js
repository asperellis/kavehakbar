import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home';
import About from './About';
import Readings from './Readings';
import Books from './Books';
import Words from './Words';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <main role="main" className="main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/books" component={Books} />
              <Route path="/readings" component={Readings} />
              <Route path="/words" component={Words} />
              <Route
                render={function() {
                  return (
                    <section>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <h1 className="center">Oops</h1>
                            <p>Sorry, this page does not exist.</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  );
                }}
              />
            </Switch>
            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
