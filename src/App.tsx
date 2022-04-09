import { Routes, Route } from "react-router-dom";

import { ListUser } from "./pages/ListUser";

import "./App.scss";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ListUser />} />
      </Routes>
    </div>
  );
}

export default App;
