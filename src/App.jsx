import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./Context/AuthContextProvider";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import LoadingContextProvider from "./Context/LoadingContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <LoadingContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </LoadingContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
