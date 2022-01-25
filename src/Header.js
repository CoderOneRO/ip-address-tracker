function Header({ getDomainOrIp, inputValue, setInputValue }) {

    const onChangeHandler = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    };

    return (
        <header className="header">
            <h1>IP Address Tracker</h1>
            <form onSubmit={getDomainOrIp}>
                <input
                    type="text"
                    className="input-text"
                    value={inputValue}
                    onChange={onChangeHandler}
                    placeholder="Search for any IP address"
                />
                <input
                    type="submit"
                    value=">"
                    className="input-submit"
                />
            </form>
        </header>
    );
}

export default Header;
