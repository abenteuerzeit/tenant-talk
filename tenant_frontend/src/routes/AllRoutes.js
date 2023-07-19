import { useRoutes } from "react-router-dom";
import {
    Cities,
    Discussions,
    ErrorPage,
    Home,
    ContactUs,
    LogInCard,
} from "../pages";

export const AllRoutes = () => {
    const element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/cities", element: <Cities /> },
        { path: "/discussions", element: <Discussions /> },
        { path: "/contactus", element: <ContactUs /> },
        { path: "/login", element: <LogInCard /> },
        { path: "*", element: <ErrorPage /> },
    ]);

    return <main>{element}</main>;
};
