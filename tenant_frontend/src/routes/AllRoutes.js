import {Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home";
import {ErrorPage} from "../pages/ErrorPage";


export const AllRoutes = () => {
    return (
       <main>
           <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="*"   element={<ErrorPage />}></Route>
           </Routes>
           
       </main>
    )
}
