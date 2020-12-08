import logo from "./logo.svg";
import "./App.css";
import Route from "./routes";
import NavBar from "./components/navbar";
import { useFirebaseApp } from "reactfire";
function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <div className="App">
      <NavBar />
      <Route />
    </div>
  );
}

export default App;
