import PrivetRoute from "./components/route/PrivetRoute";
import PublicRouter from "./components/route/PublicRouter";
import useUserChecked from "./hooks/useUserChecked";
import Login from "./pages/Login";
import Registation from "./pages/Registation";
import TaskPage from "./pages/TaskPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const checkedUser = useUserChecked();
  return (
    <div className="w-10/12 md:w-9/12 mx-auto">
      {!checkedUser ? (
        <h1>chaking user</h1>
      ) : (
        <Router>
          <Routes>
            <Route
              path="/registation"
              element={
                <PublicRouter>
                  <Registation />
                </PublicRouter>
              }
            />
            <Route
              path="/"
              element={
                <PrivetRoute>
                  <TaskPage />
                </PrivetRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRouter>
                  <Login />
                </PublicRouter>
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;
