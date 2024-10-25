import { Page } from "./components/Page/Page";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Work } from "./components/Work/Work";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/trabalhe-conosco" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
