import { useRouteError } from "react-router-dom";
export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className="error_body">
        <h1>Error !!</h1>
        <br />
        <h1>Sorry, Page Not Found !</h1>
      </div>
    </>
  );
}
