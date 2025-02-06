import LandingPage from "./Landing-Page/landingPage";
import StateInfo from "./State-Info/stateInfo";

export const routes = [
    { path: "/", element: <LandingPage /> },
    { path: "/state-info/:name", element: <StateInfo /> },
  ];
    