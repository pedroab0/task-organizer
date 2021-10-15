import LazyLoading from "common/components/LazyLoading";
import { lazy } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

const DashboardRoutes = lazy(() => import("modules/dashboard/dashboard.routes"));
const UsersRoutes = lazy(() => import("modules/users/users.routes"));
const TasksRoutes = lazy(() => import("modules/tasks/tasks.routes"));

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/tasks">Tasks</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/dashboard" component={LazyLoading(DashboardRoutes)} />
                    <Route path="/users" component={LazyLoading(UsersRoutes)} />
                    <Route path="/tasks" component={LazyLoading(TasksRoutes)} />

                    <Redirect to="/dashboard" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default MainRoutes;
