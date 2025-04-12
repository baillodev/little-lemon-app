import { render, screen } from '@testing-library/react';
import BookingForm from './components/pages/BookingPage/BookingForm';
import {updateTimes, initializeTimes } from "./components/pages/BookingPage/bookingUtils"

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
    const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = {type: 'update_times', newDate: '2025-04-13'}
    expect(updateTimes(state, action)).toEqual(state);
  });

  test('testing function initializeTimes', () => {
    expect(initializeTimes()).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });

});
