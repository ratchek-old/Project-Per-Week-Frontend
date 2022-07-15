import Day from './Day';

function App() {
  const date = new Date();

  return (
    <div className="App">
        <h1> Hello world!</h1>
        <Day date={date}/>
    </div>
  );
}

export default App;
