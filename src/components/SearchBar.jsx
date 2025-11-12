import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    // store user input city name
    const [city, setCity] = useState('');

    // handle form submit onclick
    const submit = (e) => {
        e.preventDefault();
        if (city.trim()) onSearch(city.trim()); // If input is not empty call the onSearch function from parent
    };

    return (
        <form className="d-flex mb-3" onSubmit={submit}>
            <input 
                className="form-control me-2" 
                placeholder="Enter city name (e.g. Toronto)"
                value={city} 
                onChange={e => setCity(e.target.value)} 
            />
            <button className="btn btn-primary" type="submit">
                Search
            </button>
        </form>
    );
}

export default SearchBar;
