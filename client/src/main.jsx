import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-3i44qg4wbynsgp0r.us.auth0.com"
    clientId="O5ibBTeW3biWWsQSjm1xUgbBqXxG12eE"
    authorizationParams={{
      redirect_uri:"http://localhost:5173/"
    }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
