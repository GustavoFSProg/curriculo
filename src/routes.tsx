import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import Receitas from "./Pages/Receitas";
// import PostRegister from "./Pages/PostRegister.jsx";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
