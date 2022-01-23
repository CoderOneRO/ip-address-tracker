function Header({ searched, setSearched, handleSubmit }) {

    const handleChange = (e) => {
        setSearched(e)
    }

    return (
        <div className="header">
            <h1>IP Address Tracker</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="input-text" onChange={(e) => handleChange(e.target.value)} placeholder="Search for any IP address" />
                <input type="submit" value=">" className="input-submit" />
            </form>
        </div>
    );
}
export default Header;
