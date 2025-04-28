import BookingForm from "./BookingForm";
import './styles.css'

export default function BookingPage({ availableTimes, dispatch, submitForm }) {

    return (
        <>
            <section className="hero">
                <div className='container'>
                    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
                </div>
            </section>
        </>
    )
}