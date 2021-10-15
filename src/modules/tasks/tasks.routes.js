import { Route, Switch } from "react-router-dom";

const TasksRoutes = ({ match: { url } }) => {
    return (
        <Switch>
            <Route path={`${url}/`} component={() => <>Tasks Sub</>} />
        </Switch>
    );
};

export default TasksRoutes;
