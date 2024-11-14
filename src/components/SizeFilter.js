import React from 'react';

const SizeFilter = ({ setFilteredSize }) => {
  return (
    // <div>
    //   <h3>Filter by Size:</h3>
    //   <button onClick={() => setFilteredSize('All')}>All</button>
    //   <button onClick={() => setFilteredSize('S')}>S</button>
    //   <button onClick={() => setFilteredSize('M')}>M</button>
    //   <button onClick={() => setFilteredSize('L')}>L</button>
    //   <button onClick={() => setFilteredSize('XS')}>XS</button>
    // </div>

    <div className="SizeFilter">
      <select onChange={(e) => setFilteredSize(e.target.value)}>
        <option value="All">All Sizes</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XS">XS</option>
      </select>
    </div>
  );
};

export default SizeFilter;