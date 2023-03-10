import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import "./App.css"

class App extends Component {
  state = {
    color: "Black"
  }
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider >
        <HashRouter basename="/SnapScout">
          <div className="container" style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2017/02/16/19/47/bokeh-2072271__480.jpg")`
          }}>
            <Route
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/Korea" />}
              />

              <Route
                path="/Korea"
                render={() => <Item searchTerm="Korea" />}
              />
              <Route path="/food" render={() => <Item searchTerm="korean food" />} />
              <Route path="/people" render={() => <Item searchTerm="korean faces" />} />
              <Route path="/culture" render={() => <Item searchTerm="korean culture" />} />
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />

              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
