import { useState, useEffect } from 'react';
import Header from './Header';
import Map from './Map';
import Details from './Details';


function App() {

  const [ip, setIp] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');

  const [searched, setSearched] = useState('');
  const [search, setSearch] = useState('');

  const URL = 'https://geo.ipify.org/api/v2/country?apiKey=at_UY6Hq4CmUxKMxfQAzcj3MgXfaWwC8&ipAddress=';

  useEffect(() => {
    const fetchData = () => {
      fetch(`${URL}${search}`)
        .then(response => response.json())
        .then(data => setDetailValues(data))
        .catch(err => console.log(err))
    }
    fetchData();
  }, [search])

  const setDetailValues = (data) => {
      setIp(data.ip);
      setTimezone(data.location.timezone);
      setIsp(data.isp)
      setLocation(data.location.country + " " + data.location.region);
  }

  return (
    <div className="App">
      <Header
        searched={searched}
        setSearched={setSearched}
        setSearch={setSearch}
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
