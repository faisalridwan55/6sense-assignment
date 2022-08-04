import { Route } from "react-router-dom";

import Leads from "./containers/Leads";
import Teams from "./containers/Teams";
import Campaign from "./containers/Campaigns";
import Report from "./containers/Reports";

const routesList = [
  {
    path: "/",
    options: {
      exact: true,
      component: Teams,
    },
  },
  {
    path: "/campaign",
    options: {
      exact: true,
      component: Campaign,
    },
  },
  {
    path: "/leads",
    options: {
      exact: true,
      component: Leads,
    },
  },
  {
    path: "/report",
    options: {
      exact: true,
      component: Report,
    },
  },
];

const Routes = (
  <>
    {routesList.map(({ path, options }, i) => (
      <Route key={i} path={path} {...options} />
    ))}
  </>
);

export default Routes;
