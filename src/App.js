import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";
import About from "./Pages/About";
import Appointment from "./Pages/Appointment";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Reviews from "./Pages/Reviews";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="appointment" element={<Appointment></Appointment>}></Route>
        <Route path="reviews" element={<Reviews></Reviews>}></Route>
        <Route path="contact-us" element={<Contact></Contact>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
