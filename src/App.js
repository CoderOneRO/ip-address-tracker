import { useState, useEffect } from 'react';
import Header from './Header';
import Map from './Map';
import Details from './Details';


function App() {

  const [details, setDetails] = useState([]);
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');

  const [searched, setSearched] = useState('');

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_irW4OTX8X20GcbWOZoja7bCscLCBE&ipAddress=${searched}`)
      .then(response => response.json())
      .then(data => setDetailValues(data))
      .catch(err => console.log(err))
  }

  const handleSubmit = (e) => {
    console.log(e);
  }

  const setDetailValues = (data) => {
      setDetails(data)
      setIp(data.ip);
      setTimezone(data.location.timezone);
      setIsp(data.isp)
      setLocation(data.location.country + " " + data.location.region);
  }

  return (
    <div className="App">
      <Header
        handleSubmit={handleSubmit}
      />
      <Map />
      <Details
        ip={ip}
        location={location}
        timezone={timezone}
        isp={isp}
      />
    </div>
  );
}

export default App;
