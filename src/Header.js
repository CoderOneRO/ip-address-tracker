function Header({ handleSubmit }) {

    return (
        <div className="header">
            <h1>IP Address Tracker</h1>
            <form>
                <input type="text" className="input-text" placeholder="Search for any IP address" />
                <input type="submit" value=">" className="input-submit" onSubmit={(e) => handleSubmit(e.target.value)}/>
            </form>
        </div>
    );
}
export default Header;
