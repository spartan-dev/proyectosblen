import logo from "./logo.svg";
import "./App.css";
import Route from "./routes";
import NavBar from "./components/navbar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Route />
    </div>
  );
}

export default App;
