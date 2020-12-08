import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "fontsource-roboto";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import firebaseConfig from "./firebase-config";
import { FirebaseAppProvider } from "reactfire";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// recvordar que es un componente de alto estado y bscar mas si quieren
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
