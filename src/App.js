
import './App.scss';
import '../src/assets/scss/style.scss'


import Home from "./page/Home"

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
