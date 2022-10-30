import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Login";
import Success from "./Success";
export default function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "550px" }}>
            <div className="App">
              <Routes>
                <Route exact path="/" element={<LoginForm />}></Route>
                <Route exact path="/Success" element={<Success />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
