import React, { useState, useEffect } from "react";
import TimePicker from "rc-time-picker";
// import TimePicker from "react-time-picker";
// import 'rc-time-picker/assets/index.css';
// import ReactTimeslotCalendar from "react-timeslot-calendar";
import moment from "moment";

function HeureSelection() {
  // const [time, setTime] = useState('');

  const [disable, setDisable] = useState(true);
  const [toDate, setToDate] = useState([]);
  const [fromDate, setFromDate] = useState([]);
  const [toDateFormat, setToDateFormat] = useState('');
  const [fromDateFormat, setFromDateFormat] = useState('');

  const [todayDay, setTodayDay] = useState([]);
  const [todayMonth, setTodayMonth] = useState([]);
  const [todayYear, setTodayYear] = useState([]);


  const handleToDate = (e) => {
    const getToDateValue = e.target.value;

    const setDateFormat = getToDateValue.split('-');

    const setToYear = setDateFormat[0];
    const setToMonth = setDateFormat[1];
    const setToDay = setDateFormat[2];

    let newDate = new Date()
    // newDate.setMonth(setToMonth);
    let selectedDate = newDate.setFullYear(setToYear, setToMonth, setToDay);

    // const setToDateFormat = setToYear+""+setToMonth+""+setToDay;
    // setToDate(getToDateValue);
    // setToDateFormat(setToDateFormat);

    // console.log(setToDateFormat);
  }

  const [date, setDate] = useState("");

  const disablePastDates = () => {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var disableDates = yyyy + "-" + mm + "-" + dd;
    setDate(disableDates);
  };
  useEffect(() => {
    disablePastDates();
  }, []);

  const getCurrentDate = () => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    setTodayDay(date);
    setTodayMonth(month);
    setTodayYear(year);


      // return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  }

  return (
    <div>
      {/* React Time Picker - <a href="https://www.cluemediator.com/" target="_blank" rel="noopener noreferrer">Clue Mediator</a> */}
      {/* <br />
      <p>Selected Time: {time || '-'}</p>
      <TimePicker
        placeholder="Select Time"
        use12Hours
        showSecond={false}
        focusOnOpen={true}
        format="hh:mm A"
        onChange={e => setTime(e.format('LT'))}
      /> */}

      {/* <ReactTimeslotCalendar
        initialDate={moment([2017, 3, 24]).format()}
        let
        timeslots={[
          ["1", "2"], // 1:00 AM - 2:00 AM
          ["2", "3"], // 2:00 AM - 3:00 AM
          ["4", "6"], // 4:00 AM - 6:00 AM
          "5", // 5:00 AM
          ["4"] // 4:00 AM - 6:00 AM - 7:00AM - 8:00AM
        ]}
      /> */}

        {/* <div className="form-group">
          <label for="date">Sélectionner une date</label>
          <input type="date" className="form-control" name="toDate" placeholder="yyyy-mm-dd" onChange={(e)=>handleToDate(e)}/>
      </div> */}
    </div>
  );
}

export default HeureSelection;