
import { NavLink } from "react-router-dom";

export const Footer = () => {
    
    const date =  new Date();
    const year = date.getFullYear().toFixed()
    
    return (
       <footer>

           <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
               <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="#"
                                                                                          className="hover:underline">TenantTalk™</a>. All Rights Reserved.
    </span>
                   <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                       <li>
                           <NavLink to="/"  className="mr-4 hover:underline md:mr-6 ">Home</NavLink>
                       </li>
                       <li>
                           <NavLink to="/discussions"  className="mr-4 hover:underline md:mr-6">Discussion</NavLink>
                       </li>
                       <li>
                           <NavLink to="/cities"  className="mr-4 hover:underline md:mr-6">Cities</NavLink>
                       </li>
                       <li>
                           <NavLink to ="/contactus" className="hover:underline">Contact</NavLink>
                       </li>
                   </ul>
               </div>
           </footer>

       </footer>
    )
}
