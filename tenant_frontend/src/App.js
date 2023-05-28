import './App.css';
import {Route, Routes} from "react-router-dom";
import {Footer, Home, ErrorPage, Header} from "./components";
import {AllRoutes} from "./routes/AllRoutes";



function App() {
  return (
      <>
          <Header />
            <AllRoutes />
          <Footer />
      </>
  );
}

export default App;
