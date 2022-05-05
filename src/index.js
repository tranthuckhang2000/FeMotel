import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//css
import "./index.css";
import "./assets/scss/style.css";
import "./assets/fonts/fontawesome-all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

//context
import { AccountProvider } from "./contexts/Account.Context";
import { MotelProvider } from "./contexts/Motel.Context";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./reducers/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AccountProvider>
          <MotelProvider>
            <App />
          </MotelProvider>
        </AccountProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
