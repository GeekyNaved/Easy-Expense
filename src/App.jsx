import {BrowserRouter} from "react-router-dom";
import MainRouter from "./pages/router";

function App() {
  return (
    // <div className="min-h-screen">
    <div>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
