import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Viewer from "./components/Viewer/Viewer";
import "./index.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body__container">
        <Viewer />
        <Cards />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
