import React, { useState } from "react";
import Wish from "./Wish";

const List = ({ names }) => {
  const [data, setData] = useState("");
  const [list, setList] = useState(names);
  const [currentID, setCurrentID] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");
  // name input
  const handleChange = (e) => {
    setData(e.target.value);
  };

  // submit button
  const handleSubmit = (e) => {
    if (currentID > -1) {
      // eslint-disable-next-line eqeqeq
      setList(list.map((user, i) => (i == currentID ? data : user)));
    } else {
      setList([...list, data]);
    }
    setCurrentID(-1);
    setData("");
  };

  // edit button click
  const handleEdit = (e) => {
    setData(e.target.name);
    setCurrentID(e.target.id);
  };

  // delete button
  const handleDelete = (e) => {
    setList(
      list.filter((user, i) => {
        // eslint-disable-next-line eqeqeq
        return (i == e.target.id) == true ? false : true;
      })
    );
  };

  // search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const finalList = list.filter((data) => data.includes(searchQuery));
  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={handleChange}
        placeholder="type your name"
      />
      <button onClick={handleSubmit}>submit</button>
      <div>
        <input type="text" placeholder="search" onChange={handleSearch} />
      </div>
      {finalList.map((name, i) => (
        <div key={i}>
          <Wish name={name} index={i + 1} />
          <button id={i} name={name} onClick={handleEdit}>
            Edit
          </button>
          <button id={i} onClick={handleDelete}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
