import { Route } from "react-router-dom"

const Dummy = () => <h1>This is just dummy component</h1>;

const routesList = [
    {
        path: '/',
        options: {
            exact: true,
            component: Dummy
        }
    }
];

const Routes = (
    <>
        {routesList.map(({path, options}) => <Route path={path} {...options} />)}
    </>
);

export default Routes;