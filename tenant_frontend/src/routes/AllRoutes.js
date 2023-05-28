import {Routes, Route } from "react-router-dom";
import { Cities, Discussions, ErrorPage, Home, ContactUs} from "../pages";




export const AllRoutes = () => {
    return (
       <main>
           <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="*"   element={<ErrorPage />}></Route>
               <Route path="/cities" element={ <Cities />}></Route>
               <Route path="/discussions" element={<Discussions />}></Route>
               <Route path="/contactus"  element={<ContactUs />}></Route>
           </Routes>
           
       </main>
    )
}
