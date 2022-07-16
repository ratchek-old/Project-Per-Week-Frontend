import Day from './Day';

const Week = (props) => {
  function addDays(date, numberOfDays){
    let newDate = new Date();
    newDate.setDate(props.date.getDate() + numberOfDays);
    return (newDate);
  }
  const range = [0,1,2,3,4,5,6]

  console.log(range)
  return (
    <div className="week"> 
      {range.map((index) => {
        return (
          <Day date={ addDays(props.date, index) }/>
        )  
      })}
    </div>
  );
}

export default Week;
