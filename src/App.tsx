import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Viewer from "./components/Viewer/Viewer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body__container">
        <Viewer />
        <Cards />
      </div>
    </div>
  );
}

export default App;
