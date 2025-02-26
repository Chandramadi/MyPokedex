import "./search.css";

function Search() {

    return (
        <div className="search-wrapper">
            <input 
                id="input-field"
                type="text"
                placeholder="Enter Your Pokemon Name....."
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Enter Your Pokemon Name....."} 
            />
        </div>
    )
}

export default Search;