// src/pages/CalendarV2.jsx
import React from "react";
import "../special_calendar/CalendarV2.css";

const Calendar = ({ addTask }) => {
  var d = new Date();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var firstDayOfNextMonth = new Date(year, month, 1);
  var lastDayOfMonth = new Date(firstDayOfNextMonth - 1);
  var lastDay = lastDayOfMonth.getDate();
  var dayOfWeek = lastDayOfMonth.getDay();

  var days = [7, 1, 2, 3, 4, 5, 6];
  dayOfWeek = days[dayOfWeek];

  let row1 = [];
  let row2 = [];
  let row3 = [];
  let row4 = [];
  let row5 = [];
  let row6 = [];
  let rows = [row1, row2, row3, row4, row5, row6];

  var rows_index = 0;
  while (lastDay > 0) {
    let n = rows[rows_index];
    n.push(lastDay);
    lastDay -= 1;
    dayOfWeek -= 1;
    if (dayOfWeek < 1) {
      rows_index += 1;
      dayOfWeek = 7;
    }
  }
  row1.reverse();
  for (let i of rows) {
    if (i.includes(1)) {
      while (i.length < 7) {
        i.push(" ");
      }
    }
  }

  for (let i of rows) {
    if (i.includes(28)) {
      while (i.length < 7) {
        i.push(" ");
      }
    }
  }

  row6.reverse();
  row5.reverse();
  row4.reverse();
  row3.reverse();
  row2.reverse();

  const today = d.getDate();

  function IsToday(value, index) {
    if (value === today) {
      return (
        <button id="today" key={index}>
          <span>{value}</span>
        </button>
      );
    } else {
      return <button key={index}>{value}</button>;
    }
  }

  function IsToday_u(value, index) {
    if (value === today) {
      return (
        <button className="calendar-radius-up" id="today" key={index}>
          <span>{value}</span>
        </button>
      );
    } else {
      return (
        <button className="calendar-radius-up" key={index}>
          {value}
        </button>
      );
    }
  }

  function IsToday_d(value, index) {
    if (value === today) {
      return (
        <button className="calendar-radius-down" id="today" key={index}>
          <span>{value}</span>
        </button>
      );
    } else {
      return (
        <button className="calendar-radius-down" key={index}>
          {value}
        </button>
      );
    }
  }

  return (
    <div className="flex flex-col items-center absolute bottom-4 right-64" id="main-div-calendar">
      <span>
        <h2>M</h2>
        <h2>T</h2>
        <h2>W</h2>
        <h2>T</h2>
        <h2>F</h2>
        <h2>S</h2>
        <h2>S</h2>
      </span>
      <div>
        <span>{row6.map((item, index) => IsToday_u(item, index))}</span>
        <span>{row5.map((item, index) => IsToday_u(item, index))}</span>
        <span>{row4.map((item, index) => IsToday(item, index))}</span>
        <span>{row3.map((item, index) => IsToday(item, index))}</span>
        <span>{row2.map((item, index) => IsToday(item, index))}</span>
        <span>{row1.map((item, index) => IsToday_d(item, index))}</span>
        <button
          className="mt-5 text-white font-semibold text-xl rounded-md"
          id="Add-task-button"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Calendar;
