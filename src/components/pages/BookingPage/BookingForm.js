import Restaurant from "../../../assets/images/restaurant.jpg";
import Cook from "../../../assets/images/cook.jpg";
import Server from "../../../assets/images/server.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Calendar, ChevronDown } from "lucide-react";

const today = new Date().toISOString().split("T")[0];

export const validationSchema = Yup.object({
  date: Yup.string()
    .required("Date is required")
    .test(
      "is-future",
      "Date must be today or later",
      (value) => value && new Date(value) >= new Date(today)
    ),
  time: Yup.string().required("Time is required"),
  numberOfGuests: Yup.number()
    .required("Number of guests is required")
    .min(1, "At least 1 guest")
    .max(10, "No more than 10 guests"),
  occasion: Yup.string().required("Occasion is required"),
});

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  return (
    <>
      <Formik
        initialValues={{
          date: "",
          time: "",
          numberOfGuests: 1,
          occasion: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        {({ errors, touched, setFieldValue, isValid, dirty }) => (
          <Form>
            <div className="hero">
              <div className="container stretch">
                <h1>Book Now</h1>

                <div className="fields">
                  <div className="field">
                    <label htmlFor="date">Choose date</label>
                    <Field
                      type="date"
                      id="date"
                      name="date"
                      min={today}
                      onChange={(e) => {
                        const selectedDate = e.target.value;
                        setFieldValue("date", selectedDate);
                        dispatch({
                          type: "update_times",
                          newDate: selectedDate,
                        });
                      }}
                      aria-required="true"
                      aria-invalid={
                        errors.date && touched.date ? "true" : "false"
                      }
                      aria-describedby="dateError"
                    />
                    <ErrorMessage name="date">
                      {(msg) => (
                        <div id="dateError" className="error">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="field">
                    <label htmlFor="time">Choose time</label>
                    <Field
                      as="select"
                      id="time"
                      name="time"
                      aria-required="true"
                      aria-invalid={
                        errors.time && touched.time ? "true" : "false"
                      }
                      aria-describedby="timeError"
                    >
                      <option value="" disabled hidden>
                        Choose a time
                      </option>
                      {availableTimes.map((t, i) => (
                        <option key={i} value={t}>
                          {t}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name="time">
                      {(msg) => (
                        <div id="timeError" className="error">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="field">
                    <label htmlFor="numberOfGuests">Number of guests</label>
                    <Field
                      type="number"
                      id="numberOfGuests"
                      name="numberOfGuests"
                      min="1"
                      max="10"
                      aria-required="true"
                      aria-invalid={
                        errors.numberOfGuests && touched.numberOfGuests
                          ? "true"
                          : "false"
                      }
                      aria-describedby="guestsError"
                    />
                    <ErrorMessage name="numberOfGuests">
                      {(msg) => (
                        <div id="guestsError" className="error">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="field">
                    <label htmlFor="occasion">Occasion</label>
                    <Field
                      as="select"
                      id="occasion"
                      name="occasion"
                      aria-required="true"
                      aria-invalid={
                        errors.occasion && touched.occasion ? "true" : "false"
                      }
                      aria-describedby="occasionError"
                    >
                      <option value="" disabled hidden>
                        Select an occasion
                      </option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                    </Field>
                    <ErrorMessage name="occasion">
                      {(msg) => (
                        <div id="occasionError" className="error">
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!(isValid && dirty)}
                  aria-label="On Submit"
                  aria-disabled={!(isValid && dirty) ? "true" : "false"}
                >
                  Make Your Reservation
                </button>
              </div>
            </div>

            <div className="container booking-bottom">
              <div className="image-container">
                  <img src={Restaurant} alt="Server picture" />
                </div>
                <div className="image-container">
                  <img src={Server} alt="Server picture" />
                </div>
                <div className="image-container">
                  <img src={Cook} alt="Server picture" />
                </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
