import { Routes, Route } from "react-router-dom";
import {
    Cities,
    Discussions,
    ErrorPage,
    Home,
    ContactUs,
    LogInCard,
    UserProfile,
} from "../pages";

export const AllRoutes = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cities" element={<Cities />}></Route>
                <Route path="/discussions" element={<Discussions />}></Route>
                <Route path="/contactus" element={<ContactUs />}></Route>
                <Route path="/login" element={<LogInCard />}></Route>
                <Route path="/profile" element={<UserProfile />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>

            </Routes>
        </main>
    );
};
