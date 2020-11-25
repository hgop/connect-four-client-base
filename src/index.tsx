import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import "./index.css";
import { GameApiClient } from "./external_services/game_api_client";

ReactDOM.render(
  <App columns={7} rows={6} client={new GameApiClient()} />,
  document.getElementById("root")
);
