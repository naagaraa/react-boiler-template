import Route from "./route/index";
import ComponentNaavigation from "./components/Navigation/ComponentNavigation.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {
  return (
    <div>
      <ComponentNaavigation />
      <Route />
    </div>
  );
}

export default App;
