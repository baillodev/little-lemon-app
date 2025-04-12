import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
    const today = new Date().toISOString().split('T')[0]

    const validationSchema = Yup.object({
        date: Yup.string()
            .required('Date is required')
            .test('is-future', 'Date must be today or later', value => (
                value && new Date(value) >= new Date(today)
            )),
        time: Yup.string().required('Time is required'),
        numberOfGuests: Yup.number()
            .required('Number of guests is required')
            .min(1, 'At least 1 guest')
            .max(10, 'No more than 10 guests'),
        occasion: Yup.string().required('Occasion is required')
    });

    return (
        <>
            <h1>Book Now</h1>
            <Formik
                initialValues={{
                    date: '',
                    time: '',
                    numberOfGuests: 1,
                    occasion: ''
                }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    submitForm(values)
                }}
            >
                {({ errors, touched, setFieldValue, isValid, dirty }) => (
                    <Form>
                        <label htmlFor="date">Choose date</label>
                        <Field
                            type="date"
                            id="date"
                            name="date"
                            min={today}
                            onChange={e => {
                                const selectedDate = e.target.value
                                setFieldValue("date", selectedDate)
                                dispatch({ type: 'update_times', newDate: selectedDate })
                            }}
                            aria-required="true"
                            aria-invalid={errors.date && touched.date ? "true" : "false"}
                            aria-describedby="dateError"
                        />
                        <ErrorMessage name="date">
                            {msg => <div id="dateError" className="error">{msg}</div>}
                        </ErrorMessage>

                        <label htmlFor="time">Choose time</label>
                        <Field
                            as="select"
                            id="time"
                            name="time"
                            aria-required="true"
                            aria-invalid={errors.time && touched.time ? "true" : "false"}
                            aria-describedby="timeError"
                        >
                            <option value='' disabled hidden>Choose a time</option>
                            {availableTimes.map((t, i) => (
                                <option key={i} value={t}>{t}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="time">
                            {msg => <div id="timeError" className="error">{msg}</div>}
                        </ErrorMessage>

                        <label htmlFor="numberOfGuests">Number of guests</label>
                        <Field
                            type="number"
                            id="numberOfGuests"
                            name="numberOfGuests"
                            min="1"
                            max="10"
                            aria-required="true"
                            aria-invalid={errors.numberOfGuests && touched.numberOfGuests ? "true" : "false"}
                            aria-describedby="guestsError"
                        />
                        <ErrorMessage name="numberOfGuests">
                            {msg => <div id="guestsError" className="error">{msg}</div>}
                        </ErrorMessage>

                        <label htmlFor="occasion">Occasion</label>
                        <Field
                            as="select"
                            id="occasion"
                            name="occasion"
                            aria-required="true"
                            aria-invalid={errors.occasion && touched.occasion ? "true" : "false"}
                            aria-describedby="occasionError"
                        >
                            <option value='' disabled hidden>Select an occasion</option>
                            <option value='Birthday'>Birthday</option>
                            <option value='Anniversary'>Anniversary</option>
                        </Field>
                        <ErrorMessage name="occasion">
                            {msg => <div id="occasionError" className="error">{msg}</div>}
                        </ErrorMessage>

                        <button type="submit" disabled={!(isValid && dirty)}>
                            Make Your Reservation
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}