import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store, persistor } from "./Redux/store/store";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { Context } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Context>
        <App />
      </Context>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
