import Week from "./Week"
import { addWeeks } from "./TimeTravel";
function App() {
  const date = new Date();

  return (
    <div className="App">
        <h1> Hello world!</h1>
        <Week date={date}/>
        <Week date={addWeeks(date, 1)} />
    </div>
  );
}

export default App;
