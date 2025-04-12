import { Link } from "react-router-dom";

export default function ConfirmedBooking() {
  return (
    <div className='container'>
      <h1>Reservation Confirmed 🎉</h1>
      <p>Thank you for booking with us. We look forward to seeing you!</p>
      <Link to='/'>Go home -{'>'}</Link>
    </div>
  )
}
