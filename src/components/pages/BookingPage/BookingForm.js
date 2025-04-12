import { useState } from "react"

export default function BookingForm({availableTimes, dispatch}) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const handleDateChange = e => {
        const selectedDate = e.target.value;
        setDate(selectedDate)
        dispatch({ type: 'update_times', newDate: selectedDate })
    }

    return (
        <>
            <h1>Book Now</h1>
            <form>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                >
                    {/* <option value='' disabled hidden>Choose time</option> */}
                    {availableTimes.map((t, index) => (
                        <option key={index} value={t}>{t}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={numberOfGuests}
                    onChange={e => setNumberOfGuests(Number(e.target.value))}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                >
                    {/* <option value='' disabled hidden>Occasion</option> */}
                    <option value='Birthday'>Birthday</option>
                    <option value='Anniversary'>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    )
}