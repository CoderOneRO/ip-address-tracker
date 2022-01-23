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
    const fetchData = () => {
      fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_UY6Hq4CmUxKMxfQAzcj3MgXfaWwC8&ipAddress=${searched}`)
        .then(response => response.json())
        .then(data => setDetailValues(data))
        .catch(err => console.log(err))
    }
    fetchData();
  }, [searched])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setSearched(e);
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
      {console.log(details)}
      <Header
        searched={searched}
        setSearched={setSearched}
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
