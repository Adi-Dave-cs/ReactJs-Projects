import useFilter from "../CustomHooks/useFilter";

export default function Lov(props) {
  function handleChange(e) {
    return props.onSelect(e.target.value);
  }
  return (
    <>
      <div className="Lov">
        <label>Filter By</label>
        <select id="Filter" onChange={handleChange}>
          <optgroup label="Region">
            <option value="">Default</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Antarctic">Antarctic</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </optgroup>
        </select>
      </div>
    </>
  );
}
