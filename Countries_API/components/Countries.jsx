import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import useFilter from "../CustomHooks/useFilter";

const url = "https://restcountries.com/v3.1/all";

function makeComponent(filteredData) {
  const arr = filteredData.map((el) => {
    return (
      <CountryCard
        key={el.name.common}
        flag={el.flags}
        title={el.name.official}
        capital={el.capital}
        continent={el.continents[0]}
        area={el.area}
        population={el.population}
        timezone={el.timezones[0]}
      />
    );
  });
  return arr;
}
export default function Countries(props) {
  const [init, setInit] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((r) => {
        setInit(r);
      });
  }, []);

  if (props.find == "" && props.region == "") {
    return makeComponent(init);
  }

  const filteredData = props.find
    ? init.filter((el) =>
        el.name.official.toLowerCase().includes(props.find.toLowerCase())
      )
    : init;

  const filteredRgnData = props.region
    ? filteredData.filter((el) =>
        el.region.toLowerCase().includes(props.region.toLowerCase())
      )
    : filteredData;

  return makeComponent(filteredRgnData);
}
