import "./App.css";
// import { Route, Routes } from "react-router-dom";
import { ChakraHeader, ChakraFooter } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
    return (
        <>
            <ChakraProvider>
                <ChakraHeader />
                <AllRoutes />
                <ChakraFooter />
            </ChakraProvider>
        </>
    );
}

export default App;
