import BookingForm from "./BookingForm";
import "./styles.css";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  );
}
