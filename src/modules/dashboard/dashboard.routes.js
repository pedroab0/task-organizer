import { Route, Switch } from "react-router-dom";

const DashboardRoutes = ({ match: { url } }) => {
    return (
        <Switch>
            <Route path={`${url}/`} component={() => <>Dashboard Sub</>} />
        </Switch>
    );
};

export default DashboardRoutes;
