import { fireEvent, render, screen, within } from '@testing-library/react';
import BookingForm, { validationSchema } from './components/pages/BookingPage/BookingForm';
import { updateTimes, initializeTimes } from "./components/pages/BookingPage/bookingUtils"
import { fetchAPI } from './components/pages/BookingPage/api';
import { act } from 'react';


describe('BookingForm Component', () => {
  test('Renders heading and all form fields with correct labels and attributes', async () => {
    await act(async () => {
      render(<BookingForm availableTimes={['17:00', '18:00']} dispatch={() => { }} />)
    })

    expect(screen.getByText('Book Now')).toBeInTheDocument()

    const today = new Date().toISOString().split('T')[0]

    const date = screen.getByLabelText('Choose date')
    const time = screen.getByLabelText('Choose time')
    const numberOfGuests = screen.getByLabelText('Number of guests')
    const occasion = screen.getByLabelText('Occasion')

    expect(date).toBeInTheDocument()
    expect(date).toHaveAttribute('type', 'date')
    expect(date).toHaveAttribute('id', 'date')
    expect(date).toHaveAttribute('name', 'date')
    expect(date).toHaveAttribute('min', today)
    expect(date).toHaveAttribute('aria-required', 'true')
    expect(date).toHaveAttribute('aria-describedby', 'dateError')

    await act(async () => {
      fireEvent.blur(date)
    })
    expect(date).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText('Date is required')).toBeInTheDocument()

    await act(async () => {
      fireEvent.change(date, { target: { value: today } })
      fireEvent.blur(date)
    })

    expect(date).toHaveAttribute('aria-invalid', 'false')

    expect(time).toBeInTheDocument()
    expect(time.tagName).toBe('SELECT')
    expect(time).toHaveAttribute('id', 'time')
    expect(time).toHaveAttribute('name', 'time')
    expect(time).toHaveAttribute('aria-required', 'true')
    expect(time).toHaveAttribute('aria-describedby', 'timeError')

    const timeOptions = within(time).getAllByRole('option')
    expect(timeOptions.length).toBeGreaterThan(0)

    await act(async () => {
      fireEvent.blur(time)
    })
    expect(time).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText('Time is required')).toBeInTheDocument()

    await act(async () => {
      fireEvent.change(time, { target: { value: timeOptions[1].value } })
      fireEvent.blur(time)
    })

    expect(time).toHaveAttribute('aria-invalid', 'false');


    expect(numberOfGuests).toBeInTheDocument()
    expect(numberOfGuests).toHaveAttribute('type', 'number')
    expect(numberOfGuests).toHaveAttribute('id', 'numberOfGuests')
    expect(numberOfGuests).toHaveAttribute('name', 'numberOfGuests')
    expect(numberOfGuests).toHaveAttribute('min', '1')
    expect(numberOfGuests).toHaveAttribute('max', '10')
    expect(numberOfGuests).toHaveAttribute('aria-required', 'true')
    expect(numberOfGuests).toHaveAttribute('aria-describedby', 'guestsError')

    await act(async () => {
      fireEvent.change(numberOfGuests, { target: { value: '' } })
      fireEvent.blur(numberOfGuests)
    })
    expect(numberOfGuests).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText('Number of guests is required')).toBeInTheDocument()

    await act(async () => {
      fireEvent.change(numberOfGuests, { target: { value: '5' } })
      fireEvent.blur(numberOfGuests)
    })

    expect(numberOfGuests).toHaveAttribute('aria-invalid', 'false')

    expect(occasion).toBeInTheDocument()
    expect(occasion.tagName).toBe('SELECT')
    expect(occasion).toHaveAttribute('id', 'occasion')
    expect(occasion).toHaveAttribute('name', 'occasion')
    expect(occasion).toHaveAttribute('aria-required', 'true')
    expect(occasion).toHaveAttribute('aria-describedby', 'occasionError')

    const occasionOptions = within(occasion).getAllByRole('option')
    expect(occasionOptions.length).toBeGreaterThan(0)
    expect(occasionOptions.map(occasionOption => occasionOption.textContent.trim())).toEqual(expect.arrayContaining(['Birthday', 'Anniversary']))

    await act(async () => {
      fireEvent.blur(occasion)
    })
    expect(occasion).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText('Occasion is required')).toBeInTheDocument()

    await act(async () => {
      fireEvent.change(occasion, { target: { value: occasionOptions[0].value } })
      fireEvent.blur(occasion)
    })
    expect(occasion).toHaveAttribute('aria-invalid', 'false')
  })

  test('testing validation schema', async () => {

    const validData = {
      date: new Date().toISOString().split('T')[0],
      time: '18:00',
      numberOfGuests: 4,
      occasion: 'Birthday',
    }

    const invalidData = {
      date: '',
      time: '',
      numberOfGuests: '',
      occasion: '',
    }

    await expect(validationSchema.validate(validData)).resolves.toBe(validData)
    await expect(validationSchema.validate(invalidData)).rejects.toThrow()
  })
})

describe('Utility functions for booking', () => {
  test('testing function updateTimes', () => {

    const state = fetchAPI(new Date());
    const dateMAJ = '2025-04-12'

    const action = { type: 'update_times', newDate: dateMAJ }

    const availableTimes = fetchAPI(new Date(dateMAJ));

    expect(updateTimes(state, action)).toEqual(availableTimes);
  })

  test('testing function initializeTimes', () => {
    const availableTimes = fetchAPI(new Date());

    expect(initializeTimes()).toEqual(availableTimes);
  })

})
