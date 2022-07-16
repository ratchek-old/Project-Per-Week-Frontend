const Day = (props) => {
  const isToday = (date) => { return date.toDateString() === new Date().toDateString();}
  return (
    <div 
      className="day"
      id={isToday(props.date) ?"today": null}
      key = {props.date.getDate()}
    > 
        {props.date.getDate()} 
    </div>
  );
}

export default Day;
