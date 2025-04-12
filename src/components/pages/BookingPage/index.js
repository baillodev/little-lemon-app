import BookingForm from "./BookingForm";
import './styles.css'

export default function BookingPage({availableTimes, dispatch}) {

    return (
        <div className='container'>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    )
}