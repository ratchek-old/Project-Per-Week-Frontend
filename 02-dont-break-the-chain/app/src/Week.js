import Day from './Day';
import { addDays } from './TimeTravel';

const Week = (props) => {

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
