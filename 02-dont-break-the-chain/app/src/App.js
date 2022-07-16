import Week from "./Week"
import { addWeeks } from "./TimeTravel";
function App() {
  const date = new Date();

  const range = [-3,-2,-1,0,1,2,3,4,5,]

  return (
    <div className="App">
        <h1> Hello world!</h1>
        {range.map((index) => {
          return (
            <Week 
          key = {index /*TODO: switch to a datestring of the sunday in that week or something*/}
              date={addWeeks(date, index)}/>
          )
        })}
    </div>
  );
}
export default App;
