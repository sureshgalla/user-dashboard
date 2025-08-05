import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Grid from "./components/Grid";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Grid />
      </div>
    </Provider>
  );
}

export default App;
