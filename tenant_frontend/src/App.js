import './App.css';
import {Route, Routes} from "react-router-dom";
import {Footer, Home, ErrorPage, Header} from "./components";



function App() {
  return (
      <>
          <Header />
             <Routes>
                 <Route path="/index" element={<Home />}></Route>
                 <Route path="*"   element={<ErrorPage />}></Route>
             </Routes>
          <Footer />
      </>
  );
}

export default App;
