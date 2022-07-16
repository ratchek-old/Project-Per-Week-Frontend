import { isEvenMonth } from "./TimeTravel";

const Day = (props) => {
  const isToday = (date) => { return date.toDateString() === new Date().toDateString();}
  console.log("" + props.date.toDateString() + "  ===   " + new Date().toDateString())
  return (
    <div 
      className= {isEvenMonth(props.date) ? "day even-month" : "day odd-month"}
      id={isToday(props.date) ?"today": null}
      key = {props.date.getDate()}
    > 
        {props.date.getMonth() + " / "  + props.date.getDate()} 
    </div>
  );
}

export default Day;
