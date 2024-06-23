import { useState } from "react";

export default function SearchBar(props) {
  const [data, setData] = useState("");

  function handleClick(e) {
    if (e.target.value == "") {
      props.onSubmit("");
      return;
    }
    e.target.value = "";
    props.onSubmit(data);
  }
  return (
    <>
      <div className="search">
        <input
          placeholder="Search for a Country ..."
          onInput={(e) => setData(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter") handleClick(e);
          }}
        />
        <button className="searchButton" onClick={(e) => handleClick(e)}>
          Go
        </button>
      </div>
    </>
  );
}
