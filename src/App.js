import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WalletPage from "./components/pages/Wallet/Wallet";
import Home from "./components/pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wallet/:id" element={<WalletPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
