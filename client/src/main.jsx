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
      redirect_uri:"https://real-estate-website-client-sage.vercel.app"
    }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
