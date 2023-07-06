import "./App.css";
// import { Route, Routes } from "react-router-dom";
import { ChakraHeader, ChakraFooter } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./components/auth_components/userProvider";
import { Breadcrumbs } from "./components/Breadcrumbs";

function App() {
    return (
        <UserProvider>
            <ChakraProvider>
                <ChakraHeader />
                <Breadcrumbs/>
                <AllRoutes />
                <ChakraFooter />
            </ChakraProvider>
        </UserProvider>
    );
}

export default App;
