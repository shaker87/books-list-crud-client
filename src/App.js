import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddBook from "./Components/AddBook/AddBook";
import EditBook from "./Components/EditBook/EditBook";
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
export const UserContext = createContext()

function App() {
  const [data, setData] = useState({});
  return (
    <UserContext.Provider value={[data, setData]}>
      <Router>
        <Menu></Menu>
        <Switch>
          <Route path="/add-book">
            <AddBook></AddBook>
          </Route>
          <Route path="/edit-book">
            <EditBook></EditBook>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
