import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StateExplorer from "./pages/StateExplorer";
import PracticeDetail from "./pages/PracticeDetail";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state/mp" element={<StateExplorer />} />
        <Route path="/practice/:id" element={<PracticeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
