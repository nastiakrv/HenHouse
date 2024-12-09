import './filter.scss'

function Filter() {
    return(
        <div className='filter'>
            <h1>Search results for<b> London</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlfor="city">Location</label>
                    <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    placeholder='City Location'/>
                </div>
            </div>

            <div className="bottom">
            <div className="item">
                    <label htmlfor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlfor="property">Property</label>
                    <select name="property" id="property">
                        <option value="">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlfor="minPrice">Min Price</label>
                    <input 
                    type="number" 
                    id="minPrice" 
                    name="minPrice" 
                    placeholder='Any'/>
                </div>
                <div className="item">
                    <label htmlfor="maxPrice">Max Price</label>
                    <input 
                    type="number" 
                    id="maxPrice" 
                    name="maxPrice" 
                    placeholder='Any'/>
                </div>
                <div className="item">
                    <label htmlfor="bedroom">Bedroom</label>
                    <input 
                    type="text" 
                    id="bedroom" 
                    name="bedroom" 
                    placeholder='Any'/>
                </div>
                <button>
                    <img src="/search.png" alt=""/>
                </button>
            </div>

        </div>
    )
}

export default Filter