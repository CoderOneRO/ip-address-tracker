function Header({ searched, setSearched, setSearch }) {

    const handleSubmit = (e) => {
        setSearch(searched);
        e.preventDefault();
    }

    return (
        <div className="header">
            <h1>IP Address Tracker</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" className="input-text" value={searched} onChange={(e) => setSearched(e.target.value)} placeholder="Search for any IP address" />
                <input type="submit" value=">" className="input-submit" />
            </form>
        </div>
    );
}
export default Header;
