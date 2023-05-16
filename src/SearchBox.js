import React from 'react';

const SearchBox = ({ searchTerm, setSearchTerm }) => {

  const handleChange = (e) => {
   setSearchTerm(e.target.value);
  };


  return (
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
  );
};

export default SearchBox;
