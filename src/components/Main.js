import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import BookingPage from "./pages/BookingPage";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import { useReducer } from "react";
import {updateTimes, initializeTimes } from "./pages/BookingPage/bookingUtils"

export default function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        // Uitiliser ARIA pour l'accessibilité
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/booking' element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}  />} />
                <Route path='/orderonline' element={<OrderOnline />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </main>
    )
}