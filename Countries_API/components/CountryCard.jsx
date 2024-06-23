export default function CountryCard({
  title,
  flag,
  capital,
  continent,
  area,
  population,
  timezone,
}) {
  return (
    <>
      <a className={`card`} href={`/${title}`}>
        <div className="image_container">
          <img src={flag.svg} alt={flag.alt} />
        </div>
        <div className="description">
          <p className="title">{title}</p>
          <p className="information">Capital : {capital}</p>
          <p className="information">Area : {area}</p>
          <p className="information">Population : {population}</p>
          <p className="information">Timezone : {timezone}</p>
        </div>
      </a>
    </>
  );
}
