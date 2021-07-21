import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./CalendarComponent.css"

import store from '../store'

export default function CalendarComponent() {

  const calendarStartHandleChange = value => {
    const start = new Date(value)
    store.dispatch({type: 'start', start: start})
  }

  const calendarEndHandleChange = value => {
    const end = new Date(value)
    store.dispatch({type: 'end', end: end})
  }

  return (
    <div className="calendars">
      <div className="calendar-1">
        <p>Start</p>
        <Calendar onChange={calendarStartHandleChange} value={store.getState().start} maxDate={new Date()}></Calendar>
      </div>
      <div className="calendar-2">
        <p>End</p>
        <Calendar onChange={calendarEndHandleChange} value={store.getState().end} maxDate={new Date}></Calendar>
      </div>
    </div> 
  );
}