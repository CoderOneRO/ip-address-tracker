import Error from "./Error";

function Details({ ipData, isLoaded, error }) {
    
    return (
        <div className="details-container">
            {error ? (
            <Error message={`${ipData.messages}`} />
            ) : (
            <div className="details">
                <div>
                    <h5>IP Address</h5>
                    <h2>{isLoaded ? ipData.ip : "Loading..."}</h2>
                </div>
                <div className="detail">
                    <h5>Location</h5>
                    <h2>{isLoaded ? `${ipData.location.city}, ${ipData.location.region}` : "Loading..."}</h2>
                </div>
                <div className="detail">
                    <h5>Timezone</h5>
                    <h2>{isLoaded ? ipData.location.timezone : "Loading..."}</h2>
                </div>
                <div className="detail">
                    <h5>ISP</h5>
                    <h2>{isLoaded ? ipData.isp : "Loading..."}</h2>
                </div>
            </div>
            )}
        </div>
    );
}

export default Details;