import Navbar from "./components/Navbar/Navbar";
import AppBody from "./components/AppBody/AppBody";

import "./index.css";
import "./variables.css";
import "./reset.css";

function App() {
  return (
    <div className="body">
      <Navbar />
      <AppBody />
    </div>
  );
}

export default App;
