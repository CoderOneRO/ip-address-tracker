function Details({ ip, location, timezone, isp }) {
    
    return (
        <div className="details-container">
            <div className="details">
                <div>
                    <h5>IP Address</h5>
                    <h2>{ip}</h2>
                </div>
                <div className="detail">
                    <h5>Location</h5>
                    <h2>{location}</h2>
                </div>
                <div className="detail">
                    <h5>Timezone</h5>
                    <h2>{timezone}</h2>
                </div>
                <div className="detail">
                    <h5>ISP</h5>
                    <h2>{isp}</h2>
                </div>
            </div>
        </div>
    );
}

export default Details;