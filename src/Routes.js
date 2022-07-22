import { Route } from "react-router-dom"
import Teams from "./containers/Teams";


const routesList = [
    {
        path: '/',
        options: {
            exact: true,
            component: Teams
        }
    }
];

const Routes = (
    <>
        {routesList.map(({path, options}, i) => <Route key={i} path={path} {...options} />)}
    </>
);

export default Routes;