import React, { useState } from 'react';

const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState('');
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSabmit();
    }
  };
  const handleSabmit = () => {
    cb(value);
  };
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="search "
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          value={value}
        />
        <button
          className="btn"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
          onClick={handleSabmit}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
