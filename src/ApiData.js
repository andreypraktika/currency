import React, {useState, useEffect} from 'react'
import axios from "axios";
import c3 from "c3";
import 'c3/c3.css';
import Select from 'react-select'
import store from './store'

function ApiData(){
  const startDateValue = store.getState().start
  const endDateValue = store.getState().end

  const newdate = new Date(startDateValue);
  newdate.setDate(newdate.getDate()-7);
  var nd = new Date(newdate);

  const [current, setCurrent] = useState({value:292, label:"USD"})
  const [isUpdated, setUpdated] = useState(false)

  useEffect(() => {
    const apiUrl = `https://www.nbrb.by/api/exrates/rates/dynamics/${current.value}?enddate=${endDateValue.getFullYear()}-${endDateValue.getMonth()}-${endDateValue.getDate()}&startdate=${startDateValue.getFullYear()}-${startDateValue.getMonth()}-${startDateValue.getDate()}`;
    axios.get(apiUrl).then(resp => {
      const values = resp.data;
      generateChart(values);
  },[]);
  });

  store.subscribe(() => {
    setUpdated(!isUpdated)
  })

    const options = [
      {
        value: 292,
        label: "EUR"
      },
      {
        value: 145,
        label: "USD",
      },
      {
        value: 298,
        label: "RUB"
      }
    ];

  const currentHandler = e => {
    setCurrent(e)
  }
 
  const generateChart = (values) => {
    const currRate = values.map(value => value.Cur_OfficialRate);
    c3.generate({
      bindto: "#chart",
      data: {
        columns: [
          [current.label, ...currRate],
        ],
        type: "line",
      },
  
    });
  }

  return (
      <div style={{maxWidth:"900px", margin: "0 auto"}}>
          <h1>Currency</h1>
          <p>{startDateValue.toISOString().slice(0,10)} - {endDateValue.toISOString().slice(0,10)}</p>
          <Select  defaultvalue={options[0]} options={options} onChange={currentHandler}></Select>
          <div style={{marginTop:"30px"}} id="chart" />
      </div>
  )
}
export default ApiData;