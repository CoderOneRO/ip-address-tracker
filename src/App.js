import { useState, useEffect } from "react";
import Header from './Header';
import Details from './Details';
import Map from './Map';
import Error from "./Error";
import "./index.css";

function App() {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ipData, setIpData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const URL = 'https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_4k7FifjFHjXGl2VMaTYSQWfubI378&ipAddress=';

  const fetchData = async (apiUrl) => {
    try {
      const promise = await fetch(apiUrl);
      const res = await promise.json();
      setIpData(res);
      if (res.code) throw new Error("Error");
    } catch (e) {
      setError(true);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    fetchData(`${URL}`);
  }, []);

  const getDomainOrIp = (e) => {
    e.preventDefault();
    setError(false);
    setIsLoaded(false);
    fetchData(`${URL}${inputValue}`);
    setInputValue("");
  };

  return (
    <div className="App">
      <Header
        getDomainOrIp={getDomainOrIp}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Details
        ipData={ipData}
        isLoaded={isLoaded}
        error={error}
      />
      <Map
        ipData={ipData}
        isLoaded={isLoaded}
        error={error}
      />
    </div>
  );
}

export default App;
