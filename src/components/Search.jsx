import React, { useState } from 'react';

const Search = ({ cd = Function.prototype }) => {
  const [value, setValue] = useState('');
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  const handleSubmit = () => {};
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="search"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
      <button
        className="btn "
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        onClick={handleSubmit}>
        Search{' '}
      </button>
    </div>
  );
};

export default Search;
