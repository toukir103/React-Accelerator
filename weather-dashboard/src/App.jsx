import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/header/weather/WeatherBoard";

function App() {
  return (
    <>
      <div className="grid place-items-center h-screen">
        <Header />
        <WeatherBoard />
      </div>
    </>
  );
}

export default App;
