import Week from "./Week"

function App() {
  const date = new Date();

  return (
    <div className="App">
        <h1> Hello world!</h1>
        <Week date={date}/>
    </div>
  );
}

export default App;
