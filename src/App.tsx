import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SettingsPage from "./pages/SettingsPage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/settings" element={<SettingsPage/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
}

export default App;
