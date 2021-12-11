import Topbar from "./components/topbar/Topbar";
import HomePage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={user ? <HomePage /> : <Login />} />
        <Route
          exact
          path="/register"
          element={user ? <HomePage /> : <Register />}
        />
        <Route exact path="/write" element={user ? <Write /> : <Register />} />
        <Route
          exact
          path="/settings"
          element={user ? <Settings /> : <Register />}
        />
        <Route exact path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
