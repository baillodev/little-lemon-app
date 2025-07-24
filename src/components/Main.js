import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import BookingPage from "./pages/BookingPage";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import { useReducer } from "react";
import { updateTimes, initializeTimes } from "./pages/BookingPage/bookingUtils"
import ConfirmedBooking from "./pages/BookingPage/ConfirmedBooking";
import { submitAPI } from "./pages/BookingPage/api";


export default function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitForm = formData => {
        if (submitAPI(formData)) {
            navigate('/confirmation');
        } else {
            alert('Something went wrong. Please try again.');
        }
    }

    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/booking' element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path='/orderonline' element={<OrderOnline />} />
                <Route path='/login' element={<Login />} />
                <Route path='/confirmation' element={<ConfirmedBooking />} />
            </Routes>
        </main>
    )
}