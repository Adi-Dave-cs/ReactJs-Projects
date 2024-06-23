import SearchBar from "./SearchBar";
import Lov from "./Lov";
import Countries from "./Countries";
import { useState } from "react";
import useFilter from "../CustomHooks/useFilter";

export default function Home() {
  const [search, setSearch] = useState("");
  const [{ region, setRegion }] = useFilter();
  return (
    <>
      <div className={`section-container`}>
        <SearchBar onSubmit={setSearch} />
        <Lov onSelect={setRegion} />
      </div>
      <div className={`CountryDet`}>
        <Countries find={search} region={region} />
      </div>
    </>
  );
}
