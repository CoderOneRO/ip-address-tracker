function Header() {
    return (
        <div className="header">
            <h1>IP Address Tracker</h1>
            <form>
                <input type="text" className="input-text" placeholder="Search for any IP address" />
                <input type="submit" value=">" className="input-submit" />
            </form>
        </div>
    );
}
export default Header;
