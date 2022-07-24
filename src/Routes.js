import { Route } from "react-router-dom";
import Teams from "./containers/Teams";

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
      component: () => <div>campaign</div>,
    },
  },
  {
    path: "/leads",
    options: {
      exact: true,
      component: () => <div>leads</div>,
    },
  },
  {
    path: "/report",
    options: {
      exact: true,
      component: () => <div>report</div>,
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
