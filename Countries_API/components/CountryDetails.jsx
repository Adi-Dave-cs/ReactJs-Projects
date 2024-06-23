import { useState, useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import Error from "./Error";

function goback() {
  return history.back();
}
export default function CountryDetails() {
  const param = useParams();
  const urlName = param.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${urlName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population,
          area: data.area,
          coatOfArms: data.coatOfArms.svg,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          flag: data.flags.svg,
          tld: data.tld,
          languages: Object.values(data.languages).join(", "),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          borders: [],
        });

        if (!data.borders) data.borders = [];

        Promise.all(
          data.borders.map((border) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
              .then((res) => res.json())
              .then(([borderCountry]) => borderCountry.name.common);
          })
        ).then((borders) => {
          setCountryData((prevState) => ({ ...prevState, borders }));
        });
      })
      .catch((err) => setNotFound(true));
  }, [urlName]);

  if (notFound || countryData == undefined || countryData == null) {
    return <Error />;
  }
  return countryData == undefined || countryData == null ? (
    <>
      <div className={`wfull`}>
        <button className="NavButton" onClick={goback}>
          ← Go Back{" "}
        </button>
      </div>
      <h2>Loading ... </h2>
    </>
  ) : (
    <>
      <div className="full_screen">
        <div className={`wfull`}>
          <button className="NavButton" onClick={goback}>
            ← Go Back
          </button>
        </div>
        <div className="card_cd">
          <div className="image_container_cd">
            <img src={countryData?.flag} alt="Flag comes here" />
          </div>
          <div className="description_cd">
            <p className="title">{countryData?.name}</p>
            <p className="information">Capital : {countryData?.capital}</p>
            <p className="information">Area : {countryData?.area}</p>
            <p className="information">
              Population : {countryData?.population}
            </p>
            <p className="information">Capital : {countryData?.capital}</p>
            <p className="information">Region : {countryData?.region}</p>
            <p className="information">Subregion : {countryData?.subregion}</p>
            <p className="information">
              Currencies : {countryData?.currencies}
            </p>
            <p className="information">Languages : {countryData?.languages} </p>
            {countryData.borders.length > 0 && (
              <div className="information">
                <b>Border Countries: </b> &nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`} className="linkbox">
                    {border}{" "}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {countryData.coatOfArms && (
            <div className="image_container_cd light">
              <img src={countryData?.coatOfArms} alt="coatOfArms goes here" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
