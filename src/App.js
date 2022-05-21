import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";
import About from "./Pages/About";
import Appointment from "./Pages/Appointment";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Reviews from "./Pages/Reviews";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard";
import RequireAuth from "./Components/RequireAuth";
import MyAppointments from "./Pages/MyAppointments";
import AddDoctor from "./Pages/AddDoctor";
import Users from "./Pages/Users";

function App() {
   return (
      <div>
         <Header></Header>
         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route
               path="appointment"
               element={<Appointment></Appointment>}
            ></Route>
            <Route path="reviews" element={<Reviews></Reviews>}></Route>
            <Route path="contact-us" element={<Contact></Contact>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="register" element={<Register></Register>}></Route>
            <Route
               path="dashboard"
               element={
                  <RequireAuth>
                     <Dashboard></Dashboard>
                  </RequireAuth>
               }
            >
               <Route index element={<MyAppointments></MyAppointments>}></Route>
               <Route path="users" element={<Users></Users>}></Route>
               <Route
                  path="add-doctor"
                  element={<AddDoctor></AddDoctor>}
               ></Route>
            </Route>
         </Routes>
         <ToastContainer
            position="top-center"
            autoClose={2000}
         ></ToastContainer>
         <Footer></Footer>
      </div>
   );
}

export default App;
