import { render, screen } from '@testing-library/react';
import BookingForm from './components/pages/BookingPage/BookingForm';
import {updateTimes, initializeTimes } from "./components/pages/BookingPage/bookingUtils"
import { fetchAPI } from './components/pages/BookingPage/api';

describe('BookingForm Component', () => {
  test('Renders heading and all form fields with correct labels and attributes', () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} />);

    expect(screen.getByText('Book Now')).toBeInTheDocument();

    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();

    expect(screen.getByLabelText('Choose date')).toHaveAttribute('type', 'date');
    expect(screen.getByLabelText('Choose time')).toHaveAttribute('id', 'res-time');
    expect(screen.getByLabelText('Number of guests')).toHaveAttribute('type', 'number');
    expect(screen.getByLabelText('Occasion')).toHaveAttribute('id', 'occasion');
  });
});

describe('Utility functions for booking', () => {
  test('testing function updateTimes', () => {

    const state = fetchAPI(new Date());
    const dateMAJ = '2025-04-12'

    const action = {type: 'update_times', newDate: dateMAJ}

    const availableTimes = fetchAPI(new Date(dateMAJ));

    expect(updateTimes(state, action)).toEqual(availableTimes);
  });

  test('testing function initializeTimes', () => {
    const availableTimes = fetchAPI(new Date());

    expect(initializeTimes()).toEqual(availableTimes);
  });

});
