import './App.css';
import ApiData from './ApiData'
import CalendarComponent from './calendar/CalendarComponent'
import store from './store';


function App() {
  function currentDate(){
    const date = new Date();
    console.log(date)

    return ({
      currentDate: date.getDate(),
      currentMonth: date.getMonth(),
      currentYear: date.getFullYear(),
    });
  }

  return (
    
    <div className="App">
      <currentDate/>
      <ApiData currentDate={currentDate()}></ApiData>
      <CalendarComponent store = {store}/>
    </div>
  );
  
}

export default App;
